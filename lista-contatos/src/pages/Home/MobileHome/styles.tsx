import styled from "styled-components";
import variaveis from "../../../styles/variaveis";

export const DivMobile = styled.div`
    header {
        input {
            width: 240px;
        }
    }

    main {
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
        position: fixed;
        bottom: 0;
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