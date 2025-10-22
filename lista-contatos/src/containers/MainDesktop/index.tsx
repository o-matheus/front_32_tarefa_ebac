import { useSelector } from "react-redux"
import { useState } from "react"

import BarraPesquisa from "../../components/BarraPesquisa"
import { Main } from "./styles"
import type { RootReducer } from "../../store"
import LinhaTabela from "../../components/LinhaTabela"
import {BotaoAcao} from "../../components/Botao"
import Modal from "../../components/Modal"
import FormContato from "../FormContato"
import { useModal } from "../../hooks/modal"

const MainDesktop = () => {
    const { isOpen, mostrarModal } = useModal();
    const {itens} = useSelector((state:RootReducer) => state.contatos)
    const [idEditando, setIdEditando] = useState<number | null>(null)
    let contatos = itens

    const abrirModalEditar = (id: number) => {
        setIdEditando(id)
        if(!isOpen) mostrarModal()
    }

    const abrirModalAdicionar = () => {
        setIdEditando(null)
        if(!isOpen) mostrarModal()
    }
    
    return (
        <Main>
            <header>
                <BarraPesquisa/>
                <BotaoAcao type="button" onClick={() => abrirModalAdicionar()} >+ Adiciona Contato</BotaoAcao>
            </header>
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
            {isOpen && (
                <Modal onClick={mostrarModal}>
                    <FormContato id={idEditando ?? undefined} onClose={mostrarModal} />
                </Modal>
            )}
        </Main>
    )
}

export default MainDesktop