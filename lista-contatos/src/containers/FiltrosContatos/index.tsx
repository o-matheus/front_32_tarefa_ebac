import DivInfo from "../../components/DivInfo"
import { filtros } from "../../utils/iconeCategoria"
import { DivFiltros } from "./styles";


const FiltrosContatos = () => {

    return (
        <DivFiltros>
          {
            filtros.map((item) => (
                <DivInfo key={item.texto} svg={item.svg} texto={item.texto} />
            ))
        }
        </DivFiltros>
      
    )
}

export default FiltrosContatos;