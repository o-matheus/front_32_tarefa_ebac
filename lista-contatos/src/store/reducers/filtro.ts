import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import * as enums from '../../utils/enums/contato'

type FiltroState = {
    termo?: string
    criterios: 'Todos' | 'Categoria' | 'Favoritos'
    valor?: enums.Categoria
}

const initialState:FiltroState ={
    termo: '',
    criterios: 'Todos'
} 

const filtroSlice = createSlice({
    name: 'filtros',
    initialState,
    reducers: {
        alterarTermo: (state, action:PayloadAction<string>) => {
            state.termo = action.payload
        },
        alterarFiltro: (state, action:PayloadAction<FiltroState>) => {
            state.criterios = action.payload.criterios
            state.valor = action.payload.valor
        }
    }

})
export const { alterarFiltro, alterarTermo} = filtroSlice.actions
export default filtroSlice.reducer