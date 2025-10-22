import { Div } from "./styles"
import * as enums from "../../utils/enums/contato"


type DivProps = {
    svg: React.ReactNode,
    texto: string
    onClick?: () => void
    valor?: enums.Categoria
    criterios?: 'Todos' | 'Categoria' | 'Favoritos'
    ativo?: boolean
}

const DivInfo = ({svg, texto, onClick, ativo}: DivProps) => {

    return (
        <Div ativo={ativo} onClick={onClick} type="button">
            <span>{svg}</span>
            <p>{texto}</p>
        </Div>
    )
}
export default DivInfo