import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import BarraPesquisa from "../../../components/BarraPesquisa"
import { BotaoNavegar } from "../../../components/Botao"
import FiltrosContatos from "../../../containers/FiltrosContatos"
import { DivMobile } from "./styles"
import type { RootReducer } from "../../../store"
import DivInfo from "../../../components/DivInfo"
import { iconeContato } from "../../../utils/iconeCategoria"
import { HeaderMobile } from "../../../styles"
import { TextoAdicionarContatos } from "../../../containers/MainDesktop/styles"

const MobileHome = () => {
    const navigate = useNavigate()
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const { termo, criterios, valor } = useSelector((state: RootReducer) => state.filtro)

    const navegarInfoContato = (id: number) => {
        const idExiste = itens.find((c) => c.id === id)
        if (idExiste) {
            navigate(`/${id}`)
        }
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

    let contatos = contatosFiltrados();
    return (
        <DivMobile>
            <HeaderMobile>
                <BarraPesquisa />
                <BotaoNavegar arredondado to="/form" tipo="primario">+</BotaoNavegar>
            </HeaderMobile>
            <main>
                {contatos.length === 0 ? <TextoAdicionarContatos>Adicione contatos para utilizar a lista!</TextoAdicionarContatos> : (
                    <>
                        {contatos.map((c) => (
                                <DivInfo onClick={() => navegarInfoContato(c.id)} key={c.id} svg={iconeContato(c.categoria)} texto={c.nome} />
                            ))
                        }
                    </>
                )}
            </main>
            <footer>
                <FiltrosContatos />
            </footer>
        </DivMobile>
    )
}

export default MobileHome