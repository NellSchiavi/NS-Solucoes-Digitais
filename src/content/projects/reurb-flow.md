---
name: "REURB Flow"
category: "sistemas-web"
shortDescription: "CRM desenvolvido sob medida para gestão e acompanhamento de processos de REURB, com Kanban, diferentes níveis de acesso e integrações de comunicação."
client: "XC Regularizações"
technologies:
  - "Next.js"
  - "React"
  - "TypeScript"
  - "NestJS"
  - "PostgreSQL"
  - "Prisma"
  - "Tailwind CSS"
  - "Leaflet"
status: "desenvolvido"
visibility: "publico"
featured: false
order: 3
ctaLabel: "Ver case"
mainImage: "/imagens/Projects/reurb-flow/dashboard.png"
additionalImages:
  - src: "/imagens/Projects/reurb-flow/nucleo-visao-geral.png"
    caption: "Visão geral do Núcleo, com progresso e localização no mapa"
  - src: "/imagens/Projects/reurb-flow/kanban.png"
    caption: "Kanban de ações do Núcleo, com filtros por responsável, etapa e prioridade"
  - src: "/imagens/Projects/reurb-flow/interessados.png"
    caption: "Gestão dos interessados vinculados ao Núcleo"
  - src: "/imagens/Projects/reurb-flow/portal-meus-nucleos.png"
    caption: "Portal do Interessado: lista dos Núcleos do próprio usuário"
  - src: "/imagens/Projects/reurb-flow/portal-andamento.png"
    caption: "Portal do Interessado: andamento, etapas e documentos do Núcleo"
  - src: "/imagens/Projects/reurb-flow/capa.png"
    caption: "Tela de login"
internalNotes: "Stack confirmada no repositório reurb-flow (package.json de apps/web e apps/api + schema Prisma). Screenshots com dados de teste. documentos.png NÃO usado: nome de arquivo real riscado à mão, parcialmente legível. Status de publicação e URL pública ainda não confirmados."
---

## Contexto

Sistema web desenvolvido para a XC Regularizações para centralizar e
acompanhar processos de regularização fundiária (REURB), permitindo
diferentes níveis de acesso e acompanhamento dos processos.

## Solução desenvolvida

Plataforma de gestão dos processos organizada por Núcleos, com uma área
interna para a equipe e um portal para que cada interessado acompanhe o
andamento do próprio Núcleo.

## Funcionalidades

**Gestão interna**

- Dashboard com visão geral dos Núcleos, progresso e prazos
- Gestão de Núcleos, com visão geral, etapas e localização no mapa
- Kanban para acompanhamento das ações de cada Núcleo
- Gestão de documentos por Núcleo
- Cadastro e gestão dos interessados vinculados a cada Núcleo
- Login de funcionários

**Portal do Interessado**

- Acesso do interessado ao próprio Núcleo
- Acompanhamento do andamento, das etapas e dos documentos disponíveis

**Integrações e segurança**

- Integração com mapas
- Integração com WhatsApp para envio de notificações do processo, quando essa opção é utilizada/configurada pela empresa
- Notificações por e-mail
- Validação de acesso por e-mail
- Autenticação por token aleatório via Microsoft Authenticator

## Tecnologias

Next.js, React, TypeScript, NestJS, PostgreSQL, Prisma, Tailwind CSS e
Leaflet.
