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

const MobileHome = () => {
    const navigate = useNavigate()
    const {itens} = useSelector((state: RootReducer) => state.contatos)

    const navegarInfoContato = (id:number) => {
        const idExiste = itens.find((c) => c.id === id)
        if (idExiste) {
            navigate(`/${id}`)
        }
    }

    return(
        <DivMobile>
            <HeaderMobile>
                <BarraPesquisa />
                <BotaoNavegar arredondado to="/form" tipo="primario">+</BotaoNavegar>
            </HeaderMobile>
            <main>
                {itens.map((c) => (
                    <DivInfo onClick={() => navegarInfoContato(c.id)} key={c.id} svg={iconeContato(c.categoria)} texto={c.nome}/>
                ))}
            </main>
            <footer>
                <FiltrosContatos/>
            </footer>
        </DivMobile>
    )
}

export default MobileHome