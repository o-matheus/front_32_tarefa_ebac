import { configureStore } from "@reduxjs/toolkit";

import contatoReducer from './reducers/contatos'
import filtrosReducer from './reducers/filtro'


const store = configureStore({
    reducer: {
        contatos: contatoReducer,
        filtros: filtrosReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>;
export default store;