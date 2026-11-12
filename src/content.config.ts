import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
 * Coleção de projetos do portfólio NS.
 *
 * Cada projeto é um arquivo Markdown em src/content/projects/<slug>.md.
 * Adicionar um projeto novo = adicionar um novo arquivo aqui, sem tocar
 * em nenhum componente ou página — a home e a rota de case
 * (/portfolio/[slug]) são geradas automaticamente a partir desta coleção.
 *
 * `internalNotes` nunca é lido pelas páginas públicas — serve apenas
 * como anotação interna dentro do próprio arquivo de conteúdo.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  // `image()` faz o Astro validar o caminho da imagem (em src/assets) e
  // processá-la no build: WebP, tamanhos responsivos e width/height.
  schema: ({ image }) => z.object({
    name: z.string(),
    // Opcional: sem categoria confirmada, o campo fica vazio em vez de
    // adivinhado.
    category: z
      .enum([
        'sites-institucionais',
        'landing-pages',
        'sistemas-web',
        'apps',
        'solucoes-personalizadas',
      ])
      .optional(),
    shortDescription: z.string(),
    client: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    // Opcional pelo mesmo motivo: nem todo projeto tem o status de
    // publicação confirmado ainda. 'desenvolvido' = projeto pronto/entregue
    // mas sem publicação pública confirmada (diferente de 'publicado').
    status: z
      .enum(['publicado', 'desenvolvido', 'privado', 'em_desenvolvimento', 'em_homologacao'])
      .optional(),
    visibility: z.enum(['publico', 'privado', 'oculto']),
    // Sem imagem real ainda -> a UI renderiza um placeholder visual
    // (não fotográfico) em vez de imagem de banco/genérica.
    // Caminhos relativos ao arquivo .md (ex.: ../../assets/projects/...).
    mainImage: image().optional(),
    // Texto alternativo descritivo da imagem principal.
    mainImageAlt: z.string().optional(),
    // Caminho simples ou { src, caption } quando a imagem precisa de
    // legenda (ex.: identificar qual tela/funcionalidade do sistema é).
    additionalImages: z
      .array(z.union([image(), z.object({ src: image(), caption: z.string() })]))
      .default([]),
    // Endereço do site/sistema publicado do cliente ("Ver site no ar").
    projectUrl: z.string().url().optional(),
    // Ambiente público de demonstração com dados fictícios
    // ("Experimentar demonstração"). Tem prioridade sobre projectUrl.
    demoUrl: z.string().url().optional(),
    // Instruções curtas para o visitante usar a demonstração. Só são
    // exibidas quando há demoUrl.
    demoNotes: z.array(z.string()).default([]),
    // Uma frase: o problema que o projeto resolve (card e página do case).
    problem: z.string().optional(),
    // Mensagem pré-preenchida do WhatsApp para este case. Sem ela, usa a
    // mensagem padrão da categoria (src/lib/projects.ts).
    whatsappMessage: z.string().optional(),
    ctaLabel: z.string().default('Ver case'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    // Data ainda não confirmada pelo cliente -> mantida opcional
    // em vez de inventar uma data.
    date: z.coerce.date().optional(),
    internalNotes: z.string().optional(),
  }),
});

export const collections = { projects };
