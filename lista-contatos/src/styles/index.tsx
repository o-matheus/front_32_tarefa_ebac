import styled, { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
}


    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`

export const Container = styled.div `
    display: flex;
    background-color: ${variaveis.corFundo};

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100vh;
    }
`

export const Input = styled.input `
    width: 400px;
    background-color: ${variaveis.corFundoInput};
    color: ${variaveis.corTextoInput};
    border: 1px solid ${variaveis.corBordainput};
    border-radius: 6px;
    height: 44px;
    font-size: 20px;

    @media (max-width: 768px) {
        width: 200px;
    }
`

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    color: ${variaveis.corBTexto};
`

export default EstiloGlobal;

