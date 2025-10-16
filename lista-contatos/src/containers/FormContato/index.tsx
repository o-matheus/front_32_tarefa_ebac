import { UserRound } from "lucide-react"
import { Input } from "../../styles"
import { Form } from "./styles"

const FormContato = () => {

    return (
        <Form action="">
            <span>
                <UserRound />
            </span>
            <Input type="text" placeholder="nome" required />
            <Input type="text" placeholder="email" />
            <Input type="text" placeholder="telefone" required />
            <div>
                <label htmlFor=""></label>
                <Input type="radio" />
            </div>
        </Form>
    )
}

export default FormContato