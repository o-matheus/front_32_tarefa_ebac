import { useState, type FormEvent } from "react"
import { useDispatch } from "react-redux"

import * as enums from '../../utils/enums/contato'
import { Input } from "../../styles"
import { Form, Opcao, Opcoes } from "./styles"
import { iconeContato } from "../../utils/iconeCategoria"
import { BotaoAcao } from "../../components/Botao"
import { adicionar } from "../../store/reducers/contatos"

const FormContato = () => {
    const dispatch = useDispatch()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [categoria, setCategoria] = useState(enums.Categoria.PESSOAL)

    const cadastrarContato = (e: FormEvent) => {
        e.preventDefault()
        dispatch(
            adicionar({
                nome: nome,
                email: email,
                telefone: telefone,
                categoria: categoria,
                favorito: false
            })
        )
    }

    return (
        <Form onSubmit={cadastrarContato}>
            <span>
                {iconeContato(categoria)}
            </span>
            <Input value={nome} type="text" placeholder="nome" required onChange={({target}) => setNome(target.value)} />
            <Input value={email} type="text" placeholder="email" onChange={({target}) => setEmail(target.value)}  />
            <Input value={telefone} type="text" placeholder="telefone" required onChange={({target}) => setTelefone(target.value)} />
            <Opcoes>
                {Object.values(enums.Categoria).map((categoria) => (
                    <Opcao key={categoria}>
                        <input type="radio"
                            value={categoria}
                            name="categoria"
                            id={categoria}
                            defaultChecked={categoria === enums.Categoria.PESSOAL}
                            onChange={({ target }) => setCategoria(target.value as enums.Categoria)}
                        />
                        <label htmlFor={categoria}>{categoria}</label>
                    </Opcao>
                ))}
            </Opcoes>
            <BotaoAcao type="submit" tipo="sucesso">Salvar</BotaoAcao>
        </Form>
    )
}

export default FormContato