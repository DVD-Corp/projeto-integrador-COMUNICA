# Comunidade

Protótipo navegável do Projeto Integrador para descoberta, participação e criação de comunidades.

## Sobre o projeto

O Comunidade é uma plataforma com foco em inclusão, acessibilidade e conexão entre pessoas com interesses em comum. Este MVP foi construído para apresentar os principais fluxos da aplicação:

- Autenticação
- Home
- Discovery de comunidades
- Página da comunidade
- Perfil do usuário
- Administração e painel do criador

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

- Navegação entre módulos sem recarregar a área logada
- Busca de comunidades
- Filtros por categoria
- Participação em comunidade
- Feed, eventos, membros e regras
- Perfil com interesses e comunidades
- Preferências de acessibilidade
- Criação simulada de comunidade
- Painel do criador com indicadores
- Mensagens de confirmação em formulários

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Google Fonts

## Observação

Este é um protótipo frontend para apresentação. Os dados são simulados no navegador e ainda não existe uma API ou banco de dados conectado.
