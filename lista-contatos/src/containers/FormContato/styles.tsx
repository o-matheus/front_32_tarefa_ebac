import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
   

    span {
        margin-bottom: 24px;
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
        width: 100%;
    }

    button {
        margin-top: 48px;
        font-size: 16px;
        width: 100px;
    }
`

export const Opcoes = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
    margin-top: 8px;
`

export const Opcao = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 20px;
    input {
        width: auto;
        margin-bottom: 0;
    }
   
    color: ${variaveis.corTextoInput};
    label {
        margin-left: 8px;
    }
`