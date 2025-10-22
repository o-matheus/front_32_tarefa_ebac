import styled from "styled-components";
import { Input } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { alterarTermo } from "../../store/reducers/filtro";


const InputPesquisa = styled(Input)`
    background-image: url('/src/assets/svg/search.svg');
    background-repeat: no-repeat;
    background-position: 12px center;
    padding-left: 44px;
    width: 400px;
`;

const BarraPesquisa = () => {
    const dispatch = useDispatch()
    const {termo} = useSelector((state: RootReducer) => state.filtro)

    return (
        <InputPesquisa value={termo} onChange={({target}) => dispatch(alterarTermo(target.value))}  type="text" placeholder="Buscar Contatos"/>
    )
} 

export default BarraPesquisa