import styled from "styled-components";

import * as enums from '../../utils/enums/contato'
import { iconeContato } from "../../utils/iconeCategoria";
import variaveis from "../../styles/variaveis";

const InfoMobile = styled.div`
    margin-top: 112px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${variaveis.corContatoMobile};

    svg {
        width: 116px;
        height: 116px;
        margin-bottom: 8px;
    }

    p {
        max-width: 80%;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
        word-wrap: break-word;
        text-align: center;
    }
`

type PropsInfoMobile = {
    nome: string
    email?: string
    telefone: string
    categoria: enums.Categoria
}

const InfoContatoMobile = ({ nome, email, telefone, categoria }: PropsInfoMobile) => {

    return (
        <InfoMobile>
            <span>
                {iconeContato(categoria)}
            </span>
            <p>{nome}</p>
            <p>{email}</p>
            <p>{telefone}</p>
        </InfoMobile>
    )
}

export default InfoContatoMobile;