import { environment } from "src/environments/environment.development"

export const NAVBAR_ITEMS = [
    {
        title: 'Servicios',
        id: 'services',
    },
    {
        title: 'Proyectos',
        id: 'projects',
    },
    {
        title: 'Contacto',
        id: 'contact',
    },
]

export const SLOGAN = 'Construyendo sueños, creando realidades'

export const SERVICES_DESCRIPTION = 'En esta sección, encontrarás una gama diversa de soluciones, diseñadas para satisfacer tus necesidades específicas'

export const PROJECTS_DESCRIPTION = 'En esta sección, podrás ver los trabajos realizados a nuestros clientes'

export const FACEBOOK = 'https://facebook.com'

export const INSTAGRAM = 'https://instagram.com'

export const TELEFONO = '595972413798'

export const EMAIL = 'larreadg@gmail.com'

export const UBICACION = 'https://maps.app.goo.gl/4U3GQRwrqTt2FG1Y6'

export const UBICACION_DIRECCION = 'LA BOMBA Ñemby, Ruta PY01'

export const SOBRENOSOTROS = `En ${environment.app}, creemos que la arquitectura es el arte de crear espacios que inspiran, conectan y perduran. Nuestra empresa se fundó con la visión de transformar el paisaje urbano a través de diseños innovadores y construcciones de calidad superior.` 

export const CAROUSEL_CONF = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];