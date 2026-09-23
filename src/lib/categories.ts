export const CATEGORY_LABELS = {
  'sites-institucionais': 'Sites institucionais',
  'landing-pages': 'Landing pages',
  'sistemas-web': 'Sistemas Web',
  apps: 'Apps',
  'solucoes-personalizadas': 'Soluções personalizadas',
} as const;

export type CategorySlug = keyof typeof CATEGORY_LABELS;
