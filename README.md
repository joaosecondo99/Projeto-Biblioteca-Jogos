# 🎮 Game Library

Uma aplicação CRUD para gerenciar sua biblioteca de jogos, desenvolvida com JavaScript, Vite e json-server.

## 📋 Sobre o Projeto

O **Game Library** é um projeto prático de portfólio que permite cadastrar, visualizar, editar e deletar jogos da sua biblioteca pessoal. O projeto foi desenvolvido com foco em boas práticas de organização de código, modularização e consumo de API REST.

## ✨ Funcionalidades

- ➕ **Adicionar** novos jogos com nome, gênero, nota e status
- 📋 **Listar** todos os jogos cadastrados
- ✏️ **Editar** informações de um jogo existente
- 🗑️ **Deletar** jogos da biblioteca
- 🔄 Atualização automática da lista após cada operação

## 🚀 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| [Vite](https://vitejs.dev/) | Servidor de desenvolvimento e bundler |
| [Axios](https://axios-http.com/) | Requisições HTTP |
| [json-server](https://github.com/typicode/json-server) | Simulação de API REST |
| JavaScript ES6+ | Lógica da aplicação |
| HTML5 & CSS3 | Interface do usuário |

## 📁 Estrutura do Projeto

```
game-library/
├── src/
│   ├── api/
│   │   └── games.js       # Funções de comunicação com a API (GET, POST, PUT, DELETE)
│   ├── ui/
│   │   └── render.js      # Funções de manipulação do DOM
│   ├── main.js            # Ponto de entrada, inicialização e eventos
│   └── style.css          # Estilos da aplicação
├── db.json                # Banco de dados (json-server)
├── index.html
└── package.json
```

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/joaosecondo99/ProjetoPratico.git

# Entre na pasta do projeto
cd ProjetoPratico/game-library

# Instale as dependências
npm install
```

### Rodando o projeto

O projeto precisa de **dois terminais** abertos simultaneamente:

```bash
# Terminal 1 — Inicia o servidor de dados (json-server)
npm run server

# Terminal 2 — Inicia o servidor de desenvolvimento (Vite)
npm run dev
```

Acesse **http://localhost:5173** no navegador.

## 🔌 Endpoints da API

A API roda em `http://localhost:3001`

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/games` | Lista todos os jogos |
| POST | `/games` | Adiciona um novo jogo |
| PUT | `/games/:id` | Atualiza um jogo |
| DELETE | `/games/:id` | Remove um jogo |

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento Vite
npm run server   # Inicia o json-server na porta 3001
npm run build    # Gera a versão de produção
npm run preview  # Visualiza a versão de produção
```

## 🧠 Aprendizados

Este projeto foi desenvolvido para praticar:

- Modularização de código JavaScript
- Consumo de API REST com Axios
- Funções assíncronas com `async/await`
- Manipulação do DOM
- Delegação de eventos
- Operações CRUD completas

## 👨‍💻 Autor

Feito por **João Segundo**

[![GitHub](https://img.shields.io/badge/GitHub-joaosecondo99-181717?style=flat&logo=github)](https://github.com/joaosecondo99)
