// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site comercial NS | Nelson Schiavi Soluções Digitais
// Saída 100% estática — portátil para qualquer hospedagem (GitHub Pages hoje,
// Vercel/Netlify/hospedagem própria no futuro), sem dependências de servidor.
//
// Publicado hoje no GitHub Pages como Project Site:
// https://nellschiavi.github.io/NS-Solucoes-Digitais/
// Por isso `base` aponta para o nome do repositório — caminhos internos
// usam `withBase()` (src/lib/url.ts) para respeitar esse prefixo.
// Quando houver domínio próprio, trocar `site` e remover `base`.
export default defineConfig({
  output: 'static',
  site: 'https://nellschiavi.github.io',
  base: '/NS-Solucoes-Digitais',
  vite: {
    plugins: [tailwindcss()],
  },
});
