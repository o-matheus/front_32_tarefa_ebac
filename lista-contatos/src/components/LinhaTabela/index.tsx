import type Contato from "../../models/contato"
import { iconeContato } from "../../utils/iconeCategoria";
import IconesAcao from "../IconesAcao";

type LinhaTabelaProps = Contato & {
    onEditar?: () => void
}


const LinhaTabela = ({
    id, nome, email, telefone, categoria, favorito, onEditar
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
            <td><IconesAcao onEditarDesktop={onEditar} isMobile={false} id={id} favorito={favorito} /></td>
        </tr>
    )
}

export default LinhaTabela;