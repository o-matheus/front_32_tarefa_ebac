import { Div } from "./styles"


type DivProps = {
    svg: React.ReactNode,
    texto: string
    onClick?: () => void
}

const DivInfo = ({svg, texto, onClick}: DivProps) => {

    return (
        <Div onClick={onClick} type="button">
            <span>{svg}</span>
            <p>{texto}</p>
        </Div>
    )
}
export default DivInfo