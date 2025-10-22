import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 32px;
    max-width: 80%;

    header {
        margin: 0px 56px;
        display: flex;
        justify-content: space-between;
        position: sticky;
        background-color: ${variaveis.corFundo};
        z-index: 10;
        top: 0;
        padding-bottom: 81px;
        padding-top: 32px;

        button {
            margin-bottom: 2px;
            font-size: 20px;
        }
        
    }

    table {
        margin: 0 auto;
        text-align: center;
        min-width: 700px;
        max-width: 1200px;
        font-size: 20px;
        background-color: ${variaveis.corFundoTabela} ;

        border-collapse: collapse;
        border-spacing: 0;

        thead {
            position: sticky;
            background-color: ${variaveis.corFundoTabela};
            z-index: 10;
            top: 120px;
            color: ${variaveis.tHeadColor};
        }

        tbody{
            color: ${variaveis.tBodyColor} ;
        }

        th, td {
            padding: 8px 12px;
            border-bottom: 1px solid ${variaveis.corBordaTabela} ;
            word-wrap: break-word;
            max-width: 300px;
        }

        span {
            svg{
                margin-top: 5px;
                height: 28px;
                width: 28px;
            }
        }
    }
`

export const TextoAdicionarContatos = styled.h2`
    text-align: center;
    margin: 0 auto;
    color: ${variaveis.corBTexto};

    @media (max-width: 768px) {
        margin-top: 220px;
    }
`