import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import * as enums from '../../utils/enums/contato'
import Contato from "../../models/contato";

type ContatosState = {
    itens: Contato[]
}

const STORAGE_KEY = "lista-contatos:v1";

const defaultInitialState: ContatosState = {
    itens: [
        {
            id: 1,
            nome: "João Silva",
            email: "joao.silva@email.com",
            telefone: "(11) 91234-5678",
            categoria: enums.Categoria.PESSOAL,
            favorito: false
        },
        {
            id: 2,
            nome: "Maria Oliveira",
            email: "maria.oliveira@email.com",
            telefone: "(21) 99876-5432",
            categoria: enums.Categoria.TRABALHO,
            favorito: true
        }
    ]
}

const loadInitialState = (): ContatosState => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return defaultInitialState;
        const parsed = JSON.parse(raw) as ContatosState;
        if (!parsed || !Array.isArray(parsed.itens)) return defaultInitialState;
        return parsed;
    } catch {
        return defaultInitialState;
    }
}

const initialState: ContatosState = loadInitialState();

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
            if (contato) {
                contato.favorito = !contato.favorito
            }
        },
        apagar: (state, action: PayloadAction<number>) => {
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

export const { adicionar, favoritar, apagar, editar } = contatosSlice.actions
export default contatosSlice.reducer

