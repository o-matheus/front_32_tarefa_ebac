import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Aside = styled.aside`
    height: 100vh;
    width: 360px;
    background-color: ${variaveis.corFundoSidebar};
    padding-left: 32px;

    h1 {
        font-size: 40px;
        margin-top: 32px;
        margin-bottom: 80px;
    }
`