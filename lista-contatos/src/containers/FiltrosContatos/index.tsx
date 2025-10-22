import { useDispatch, useSelector } from "react-redux";
import DivInfo from "../../components/DivInfo"
import { filtros, type Criterios, type FiltroItem } from "../../utils/iconeCategoria"
import { DivFiltros } from "./styles";
import { alterarFiltro } from "../../store/reducers/filtro";
import type { RootReducer } from "../../store";


const FiltrosContatos = () => {
    const dispatch = useDispatch()
    const { filtro } = useSelector((state:RootReducer) => state)

    const filtrar = (criterios: Criterios, valor?: FiltroItem['valor']) => {
        dispatch(alterarFiltro({ criterios, valor }))
    }

    const verificarSeAtivo = (criterios: Criterios, valor?: FiltroItem['valor']) => {
        const mesmoCriterio = filtro.criterios === criterios
        const mesmoValor = filtro.valor === valor

        return mesmoCriterio && mesmoValor
    }

    return (
        <DivFiltros>
            {
                filtros.map((item) => (
                    <DivInfo ativo={verificarSeAtivo(item.criterios, item.valor)} onClick={() => filtrar(item.criterios, item.valor)} criterios={item.criterios} valor={item.valor} key={item.texto} svg={item.svg} texto={item.texto} />
                ))
            }
        </DivFiltros>

    )
}

export default FiltrosContatos;