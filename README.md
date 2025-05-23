# 🧪 Testes Automatizados com Cypress - Login

Este repositório contém uma suíte de testes automatizados utilizando o Cypress para validar o fluxo de autenticação da aplicação [The Internet HerokuApp](https://the-internet.herokuapp.com/login).

## ✅ Descrição do Teste

Os testes têm como objetivo verificar o comportamento da funcionalidade de login da aplicação, contemplando:

- **Cenário positivo:** Autenticação bem-sucedida, validação das mensagens de sucesso e fluxo de logout.
- **Cenários negativos:** Diversas tentativas de autenticação inválidas, verificando mensagens de erro apropriadas.

## 🗂️ Estrutura dos Testes

### ✅ Teste de Login com Cenário Positivo

- Acessa a página de login.
- Preenche corretamente os campos de usuário e senha.
- Realiza autenticação e valida a presença de mensagens e elementos esperados.
- Realiza o logout e valida a mensagem de saída.

### ❌ Testes de Login com Cenários Negativos

Diversos cenários de tentativa de login inválido:

- Usuário e senha incorretos.
- Campos vazios.
- Usuário correto com senha vazia.
- Usuário vazio com senha correta.
- Usuário correto com senha incorreta.
- Usuário incorreto com senha correta.
- Usuário e senha com espaços em branco.

## 🧪 Como Executar os Testes

### 1. Pré-requisitos

- Node.js instalado.
- Cypress instalado globalmente ou no projeto:

```bash
npm install cypress --save-dev
```

## 🔧 Como Executar

Para abrir a interface interativa do Cypress:

```bash
npx cypress open
```

Para rodar os testes diretamente no terminal:

```bash
npx cypress run
```

## 📝 Observações

- Os testes contêm cy.wait(2000) propositalmente para melhor visualização das interações em execução.

## 📝 Autora

**Luana Santana**  
Engenharia da Computação | Qualidade de Software (QA)
