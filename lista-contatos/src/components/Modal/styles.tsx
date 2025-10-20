import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const FundoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.9);
`

export const ConteudoModal = styled.div`
    background-color: ${variaveis.corFundo};
    padding: 10px 40px 40px;

    header {
        display: flex;
        align-items: start;
        width: 100%;
        margin: 0;
        margin-bottom: 16px;
        button {
            width: 24px;
            aspect-ratio: 1 /1;
        }
    }

`