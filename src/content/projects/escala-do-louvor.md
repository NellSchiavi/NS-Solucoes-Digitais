---
name: "Escala do Louvor"
category: "sistemas-web"
shortDescription: "Sistema web para gestão de ministérios de louvor: escalas de cultos, confirmações de presença, repertório, ensaios e relatórios, com demonstração pública para experimentar."
technologies:
  - "React"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"
  - "Tailwind CSS"
  - "Vite"
  - "Cloudflare Pages"
status: "publicado"
visibility: "publico"
featured: true
order: 1
demoUrl: "https://escala-louvor-ent.pages.dev"
demoNotes:
  - "Na tela de login, clique em “Acessar demonstração”. Não é preciso criar conta."
  - "Você entra como administrador, com todas as telas da liderança liberadas."
  - "Os dados são fictícios e compartilhados entre os visitantes. Eles voltam ao conjunto original todos os dias."
  - "Ações sensíveis, como criar contas ou alterar acessos, ficam bloqueadas no servidor."
problem: "Organizar escalas, confirmações de presença, repertório e ensaios de um ministério de louvor em um único sistema, acessível pelo celular."
whatsappMessage: "Olá! Tenho interesse em uma solução semelhante ao Escala do Louvor."
ctaLabel: "Ver case"
internalNotes: "Funcionalidades e tecnologias conferidas no README e no package.json do repositório escala-louvor (2026-11-12). Capturas de tela ainda pendentes: o card e o case usam o placeholder visual até lá."
---

## Contexto

O Escala do Louvor é um sistema web para ministérios de louvor organizarem
cultos, equipes e repertório. A liderança monta e publica as escalas, e cada
integrante confirma ou recusa a convocação pelo celular.

## Solução desenvolvida

- Aplicação mobile first, em português e inglês, com tema claro e escuro.
- Perfis de liderança e de integrante, com permissões aplicadas no próprio banco de dados.
- Demonstração pública com dados fictícios, restaurados automaticamente todos os dias.

## Funcionalidades

- Escalas de cultos com equipe por função, repertório do culto, rascunho e publicação
- Confirmação e recusa de presença, com motivo
- Repertório com tom, BPM, categoria e links do YouTube e do Spotify
- Cadastro da equipe com instrumentos, funções vocais e notas privadas da liderança
- Disponibilidade: ausências, férias, afastamentos e restrições por dia da semana
- Ensaios com agenda, convites e controle de presença
- Relatórios de participação, confirmações, presença em ensaios e músicas mais usadas, com exportação em CSV
- Avisos da liderança e notificações de pendências
- Gestão de usuários com convites por e-mail e papéis de acesso (somente leitura na demonstração)

## Segurança e arquitetura

- Row Level Security em todas as tabelas e privilégios por coluna no PostgreSQL
- Operações administrativas em Edge Function, com a chave de servidor fora do navegador
- Proteções da demonstração aplicadas no servidor, e não apenas escondidas na interface
- Testes automatizados de interface e de banco de dados
- Hospedagem estática no Cloudflare Pages, com política de segurança de conteúdo (CSP)

## Tecnologias

React, TypeScript, Vite, Tailwind CSS, Supabase (PostgreSQL, Auth e Edge
Functions) e Cloudflare Pages.
