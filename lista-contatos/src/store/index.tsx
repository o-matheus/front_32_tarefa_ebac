import { configureStore } from "@reduxjs/toolkit";

import contatoReducer from './reducers/contatos'
import filtrosReducer from './reducers/filtro'

const STORAGE_KEY = "lista-contatos:v1";

const store = configureStore({
    reducer: {
        contatos: contatoReducer,
        filtro: filtrosReducer
    }
})

let saveTimer: number | null = null;
store.subscribe(() => {
    if (saveTimer !== null) window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => {
        try {
            const state = store.getState();
            const contatosState = state.contatos;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(contatosState));
        } catch {
            
        }
    }, 400)
})

export type RootReducer = ReturnType<typeof store.getState>;
export default store;