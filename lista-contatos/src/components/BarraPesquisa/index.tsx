import styled from "styled-components";
import { Input } from "../../styles";


const InputPesquisa = styled(Input)`
    background-image: url('/src/assets/svg/search.svg');
    background-repeat: no-repeat;
    background-position: 12px center;
    padding-left: 44px;
`;

const BarraPesquisa = () => <InputPesquisa placeholder="Buscar Contatos"/>

export default BarraPesquisa