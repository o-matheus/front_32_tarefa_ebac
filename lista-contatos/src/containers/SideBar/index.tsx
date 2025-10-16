import FiltrosContatos from "../FiltrosContatos"
import { Aside } from "./styles"

const SideBar = () => {

    return (
        <Aside>
            <h1>Contatos</h1>
            <FiltrosContatos/>
        </Aside>
    )
}

export default SideBar