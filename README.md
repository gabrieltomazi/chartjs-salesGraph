# 📊 Sales Dashboard - Fullstack Project

Este projeto é um dashboard dinâmico para visualização de métricas de vendas mensais. Ele demonstra o domínio do ciclo completo de desenvolvimento (Fullstack), desde a modelagem de dados no MongoDB até a renderização de gráficos interativos no React.



---

## 🚀 Funcionalidades

* **Visualização Dinâmica**: Gráficos de barras que refletem os dados em tempo real do banco de dados.
* **Gerenciamento de Dados (CRUD)**: API completa que permite criar, ler, atualizar e deletar registros de vendas.
* **Integração Cloud**: Persistência de dados utilizando MongoDB Atlas.
* **Acesso Global**: Backend hospedado no Render com suporte a CORS para comunicação segura com o frontend.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
* **React.js**: Construção de componentes de interface.
* **Chart.js**: Renderização de gráficos de alta performance.
* **React-chartjs-2**: Integração do Chart.js com o ecossistema React.

### **Backend**
* **Node.js & Express**: Criação de rotas e lógica de servidor.
* **Mongoose**: Modelagem de esquemas e comunicação com o banco NoSQL.
* **Dotenv**: Proteção de credenciais sensíveis através de variáveis de ambiente.

---

## 📂 Estrutura do Projeto

Para seguir os padrões de mercado, o repositório foi organizado da seguinte forma:

* `api/`: Contém todo o código do servidor Node.js e modelos do Mongoose.
* `web/`: Contém a aplicação React e as configurações do gráfico.
* `.gitignore`: Configurado para ignorar pastas pesadas como `node_modules` e dados sensíveis em `.env`.

---

## ⚙️ Como Executar

### 1. Backend (API)
1. Navegue até a pasta: `cd api`.
2. Instale as dependências: `npm install`.
3. Configure o arquivo `.env` com sua `MONGO_URI`.
4. Execute o servidor: `npm start`.

### 2. Frontend (Web)
1. Navegue até a pasta: `cd web`.
2. Instale as dependências: `npm install`.
3. Altere a URL do `fetch` para o seu link do Render.
4. Execute a aplicação: `npm run dev`.

---

## 🖇️ Endpoints Principais

| Método | Endpoint | Função |
| :--- | :--- | :--- |
| `GET` | `/vendas` | Lista todas as vendas mensais |
| `POST` | `/vendas` | Adiciona um novo registro de venda |
| `PUT` | `/vendas/:id` | Atualiza valores de um mês específico |
| `DELETE` | `/vendas/:id` | Remove um registro de venda |

---

## 👤 Autor

**Gabriel Tomazi** <br>
*Estudante de Engenharia de Software na SATC e Desenvolvedor Front-End.* <br>
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-tomazi/)
---
