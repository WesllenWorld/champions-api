# Champions API
A Champions API é uma aplicação que permite gerenciar dados de jogadores e clubes. A API oferece endpoints para listar, buscar, criar, atualizar e excluir jogadores, além de listar clubes.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Cors

## Endpoints

### Jogadores (Players)

#### 1. Listar Todos os Jogadores
- **Rota**: `/players`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de todos os jogadores cadastrados.

#### 2. Buscar Jogador por ID
- **Rota**: `/players/:id`
- **Método**: `GET`
- **Descrição**: Retorna os detalhes de um jogador específico com base no ID fornecido.

#### 3. Adicionar um Novo Jogador
- **Rota**: `/players`
- **Método**: `POST`
- **Descrição**: Adiciona um novo jogador ao sistema.
- **Corpo da Requisição** (exemplo):
  ```json
  {
    "name": "Cristiano Ronaldo",
    "club": "Al Nassr",
    "nationality": "Portuguese",
    "position": "Forward",
    "statistics": {
      "overall": 90,
      "pace": 85,
      "shooting": 93,
      "passing": 81,
      "dribbling": 88,
      "defending": 40,
      "physical": 82
    }
  }

#### 4. Deletar um Jogador
- **Rota**: `/players/:id`
- **Método**: `DELETE`
- **Descrição**: Remove um jogador específico com base no ID fornecido.

#### 5. Atualizar Jogador
- **Rota**: `/players/:id`
- **Método**: `PATCH`
- **Descrição**: Atualiza os dados de um jogador específico (apenas as estatísticas).

### Clubes

#### 1. Listar Todos os Clubes
- **Rota**: `/clubs`
- **Método**: `GET`
- **Descrição**: Retorna uma lista de todos os clubes cadastrados.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/WesllenWorld/champions-api.git

2. Instale as dependências no diretório do projeto

    ```bash
    npm install

3. Inicie o servidor

    ```bash
    npm run start:dist