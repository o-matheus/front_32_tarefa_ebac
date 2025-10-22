import styled from "styled-components";
import variaveis from "../../../styles/variaveis";

export const DivMobile = styled.div`
    header {
        margin: 0 8px;
        padding: 16px 0 16px 0;
        position: sticky;
        top: 0;
        z-index: 10;
        input {
            width: 240px;
        }

    }

    main {
        height: 85vh;
        overflow-y: scroll;
        background-color: ${variaveis.corFundo};
        button {
            margin-left: 8px;
            color: ${variaveis.corContatoMobile};
            width: 300px;
            p {
                font-weight: 400;
                font-size: 24px;
            }
        }
    }

    footer{
        position: sticky;
        bottom: 0;
        background-color: ${variaveis.corFundo};
        height: auto;
        div {
            width: 100vw;
            justify-content: center;
            align-items: center;

            button {
            display: flex;
            flex-direction: column;
            width: fit-content;
            padding: 2px 4px;
            
            svg{
                width: 30px;
                height: 30px;
            }

            p {
                font-size: 16px;
                margin-left: 0;
            }
            }

        }

    }
`