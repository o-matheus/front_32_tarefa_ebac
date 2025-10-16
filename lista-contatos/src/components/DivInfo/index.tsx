import { Div } from "./styles"


type DivProps = {
    svg: React.ReactNode,
    texto: string
}

const DivInfo = ({svg, texto}: DivProps) => {

    return (
        <Div type="button">
            <span>{svg}</span>
            <p>{texto}</p>
        </Div>
    )
}
export default DivInfo