import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Pencil, Star, Trash } from "lucide-react"

import { DivIcones } from "./styles"
import { apagar, favoritar } from "../../store/reducers/contatos"

type PropsIconesAcao = {
    favorito: boolean
    id: number
    isMobile: boolean
    onEditarDesktop?: (id:number) => void
}

const IconesAcao = ({ favorito, id, isMobile, onEditarDesktop }: PropsIconesAcao) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const alterarFavorito = (id: number) => {
        dispatch(favoritar(id))
    }

    const apagarContato = (id:number) => {
        
        dispatch(apagar(id))
    }

    const editarContato = (id:number) => {
        if (isMobile) {
            navigate(`/editar/${id}`)
        } else if (onEditarDesktop) {
            onEditarDesktop(id)
        }
    }

    return (
        <DivIcones>
            <button onClick={() => alterarFavorito(id)}>
                {favorito ? <Star fill="#ecec00" /> : <Star />}
            </button>
            <button onClick={() => editarContato(id)}>
                <Pencil />
            </button>
            <button onClick={() => apagarContato(id)}>
                <Trash />
            </button>
        </DivIcones>
    )
}

export default IconesAcao