import { createSlice } from "@reduxjs/toolkit";
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

    }
})


export default contatosSlice.reducer

