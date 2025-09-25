import * as enums from "../utils/enums/contato";

class Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  categoria: enums.Categoria;
  favorito: boolean;

  constructor(
    id: number,
    nome: string,
    email: string,
    telefone: string,
    categoria: enums.Categoria,
    favorito: boolean
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.categoria = categoria;
    this.favorito = favorito;
  }
}

export default Contato;
