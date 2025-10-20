import styled from "styled-components";
import variaveis from "../../../styles/variaveis";

export const DivMobile = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        margin: 16px 8px 24px;
        input {
            width: 240px;
           
        }
    }

    main {
        button {
            margin-left: 8px;
            color: #e4dfdf;
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