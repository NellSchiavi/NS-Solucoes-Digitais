/**
 * Serviços da NS — fonte única para a seção Serviços da Home e para os
 * dados estruturados (Schema.org). Cada serviço aponta para os cases
 * reais que o comprovam (slugs da coleção `projects`); serviços sem case
 * publicado ficam sem link. Nenhuma condição comercial é prometida aqui.
 */
import type { WhatsAppTopic } from './whatsapp';

export type ServiceIcon = 'monitor' | 'layers' | 'kanban' | 'calendar' | 'plug' | 'chart' | 'whatsapp' | 'wrench' | 'search';

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
  topic: WhatsAppTopic;
  cases: string[];
}

export const SERVICES: Service[] = [
  {
    icon: 'monitor',
    title: 'Sites institucionais e comerciais',
    description: 'Presença digital profissional para apresentar a empresa, os serviços e os canais de contato.',
    topic: 'site',
    cases: ['dra-valdizia-melo', 'xc-regularizacoes'],
  },
  {
    icon: 'layers',
    title: 'Sistemas web personalizados',
    description: 'Plataformas sob medida, com login, perfis de acesso e as regras do seu negócio.',
    topic: 'sistema',
    cases: ['escala-do-louvor', 'reurb-flow'],
  },
  {
    icon: 'kanban',
    title: 'CRM e gestão de processos',
    description: 'Acompanhamento de processos, etapas, documentos e responsáveis em um só lugar, com Kanban.',
    topic: 'crm',
    cases: ['reurb-flow'],
  },
  {
    icon: 'calendar',
    title: 'Agendamento online',
    description: 'Agenda com horários disponíveis, confirmação para o cliente e painel para gerenciar os atendimentos.',
    topic: 'agendamento',
    cases: ['dra-valdizia-melo'],
  },
  {
    icon: 'plug',
    title: 'Automações e integrações',
    description: 'Notificações automáticas por e-mail, integração com mapas e conexão entre sistemas.',
    topic: 'integracoes',
    cases: ['reurb-flow', 'dra-valdizia-melo'],
  },
  {
    icon: 'chart',
    title: 'Dashboards e indicadores',
    description: 'Painéis com visão geral, progresso e prazos para acompanhar a operação.',
    topic: 'dashboards',
    cases: ['reurb-flow', 'escala-do-louvor'],
  },
  {
    icon: 'whatsapp',
    title: 'Integrações com WhatsApp',
    description: 'Contato com mensagem pronta e notificações de processo pelo WhatsApp.',
    topic: 'whatsapp',
    cases: ['reurb-flow'],
  },
  {
    icon: 'wrench',
    title: 'Manutenção e evolução',
    description: 'Ajustes, melhorias e novas funcionalidades em sites e sistemas já existentes.',
    topic: 'manutencao',
    cases: [],
  },
  {
    icon: 'search',
    title: 'SEO e otimização de sites',
    description: 'Estrutura técnica, desempenho e boas práticas para o site ser bem encontrado nas buscas.',
    topic: 'seo',
    cases: [],
  },
];
