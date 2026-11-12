import { getCollection, type CollectionEntry } from 'astro:content';
import { WHATSAPP_MESSAGES } from './whatsapp';

/**
 * Regras de apresentação dos projetos do portfólio, num lugar só, para o
 * card, a página do case e a página /contato mostrarem sempre o mesmo
 * status e os mesmos botões.
 *
 * Princípio: nenhum botão sem destino real. Um botão externo só aparece
 * quando o projeto tem um link público (demoUrl ou projectUrl).
 */

type ProjectData = CollectionEntry<'projects'>['data'];

/** Projetos visíveis no site, na ordem do portfólio (destaques primeiro). */
export async function getPortfolioProjects() {
  const projects = await getCollection('projects', ({ data }) => data.visibility !== 'oculto');
  return projects.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return a.data.order - b.data.order;
  });
}

/**
 * Primeiro projeto com demonstração pública, para os destaques da Home.
 * Vem do conteúdo (demoUrl), nunca de um link fixo no componente: se a
 * demonstração sair do ar e o campo for removido, os destaques somem junto.
 */
export async function getFeaturedDemo() {
  const projects = await getPortfolioProjects();
  return projects.find((project) => project.data.visibility === 'publico' && project.data.demoUrl);
}

export interface ProjectAction {
  kind: 'demo' | 'site';
  href: string;
  label: string;
}

/** Ação principal externa do projeto, ou undefined quando não há link público. */
export function getPrimaryAction(data: ProjectData): ProjectAction | undefined {
  if (data.visibility !== 'publico') return undefined;
  if (data.demoUrl) {
    return { kind: 'demo', href: data.demoUrl, label: 'Experimentar demonstração' };
  }
  if (data.projectUrl) {
    return { kind: 'site', href: data.projectUrl, label: 'Ver site no ar' };
  }
  return undefined;
}

/** Rótulo de status exibido ao visitante. */
export function getStatusLabel(data: ProjectData): string | undefined {
  if (data.demoUrl && data.visibility === 'publico') return 'Demonstração disponível';
  switch (data.status) {
    case 'publicado':
      return data.category === 'sites-institucionais' || data.category === 'landing-pages'
        ? 'Site publicado'
        : 'Publicado';
    case 'desenvolvido':
      return 'Projeto desenvolvido';
    case 'em_desenvolvimento':
      return 'Em desenvolvimento';
    case 'em_homologacao':
      return 'Em homologação';
    case 'privado':
      return 'Projeto privado';
    default:
      return undefined;
  }
}

/** Mensagem do WhatsApp do case: a do próprio projeto ou a da categoria. */
export function getWhatsAppMessage(data: ProjectData): string {
  if (data.whatsappMessage) return data.whatsappMessage;
  return data.category === 'sistemas-web' || data.category === 'solucoes-personalizadas'
    ? WHATSAPP_MESSAGES.sistema
    : WHATSAPP_MESSAGES.site;
}

/** Iniciais usadas no placeholder visual quando o projeto ainda não tem imagem. */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}
