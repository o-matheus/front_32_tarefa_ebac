import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const DivFiltros = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;


    @media (max-width: 768px) {
        flex-direction: row;

        button {
            color: ${variaveis.corTextoInput};
        }
    }
`