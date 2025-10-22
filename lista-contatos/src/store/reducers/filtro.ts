import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type FiltroState = {
    termo?: string
    categoria: 'Todos' | 'Pessoal' | 'Trabalho' | 'Serviços' | 'Favoritos'
}

const initialState:FiltroState ={
    termo: '',
    categoria: 'Todos'
} 

const filtroSlice = createSlice({
    name: 'filtros',
    initialState,
    reducers: {
        alterarTermo: (state, action:PayloadAction<string>) => {
            state.termo = action.payload
        },
        alterarFiltro: (state, action:PayloadAction<FiltroState>) => {
            state.categoria = action.payload.categoria
        }
    }

})
export const { alterarFiltro, alterarTermo} = filtroSlice.actions
export default filtroSlice.reducer