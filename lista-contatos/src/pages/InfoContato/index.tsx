import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { BotaoNavegar } from "../../components/Botao"
import InfoContatoMobile from "../../containers/InfoContatoMobile"
import type { RootReducer } from "../../store"
import { HeaderMobile } from "../../styles"
import { ContainerContato, DivSemContato } from "./styles"
import IconesAcao from "../../components/IconesAcao"

const InfoContato = () => {
    const { id } = useParams()
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const contato = itens.find((c) => Number(id) === c.id)

    if (!contato) {
        return (
            <DivSemContato>
                <p>Contato não encontrado</p>
                <BotaoNavegar to="/"> Home </BotaoNavegar>
            </DivSemContato>

        )
    }

    return (
        <ContainerContato>
            <HeaderMobile>
                <BotaoNavegar arredondado to="/" tipo="erro">X</BotaoNavegar>
                <IconesAcao isMobile id={contato.id} favorito={contato.favorito} />
            </HeaderMobile>
            <main>
                <InfoContatoMobile nome={contato.nome} email={contato.email} telefone={contato.telefone} categoria={contato.categoria} />
            </main>
        </ContainerContato>
    )
}

export default InfoContato;