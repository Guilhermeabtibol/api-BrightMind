# API BrightMind

A **API BrightMind** é uma API desenvolvida em Node.js com Express e MongoDB, projetada para fornecer funcionalidades essenciais para um sistema de gerenciamento de estudos para concursos.

## Tecnologias Utilizadas
- **Node.js**
- **Express.js**
- **MongoDB** com Mongoose
- **Firebase** para armazenamento de dados
- **Axios** para requisições HTTP

## Funcionalidades
- **Autenticação de Usuários** (Login, Cadastro, JWT Token)
- **Gerenciamento de Usuários** (CRUD completo)
- **Integração com Firebase Cloud Firestore**
- **Endpoints para manipulação de dados de estudo**

## Requisitos
Antes de rodar a API, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Um banco de dados Firebase configurado

## Instalação e Configuração
1. Clone este repositório:
   ```sh
   git clone https://github.com/Guilhermeabtibol/api-BrightMind.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd api-BrightMind
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```env
   MONGO_URI=seu_mongo_uri
   FIREBASE_CONFIG=seu_config_firebase
   JWT_SECRET=sua_chave_secreta
   ```
5. Inicie o servidor:
   ```sh
   npm start
   ```

## Uso
A API estará rodando em `http://localhost:3000`. Utilize ferramentas como Postman ou Insomnia para testar os endpoints.

## Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Adicionando nova funcionalidade'`
4. Envie as mudanças: `git push origin minha-feature`
5. Abra um Pull Request

## Contato
Caso tenha dúvidas ou precise de suporte, entre em contato:
📧 Email: guiabtibol@gmail.com

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

