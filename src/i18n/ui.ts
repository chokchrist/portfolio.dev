
export const LANGUAGES: Record<string, {code: string; name: string}> = {
  es: {
    code: 'es',
    name: 'Español'
  },
  en: {
    code: 'en',
    name: 'English'
  }
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.experience' : 'Experiencia',
    'nav.proyects' : 'Proyectos',
    'nav.about' : 'Sobre mí',
    'nav.contact' : 'Contacto',
  },
  en: {
    'nav.experience' : 'Experience',
    'nav.proyects' : 'Projects',
    'nav.about' : 'About',
    'nav.contact' : 'Contact',
  },
} as const;

export const routes = {
	es: {
		vota: 'vota',
		info: 'info',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		vota: 'vote',
		info: 'information',
		archivo: 'archive',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	},
	ca: {
		vota: 'vota',
		info: 'informacio',
		archivo: 'arxiu',
		'aviso-legal': 'avis-legal',
		privacidad: 'privacitat',
		cookies: 'cookies',
	},
};