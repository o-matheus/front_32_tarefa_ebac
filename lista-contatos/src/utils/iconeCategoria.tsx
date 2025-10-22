import type { JSX } from "react";
import { BriefcaseBusiness, Cog, Star, UserRound, UsersRound } from "lucide-react";
import * as enums from '../utils/enums/contato'

export type Criterios = 'Todos' | 'Categoria' | 'Favoritos';

export type FiltroItem = {
    svg: JSX.Element
    texto: string
    criterios: Criterios
    valor?: enums.Categoria
}

export const filtros:FiltroItem[] = [
    { svg: <UsersRound/>, texto: "Todos", criterios: 'Todos' },
    { svg: <UserRound/>, texto: "Pessoal", criterios: 'Categoria', valor: enums.Categoria.PESSOAL  },
    { svg: <BriefcaseBusiness/>, texto: "Trabalho", criterios: 'Categoria', valor: enums.Categoria.TRABALHO },
    { svg: <Cog/>, texto: "Serviços", criterios: 'Categoria', valor: enums.Categoria.SERVICOS },
    { svg: <Star/>, texto: "Favoritos", criterios: 'Favoritos' },
]

export function iconeContato(categoria: string) {
    switch (categoria) {
        case "Pessoal":
            return <UserRound/>;
        case "Trabalho":
            return <BriefcaseBusiness/>
        case "Serviços":
            return <Cog/>
        case "Todos":
            return <UsersRound/>
        case "Favoritos":
            return <Star />
    }
}