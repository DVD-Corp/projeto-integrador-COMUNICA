# Comunidade

Uma plataforma para descobrir, criar e participar de comunidades por interesses.
Este é um protótipo navegável do Projeto Integrador.

## Sobre o projeto

A COMUNIDADE é uma proposta de plataforma digital voltada à descoberta e à participação em comunidades organizadas por interesses. O projeto busca facilitar a conexão entre pessoas com gostos, objetivos e interesses em comum, promovendo a interação, a troca de conhecimentos e a construção de espaços colaborativos.

A plataforma tem como foco facilitar a descoberta de comunidades em língua portuguesa, considerando a inclusão e a acessibilidade como aspectos importantes de sua concepção.

Este MVP foi construído para apresentar os principais fluxos da aplicação:

- Autenticação
- Home
- Discovery de comunidades
- Página da comunidade
- Perfil do usuário
- Administração e painel do criador

## Objetivo

Desenvolver uma plataforma que facilite a descoberta e a participação em comunidades digitais, permitindo que os usuários encontrem espaços relacionados aos seus interesses e interajam com outras pessoas de maneira organizada e acessível.

## Perfis disponíveis

O login possui três perfis demonstrativos:

| Perfil | Nome exibido | Recursos principais |
| --- | --- | --- |
| Usuário | Ana Silva | Home, Discovery, mensagens, comunidades, perfil e configurações |
| Dono de comunidade | Marina Lima | Recursos do usuário, gerenciamento da comunidade e painel do criador |
| Administrador | Equipe Comunidade | Visão administrativa, indicadores e gerenciamento da plataforma |

Os perfis são selecionados no campo **Entrar como** da tela de login.

## Como executar

O projeto não exige instalação de dependências. Basta abrir o `index.html` no navegador ou iniciar um servidor local:

```powershell
python -m http.server 5500
```

Depois, acesse:

```text
http://localhost:5500/index.html
```

Para testar o MVP logado:

```text
http://localhost:5500/login.html
```

Preencha qualquer e-mail e senha, selecione um perfil e clique em **Entrar na conta**.

## Estrutura de pastas

```text
PI/
├── arquivos/
│   ├── logo.jpeg
│   └── logo-comunidade.png
├── assets/
│   └── logo-inicial.jpeg
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── script.js
├── app.html
├── cadastro.html
├── index.html
├── login.html
└── README.md
```

## Telas

- `index.html`: landing page
- `login.html`: login com seleção de perfil
- `cadastro.html`: cadastro de usuário
- `app.html`: área logada com navegação entre os módulos

## Funcionalidades demonstrativas

As funcionalidades serão definidas e detalhadas ao longo do levantamento de requisitos e do desenvolvimento do projeto. Entre as possibilidades previstas estão:

- Navegação entre módulos sem recarregar a área logada
- Busca de comunidades
- Filtros por categoria
- Participação em comunidade
- Feed, eventos, membros e regras
- Perfil com interesses e comunidades
- Considerações de inclusão e acessibilidade na interface e na experiência de uso.
- Criação simulada de comunidade
- Painel do criador com indicadores
- Mensagens de confirmação em formulários

_Esta lista deverá ser ajustada conforme os requisitos e o escopo durante o desenvolvimento do projeto._

## Metodologia

O desenvolvimento do projeto é conduzido no contexto do Projeto Integrador do curso de Desenvolvimento de Software Multiplataforma da Faculdade de Tecnologia (Fatec), do 1º semestre.

O trabalho envolve o levantamento e a análise de requisitos, a definição do escopo,, a documentação do sistema e o desenvolvimento. As etapas e decisões do projeto são organizadas e revisadas pela equipe durante sua evolução.

_Toda a seção de metodologia pode ser encontrada na documentação oficial do projeto._

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Git e GitHub
- Figma
- Trello
- Google Fonts

## Documentação

A documentação complementar será organizada neste repositório à medida que o projeto evoluir, incluindo, quando aplicável:

- Requisitos funcionais e não funcionais.
- Protótipos e documentação da interface.
- Modelagem e diagramas do sistema.
- Decisões técnicas e documentação de desenvolvimento.

## Equipe

- Deivid: Gerente / arquitetura
- Lucas: Analista / pesquisa
- Fernanda: UX / UI
- Vytor: Frontend / assistente UI
- Rita: Desenvolvimento e documentação / testes
- Melissa: Desenvolvimento e documentação

## REGRAS SOMENTE PARA A EQUIPE

- Ninguém faz commit direto na main.
- Cada tarefa é uma branch: feature/nome-da-tarefa.
- Todo PR precisa de revisão de pelo menos 1 colega antes do merge.
- Mensagens de commit no imperativo (Adiciona, Corrige…).
- Rodar git pull antes de começar a trabalhar.

## Observação

Este é um protótipo frontend para apresentação. Os dados são simulados no navegador e ainda não existe uma API ou banco de dados conectado.