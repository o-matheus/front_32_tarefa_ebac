import { Pencil, Star, Trash } from "lucide-react"
import { DivIcones } from "./styles"



const IconesAcao = () => {

    return (
        <DivIcones>
            <button>
                <Star/>
            </button>
            <button>
                <Pencil/>
            </button>
            <button>
                <Trash/>
            </button>
        </DivIcones>
    )
}

export default IconesAcao