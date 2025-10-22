import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Main = styled.main`
    width: 100%;

    header {
        margin: 32px 56px 104px;
        display: flex;
        justify-content: space-between;
        
    }

    table {
        margin: 0 auto;
        margin-top: 120px;
        text-align: center;
        width: 1000px;
        max-width: 1200px;
        font-size: 20px;
        background-color: ${variaveis.corFundoTabela} ;

        border-collapse: collapse;
        border-spacing: 0;

        thead {
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