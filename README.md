# Automação de Testes com Playwright

[![Playwright Tests](https://github.com/juniorschmitz/senac-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/juniorschmitz/senac-playwright/actions/workflows/playwright.yml)

## Descrição do Projeto
Este é um projeto de automação de testes com Playwright. O Playwright é uma biblioteca para automação de testes em navegadores que permite que você escreva testes confiáveis e eficientes. Ele oferece uma interface simples para criar scripts de automação para interações de usuário simuladas.

## Aplicação em Teste
Como o projeto foi criado com o objetivo de apresentar a prática de testes Web e estrutura do Playwright, mais de uma aplicação em teste é utilizada, para cada cenário de teste uma aplicação Web diferente (mas com o propósito de treinamento de testes Web) foi utilizada.

## Recursos Utilizados
- Node.js
- Playwright
- Faker.js

## Pré-requisitos
Você precisa ter o Node.js e o npm instalados na sua máquina.

## Como Instalar
Faça clone do repositório para sua máquina local usando git clone https://link-para-o-repositorio.git.
Mude para o diretório do projeto cd diretório-do-projeto.
Instale todas as dependências usando npm install.

## Como Executar Testes
No diretório raiz do projeto, execute o seguinte comando para executar todos os testes em paralelo e em todos navegadores:

```
npm run tests:all
```

Se você quiser executar os testes sequencialmente e em um navegador apenas, pode usar o seguinte comando, substituindo <navegador> por chrome, firefox ou webkit:

```
npm run tests:<navegador>
```

## Licença
Este projeto está licenciado sob os termos da licença MIT.
