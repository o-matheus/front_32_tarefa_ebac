import { useSelector } from "react-redux"
import BarraPesquisa from "../../../components/BarraPesquisa"
import { BotaoNavegar } from "../../../components/Botao"
import FiltrosContatos from "../../../containers/FiltrosContatos"
import { DivMobile } from "./styles"
import type { RootReducer } from "../../../store"
import DivInfo from "../../../components/DivInfo"
import { iconeContato } from "../../../utils/iconeCategoria"

const MobileHome = () => {
    const {itens} = useSelector((state: RootReducer) => state.contatos)

    return(
        <DivMobile>
            <header>
                <BarraPesquisa />
                <BotaoNavegar arredondado to="/form" tipo="primario">+</BotaoNavegar>
            </header>
            <main>
                {itens.map((c) => (
                    <DivInfo key={c.id} svg={iconeContato(c.categoria)} texto={c.nome}/>
                ))}
            </main>
            <footer>
                <FiltrosContatos/>
            </footer>
        </DivMobile>
    )
}

export default MobileHome