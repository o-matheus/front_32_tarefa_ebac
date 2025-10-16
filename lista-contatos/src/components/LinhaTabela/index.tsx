import type Contato from "../../models/contato"
import { iconeContato } from "../../utils/iconeCategoria";
import IconesAcao from "../IconesAcao";

type LinhaTabelaProps = Contato


const LinhaTabela = ({
    id, nome, email, telefone, categoria, favorito
}: LinhaTabelaProps) => {

    return (

        <tr key={id}>
            <td>
                <span>
                    {iconeContato(categoria)}
                </span>
            </td>
            <td>{nome}</td>
            <td>{email}</td>
            <td>{telefone}</td>
            <td><IconesAcao /></td>
        </tr>
    )
}

export default LinhaTabela;