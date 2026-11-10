# Comunidade

Protótipo navegável do Projeto Integrador para descoberta, participação e criação de comunidades.

## Sobre o projeto

O Comunidade é uma plataforma com foco em inclusão, acessibilidade e conexão entre pessoas com interesses em comum. Este MVP foi construído para apresentar os principais fluxos da aplicação:

- Autenticação
- Home
- Exploração de comunidades
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

> Para a apresentação, prefira o servidor local. Ele evita diferenças de comportamento entre navegadores ao carregar scripts, fontes e imagens.

Para testar o MVP logado:

```text
http://localhost:5500/login.html
```

Preencha qualquer e-mail e senha, selecione um perfil e clique em **Entrar na conta**.

### Roteiro de demonstração

1. Na landing page, use **Explorar comunidades** e os links do menu para navegar pelas seções.
2. Em **Criar sua conta**, preencha nome, e-mail, senha com pelo menos oito caracteres e aceite os termos. O cadastro é simulado e encaminha para a área logada.
3. Na tela de login, teste os três perfis: usuário, dono de comunidade e administrador. O perfil altera a saudação e o painel exibido.
4. Na área logada, teste a busca, os filtros de categoria, o botão **Participar**, a criação simulada de comunidade e as preferências de acessibilidade.

As ações de autenticação, participação e criação são demonstrações locais: não há persistência, envio de e-mail ou validação em servidor.

## Estrutura de pastas

```text
PI/
├── arquivos/
│   ├── Comunidade-DSM1_PI-v0.2.1.docx
│   ├── Comunidade-DSM1_PI-v0.3.3.docx
│   ├── img tela cadastro.jpeg
│   ├── img tela login.jpeg
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

Os documentos de levantamento e especificação ficam em `arquivos/`. O arquivo `Comunidade-DSM1_PI-v0.3.3.docx` é a versão final revisada da documentação acadêmica e substitui os campos de modelo por conteúdo baseado no protótipo entregue.
O arquivo `Comunidade-DSM1_PI-v0.2.1.docx` foi mantido como versão anterior para histórico e comparação.

## Organização da equipe e entrega no GitHub

As alterações devem ser feitas em branches de tarefa, revisadas por pelo menos um colega e integradas por pull request. Use mensagens de commit no imperativo e atualize a branch local com `git pull` antes de iniciar uma tarefa.

Evidências disponíveis no repositório:

- Branches `main`, `feature/mvp-comunidade` e `chore/github-pages-deploy`.
- Pull requests integrados para o MVP e para a configuração do GitHub Pages.
- Workflow de publicação em `.github/workflows/pages.yml`.
- Histórico de commits disponível com `git log --oneline --graph --all`.

A confirmação de colaboradores e do professor nas configurações do GitHub deve ser feita pelo mantenedor da equipe, pois essa informação não fica registrada nos arquivos do projeto.

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

## Validação para entrega

- Abrir `index.html` e confirmar que o menu, as âncoras e os botões de cadastro funcionam.
- Criar uma conta de teste e confirmar o redirecionamento para `app.html`.
- Entrar com cada perfil e confirmar a saudação correspondente.
- Pesquisar uma comunidade, selecionar uma categoria e confirmar que os cards são filtrados.
- Criar uma comunidade preenchendo todos os campos e confirmar a mensagem de sucesso.
- Redimensionar a janela para validar a navegação mobile.

## Checklist final

- [x] Protótipo frontend funcional e navegável.
- [x] README com instruções, funcionalidades, limitações e roteiro de apresentação.
- [x] `.gitignore` configurado para arquivos temporários e artefatos locais.
- [x] Workflow de publicação no GitHub Pages.
- [x] Documentação final revisada em `arquivos/Comunidade-DSM1_PI-v0.3.3.docx`.
- [ ] Confirmar no GitHub os colaboradores e o professor como colaborador.
- [ ] Anexar ao trabalho o link do repositório e as evidências de histórico e pull request.
