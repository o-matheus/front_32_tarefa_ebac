import { useEffect, useState, type FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import * as enums from '../../utils/enums/contato'
import { Input } from "../../styles"
import { Form, Opcao, Opcoes } from "./styles"
import { iconeContato } from "../../utils/iconeCategoria"
import { BotaoAcao } from "../../components/Botao"
import { adicionar, editar } from "../../store/reducers/contatos"
import { useParams } from "react-router-dom"
import type { RootReducer } from "../../store"


type PropsForm = {
    id?:number
    onClose?: () => void;
}

const FormContato = (props:PropsForm) => {
    const dispatch = useDispatch()
    const params = useParams<{ id?: string }>()
    const id  = props.id ?? (params.id ? Number(params.id) : undefined)
    const { itens } = useSelector((state: RootReducer) => state.contatos)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [categoria, setCategoria] = useState(enums.Categoria.PESSOAL)

    useEffect(() => {
        if (id) {
            const contato = itens.find((c) => c.id === Number(id))
            if (contato) {
                setNome(contato.nome)
                setEmail(contato.email)
                setTelefone(contato.telefone)
                setCategoria(contato.categoria)
            }
        } else {
            setNome('');
            setTelefone('');
            setEmail('');
            setCategoria(enums.Categoria.PESSOAL);
        }
    }, [id, itens])

    const handleForm = (e: FormEvent) => {
        e.preventDefault()
        if (id) {
            const contato = itens.find((c) => Number(id) === c.id)
            if (contato) {
                dispatch(
                    editar({
                        id: contato.id,
                        nome,
                        email,
                        telefone,
                        categoria,
                        favorito: contato.favorito
                    })
                )
                props.onClose?.()
            }
        } 
        else {
            dispatch(
                adicionar({
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    categoria: categoria,
                    favorito: false
                })
            )
            props.onClose?.()
        }
    }

    return (
        <Form onSubmit={handleForm}>
            <span>
                {iconeContato(categoria)}
            </span>
            <Input value={nome} type="text" placeholder="nome" required onChange={({ target }) => setNome(target.value)} />
            <Input value={email} type="text" placeholder="email" onChange={({ target }) => setEmail(target.value)} />
            <Input value={telefone} type="text" placeholder="telefone" required onChange={({ target }) => setTelefone(target.value)} />
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