import { BriefcaseBusiness, Cog, Star, UserRound, UsersRound } from "lucide-react";

export const filtros = [
    { svg: <UsersRound/>, texto: "Todos" },
    { svg: <UserRound/>, texto: "Pessoal" },
    { svg: <BriefcaseBusiness/>, texto: "Trabalho" },
    { svg: <Cog/>, texto: "Serviços" },
    { svg: <Star/>, texto: "Favoritos" },
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