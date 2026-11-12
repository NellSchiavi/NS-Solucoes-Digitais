/**
 * SEO e dados estruturados (Schema.org) da NS.
 *
 * Regra: somente informações verificadas — nome comercial, descrição dos
 * serviços, URL pública real e o WhatsApp comercial. Sem endereço físico,
 * horário, preço, avaliação ou CNPJ, que não foram confirmados.
 */
import { SERVICES } from './services';
import { buildWhatsAppLink } from './whatsapp';
import { withBase } from './url';

export const SITE_NAME = 'NS Soluções Digitais';
export const LEGAL_STYLE_NAME = 'NS | Nelson Schiavi Soluções Digitais';
export const SLOGAN = 'Sua ideia em um site de verdade.';
export const PHONE_INTERNATIONAL = '+55 11 97395-3023';

/** URL absoluta de um caminho do site (respeita `site` + `base`). */
export function absoluteUrl(path: string, site: URL): string {
  return new URL(withBase(path), site).href;
}

/** WebSite + ProfessionalService, para a Home. */
export function organizationJsonLd(site: URL, logoUrl: string) {
  const home = absoluteUrl('/', site);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${home}#website`,
        url: home,
        name: SITE_NAME,
        alternateName: LEGAL_STYLE_NAME,
        inLanguage: 'pt-BR',
        publisher: { '@id': `${home}#organization` },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${home}#organization`,
        name: LEGAL_STYLE_NAME,
        alternateName: SITE_NAME,
        slogan: SLOGAN,
        description:
          'Sites e soluções digitais personalizados para empresas, com atendimento direto com o desenvolvedor responsável.',
        url: home,
        logo: logoUrl,
        image: absoluteUrl('/og-ns.png', site),
        telephone: PHONE_INTERNATIONAL,
        founder: { '@type': 'Person', name: 'Nelson Schiavi' },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: PHONE_INTERNATIONAL,
          contactType: 'sales',
          availableLanguage: ['Portuguese'],
          url: buildWhatsAppLink(),
        },
        knowsAbout: SERVICES.map((service) => service.title),
      },
    ],
  };
}

/** Página de contato: ContactPage ligada à organização. */
export function contactPageJsonLd(site: URL, title: string, description: string) {
  const home = absoluteUrl('/', site);
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: absoluteUrl('/contato/', site),
    name: title,
    description,
    inLanguage: 'pt-BR',
    about: { '@id': `${home}#organization` },
    isPartOf: { '@id': `${home}#website` },
  };
}

/** Página de case: projeto (CreativeWork) + trilha de navegação. */
export function caseJsonLd(
  site: URL,
  project: { slug: string; name: string; description: string; image?: string },
) {
  const home = absoluteUrl('/', site);
  const pageUrl = absoluteUrl(`/portfolio/${project.slug}/`, site);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${pageUrl}#projeto`,
        name: project.name,
        description: project.description,
        url: pageUrl,
        inLanguage: 'pt-BR',
        creator: { '@id': `${home}#organization` },
        ...(project.image ? { image: project.image } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: home },
          { '@type': 'ListItem', position: 2, name: 'Projetos', item: `${home}#portfolio` },
          { '@type': 'ListItem', position: 3, name: project.name, item: pageUrl },
        ],
      },
    ],
  };
}
