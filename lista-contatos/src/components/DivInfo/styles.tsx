import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Div = styled.button`
    display: flex;
    justify-content: first baseline;
    align-items: center;
    padding: 8px 16px 8px 0;
    width: 200px;
    border: none;
    background-color: transparent;
    border-radius: 8px;

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