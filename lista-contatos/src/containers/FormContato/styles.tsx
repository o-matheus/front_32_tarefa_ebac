import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        margin-bottom: 44px;
        svg {
            height: 116px;
            width: 116px;
            stroke-width: 1px;
            color: ${variaveis.corBTexto};
        }
    }

    input {
        margin-bottom: 8px;
        padding-left: 16px;
    }
`