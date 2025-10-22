import styled from "styled-components";
import variaveis from "../../styles/variaveis";

type PropsDiv = {
    ativo?: boolean
}

export const Div = styled.button<PropsDiv>`
    display: flex;
    justify-content: first baseline;
    align-items: center;
    padding: 8px 16px 8px 0;
    width: 200px;
    border: none;
    background-color: transparent;
    border-radius: 8px;
    color: ${(props) => (props.ativo ? variaveis.corBPrimaria : variaveis.corFundo)};

    @media (max-width:768px) {
        color: ${(props) => (props.ativo ? variaveis.corBPrimaria : variaveis.corFundoSidebar)};
    }

    &:hover, &:focus {
        color: ${variaveis.corBPrimaria};
        
    }

    p {
        font-size: 24px;
        margin-left: 8px;
        font-weight: bold;
    }

    svg {
        height: 36px;
        width: 36px;
    }

`