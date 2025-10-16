import { useSelector } from "react-redux"

import BarraPesquisa from "../../components/BarraPesquisa"
import { Main } from "./styles"
import type { RootReducer } from "../../store"
import LinhaTabela from "../../components/LinhaTabela"
import {BotaoAcao} from "../../components/Botao"

const MainDesktop = () => {
    const {itens} = useSelector((state:RootReducer) => state.contatos)
    let contatos = itens
    return (
        <Main>
            <header>
                <BarraPesquisa/>
                <BotaoAcao >+ Adiciona Contato</BotaoAcao>
            </header>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contatos.map((c) => (
                        <LinhaTabela
                            id={c.id}
                            nome={c.nome}
                            email={c.email}
                            telefone={c.telefone}
                            categoria={c.categoria}
                            favorito={c.favorito}
                        />
                    ))}
                </tbody>
            </table>
        </Main>
    )
}

export default MainDesktop