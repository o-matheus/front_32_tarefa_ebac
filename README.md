# Lista de Contatos

Projeto de uma aplicação web para cadastro, edição, exclusão e filtragem de contatos, desenvolvido em React com Redux Toolkit.

## Funcionalidades

- Adicionar, editar e remover contatos
- Marcar contatos como favoritos
- Filtrar contatos por nome, categoria ou favoritos
- Visualização adaptada para desktop (modal) e mobile (página)
- Persistência dos contatos no localStorage do navegador
- Máscara de telefone automática no formulário

## Tecnologias Utilizadas

- React
- Redux Toolkit
- TypeScript
- Styled-components
- React Router DOM
- Lucide React (ícones)

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

```
src/
 ├── components/         # Componentes reutilizáveis (ícones, botões, etc)
 ├── containers/         # Containers principais (Home, FormContato, MainDesktop, etc)
 ├── store/              # Redux store, reducers e tipos
 ├── utils/              # Funções utilitárias e enums
 ├── styles/             # Estilos globais e temas
 └── App.tsx             # Rotas principais
```

## Observações

- Os contatos são salvos automaticamente no localStorage, mantendo os dados mesmo após fechar o navegador.
- O formulário de telefone aceita apenas números e aplica máscara automaticamente.
- O layout é responsivo e adapta a experiência para desktop e mobile.

## Licença

Este projeto está sob a licença MIT.
