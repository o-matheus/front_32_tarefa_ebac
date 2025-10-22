import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import * as enums from '../../utils/enums/contato'
import Contato from "../../models/contato";

type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nome: "Matheus",
            email: "matheus@email.com",
            telefone: "(85) 9.98721-3331",
            categoria: enums.Categoria.SERICOS,
            favorito: false
        },
        {
            id: 2,
            nome: "Ana Silva",
            email: "ana.silva@email.com",
            telefone: "(11) 9.9123-4567",
            categoria: enums.Categoria.SERICOS,
            favorito: false
        },
        {
            id: 3,
            nome: "João Pereira",
            email: "joao.pereira@email.com",
            telefone: "(21) 9.9987-6543",
            categoria: enums.Categoria.TRABALHO,
            favorito: true
        }
    ]
}

const contatosSlice = createSlice({
    name: 'cotatos',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const contatoExiste = state.itens.find(
                (contato) => contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
            )

            if (contatoExiste) alert("Já existe um contato com esse nome")
            else {
                const ultimoContato = state.itens[state.itens.length - 1]
                const novoContato = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.push(novoContato)
            }
        },
        favoritar: (state, action: PayloadAction<number>) => {
            const contato = state.itens.find((c) => c.id === action.payload)
            if(contato) {
                contato.favorito = !contato.favorito
            }
        },
        apagar: (state, action:PayloadAction<number>) => {
            state.itens = state.itens.filter(contato => contato.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const contato = state.itens.find(
                (c) => c.id === action.payload.id
            )
            if (contato) {
                contato.nome = action.payload.nome
                contato.email = action.payload.email
                contato.telefone = action.payload.telefone
                contato.categoria = action.payload.categoria
                contato.favorito = action.payload.favorito
            }
        }
    }
})

export const {adicionar, favoritar, apagar, editar} = contatosSlice.actions
export default contatosSlice.reducer

