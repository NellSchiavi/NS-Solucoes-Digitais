/**
 * Prefixa um caminho absoluto do site com o `base` configurado no
 * astro.config.mjs. Necessário no GitHub Pages (Project Site), onde o
 * site fica em /NS-Solucoes-Digitais/ e não na raiz do domínio.
 * Sem `base` (ex.: `astro dev` na raiz), o caminho sai inalterado.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
