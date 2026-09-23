/**
 * Contato comercial oficial da NS — não alterar sem confirmação do Nelson.
 * Número: (11) 97395-3023
 */
const PHONE_E164 = '5511973953023';
const PHONE_DISPLAY = '(11) 97395-3023';

const DEFAULT_MESSAGE =
  'Olá Nelson, vim pelo seu site e gostaria de solicitar um orçamento.';

export function buildWhatsAppLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export { PHONE_DISPLAY };
