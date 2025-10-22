import { useSelector } from "react-redux"
import { useState } from "react"

import BarraPesquisa from "../../components/BarraPesquisa"
import { Main, TextoAdicionarContatos } from "./styles"
import type { RootReducer } from "../../store"
import LinhaTabela from "../../components/LinhaTabela"
import { BotaoAcao } from "../../components/Botao"
import Modal from "../../components/Modal"
import FormContato from "../FormContato"
import { useModal } from "../../hooks/modal"

const MainDesktop = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const { termo, criterios, valor } = useSelector((state: RootReducer) => state.filtro)

    const { isOpen, mostrarModal } = useModal();
    const [idEditando, setIdEditando] = useState<number | null>(null)


    const abrirModalEditar = (id: number) => {
        setIdEditando(id)
        if (!isOpen) mostrarModal()
    }

    const abrirModalAdicionar = () => {
        setIdEditando(null)
        if (!isOpen) mostrarModal()
    }

    const contatosFiltrados = () => {
        let contatosFiltrados = itens
        if (termo !== undefined) {
            contatosFiltrados = contatosFiltrados.filter((c) => c.nome.toLowerCase().search(termo.toLowerCase()) >= 0)

            if (criterios === 'Categoria') {
                contatosFiltrados = contatosFiltrados.filter(
                    (c) => c.categoria === valor
                )
            }

            if (criterios === 'Favoritos') {
                contatosFiltrados = contatosFiltrados.filter(
                    (c) => c.favorito === true
                )
            }
            return contatosFiltrados
        }

        return contatosFiltrados
    }

    let contatos = contatosFiltrados()
    return (
        <Main>
            <header>
                <BarraPesquisa />
                <BotaoAcao arredondado type="button" onClick={() => abrirModalAdicionar()} >+</BotaoAcao>
            </header>
            {contatos.length === 0 ? <TextoAdicionarContatos>Adicione contatos para utilizar a lista!</TextoAdicionarContatos> : (
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contatos.map((c) => (
                            <LinhaTabela
                                id={c.id}
                                nome={c.nome}
                                email={c.email}
                                telefone={c.telefone}
                                categoria={c.categoria}
                                favorito={c.favorito}
                                onEditar={() => abrirModalEditar(c.id)}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            {isOpen && (
                <Modal onClick={mostrarModal}>
                    <FormContato id={idEditando ?? undefined} onClose={mostrarModal} />
                </Modal>
            )}
        </Main>
    )
}

export default MainDesktop