/**
 * Contato comercial oficial da NS — não alterar sem confirmação do Nelson.
 * Número: (11) 97395-3023
 */
const PHONE_E164 = '5511973953023';
const PHONE_DISPLAY = '(11) 97395-3023';

/**
 * Mensagens pré-preenchidas por contexto. Cada CTA usa a que corresponde
 * ao assunto da página, para o atendimento já começar sabendo o interesse.
 */
export const WHATSAPP_MESSAGES = {
  geral: 'Olá! Conheci o portfólio da NS e gostaria de solicitar um orçamento.',
  site: 'Olá! Conheci o portfólio da NS e gostaria de solicitar um orçamento para criação de um site.',
  sistema: 'Olá! Gostaria de conhecer melhor o desenvolvimento de sistemas administrativos.',
  escala: 'Olá! Tenho interesse em uma solução semelhante ao Escala do Louvor.',
  crm: 'Olá! Gostaria de conversar sobre um CRM ou sistema de gestão de processos para a minha empresa.',
  agendamento: 'Olá! Gostaria de um orçamento para um sistema de agendamento online.',
  integracoes: 'Olá! Gostaria de conversar sobre automações e integrações entre sistemas.',
  dashboards: 'Olá! Gostaria de conversar sobre dashboards e indicadores para o meu negócio.',
  whatsapp: 'Olá! Gostaria de integrar o WhatsApp ao atendimento ou ao sistema da minha empresa.',
  manutencao: 'Olá! Gostaria de conversar sobre manutenção e evolução de um site ou sistema.',
  seo: 'Olá! Gostaria de melhorar o SEO e o desempenho do meu site.',
} as const;

export type WhatsAppTopic = keyof typeof WHATSAPP_MESSAGES;

export function buildWhatsAppLink(message: string = WHATSAPP_MESSAGES.geral): string {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export { PHONE_DISPLAY };
