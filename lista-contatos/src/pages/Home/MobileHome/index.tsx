import BarraPesquisa from "../../../components/BarraPesquisa"
import { BotaoNavegar } from "../../../components/Botao"
import FiltrosContatos from "../../../containers/FiltrosContatos"
import { DivMobile } from "./styles"

const MobileHome = () => {

    return(
        <DivMobile>
            <header>
                <BarraPesquisa />
                <BotaoNavegar arredondado to="/form" tipo="primario">+</BotaoNavegar>
            </header>
            <main>

            </main>
            <footer>
                <FiltrosContatos/>
            </footer>
        </DivMobile>
    )
}

export default MobileHome