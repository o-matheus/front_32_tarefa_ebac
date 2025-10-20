import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Link } from "react-router-dom";
import { Btn } from "../../styles";

type NavegarProps = {
    tipo?: 'primario' | 'sucesso' | 'erro'
    children?: React.ReactNode
    to?: string
    arredondado?: boolean
}

type BotaoAcaoProps = {
    tipo?: 'primario' | 'sucesso' | 'erro'
    children?: React.ReactNode
    arredondado?: boolean
    onClick?: () => void
    type: 'button' | 'submit'
}

const cores =
    { primario: variaveis.corBPrimaria, sucesso: variaveis.corBSucesso, erro: variaveis.corBErro }


const Botao  = styled(Btn)<NavegarProps>`
    background-color: ${({ tipo }) => cores[tipo ?? 'primario']};
    border-radius: ${({arredondado}) => (arredondado ? "50%" : "8px")};
    color: ${variaveis.corBTexto};
`


export const BotaoNavegar = ({ tipo = 'primario', children, to, arredondado }: NavegarProps) => <Botao arredondado={arredondado} as={Link} to={to!} tipo={tipo}>{children}</Botao>

export const BotaoAcao = ({ type='button' ,tipo = 'primario', children, arredondado, onClick }: BotaoAcaoProps) => <Botao onClick={onClick} arredondado={arredondado} type={type} tipo={tipo}>{children}</Botao>



