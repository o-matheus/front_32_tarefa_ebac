import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Container } from "../../styles";

export const DivSemContato = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: ${variaveis.corContatoMobile};
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 16px;
    }
    
`

export const ContainerContato = styled(Container)`
    header {
        svg {
            color: ${variaveis.corFundoSidebar};
        }
    }
`