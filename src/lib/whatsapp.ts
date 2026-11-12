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
} as const;

export function buildWhatsAppLink(message: string = WHATSAPP_MESSAGES.geral): string {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export { PHONE_DISPLAY };
