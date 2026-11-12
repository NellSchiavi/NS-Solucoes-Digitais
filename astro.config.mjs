// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Site comercial NS | Nelson Schiavi Soluções Digitais
// Saída 100% estática — portátil para qualquer hospedagem (GitHub Pages hoje,
// Vercel/Netlify/hospedagem própria no futuro), sem dependências de servidor.
//
// Publicado hoje no GitHub Pages como Project Site:
// https://nellschiavi.github.io/NS-Solucoes-Digitais/
// Por isso `base` aponta para o nome do repositório — caminhos internos
// usam `withBase()` (src/lib/url.ts) para respeitar esse prefixo.
// Quando houver domínio próprio, trocar `site` e remover `base` (o
// sitemap, o canonical, o Open Graph e o Schema.org acompanham sozinhos;
// só o public/robots.txt tem a URL escrita à mão).
export default defineConfig({
  output: 'static',
  site: 'https://nellschiavi.github.io',
  base: '/NS-Solucoes-Digitais',
  // Gera sitemap-index.xml + sitemap-0.xml com as páginas do build,
  // já com o prefixo /NS-Solucoes-Digitais/.
  integrations: [sitemap()],
  // Fontes da marca baixadas do Google no build e servidas pelo próprio
  // site (sem requisição a terceiros no navegador do visitante). O Astro
  // gera fallbacks com métricas ajustadas, o que evita o "salto" de layout
  // (CLS) quando a fonte real termina de carregar.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      weights: [500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
