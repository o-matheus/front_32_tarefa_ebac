# Tarefa Módulo 32 - Front-end

## Requisitos
Criar uma lista de contatos com as seguintes informações para cada contato:
- Nome
- E-mail
- Telefone

Operações disponíveis para cada contato:
- Adicionar
- Remover
- Editar

**Tecnologias utilizadas:** React, Redux e Styled Components

---

## Passo a passo

### 1. Inicialização do projeto React com Vite
```bash
npm init vite@latest # Iniciar projeto React com Vite
cd lista-contatos
npm install
npm run dev
```

### 2. Instalação de dependências

**Styled Components:**
```bash
npm install styled-components
npm install -D @types/styled-components
```

**Redux e Redux Toolkit:**
```bash
npm install react-redux @reduxjs/toolkit
```

**React Router DOM:**
```bash
npm install react-router-dom
```

---

### 3. Estrutura inicial do projeto

**Modelos:**
- Criar a pasta `models` com o arquivo `contato.ts` para definir a classe e o construtor do contato.
- Criar a pasta `utils/enums` para definir os enums de categoria: pessoal, trabalho, serviços.
    - Propriedades: nome (string), email (string), telefone (string), categoria (enum), favorito (boolean, opcional).

**Pages:**
- Criar a pasta `pages` para organizar as páginas da aplicação.
    - Desktop: apenas 1 página (Home) e um modal para adicionar contatos.
    - Mobile: 3 páginas principais (Home, InfoContato, AdicionarContato).

**Funções principais:**
- Adicionar contato
- Editar contato
- Deletar contato
- Favoritar contato (opcional)

---

### 4. Layouts

**Mobile:**
O layout mobile possui 4 telas:
- Home
- Informações do contato
- Adicionar contato
- Editar contato

**Desktop:**
- Home
- Modal para adicionar contatos

---

## Componentes reutilizáveis
- Barra de pesquisa
- Botão fechar
- Botão adicionar contato
- Ações: Favoritar / Editar / Excluir
- Formulário para adicionar/editar contatos
- Card de contato (mobile) e card de filtros (desktop) – mesma estrutura

---

## Link do design
[Design no Visily](https://app.visily.ai/projects/743709e1-66f3-4680-a830-d2172ac78cc9/boards/2134140)


## 8 de outubro
Iniciando o projeto do último push do computador antigo, passei alguns dias trabalhando e não commitei para o git, agora vou começar do zero de novo para fortalecer alguns conceitos e estruturas.
- Criei o estilo globlal, e estou criando um container que vai envolver o conteúdo da página tanto no Desktop e Mobile.
- Criando components a serem utilizados no projeto.
Barra de pesquisa - Botao
- Criando os containers para a visão da home do desktop e do mobile

- Fazendo uma função para que o react faça a validação da tela se é mobile ou desktop.
- Defindo a estilização e estrutura das páginas nas duas visualizações 
- Passei muito tempo tentando usar o svg como background image, o problema era a forma como eu estava escrevendo, depois de algum tempo descobri.

## 10 de outubro
- Instalação do Lucide icons 
- Criação do Botão com a props para costumizar cor e adicionado comportamento para que o botão seja um Link do react-router-dom

## 12 de outubro
- Renderizar lista a partir dos contados registrados no reducer contatos
- Estilizar tabela