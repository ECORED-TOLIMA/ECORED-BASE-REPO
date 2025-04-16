export default {
  global: {
    Name:
      'Fundamentos del ciberespacio, la ciberseguridad y los delitos informáticos',
    Description:
      'Ese componente formativo establece las bases para comprender el ciberespacio, la ciberseguridad y los delitos informáticos. Se explorarán los conceptos esenciales de la seguridad digital, los riesgos asociados a la navegación en línea y las amenazas cibernéticas más comunes. Además, se analizarán las normativas vigentes y las estrategias de prevención para fortalecer la protección de la información y los sistemas informáticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ciberespacio fundamentos y alcance',
        desarrolloContenidos: true,
        subMenu: [
          // {
          //   numero: '1.1',
          //   titulo: 'Concepto del ciberespacio',
          //   hash: 't_1_1',
          // },
          {
            numero: '1.1',
            titulo: 'Historia y evolución del ciberespacio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características del ciberespacio',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de ciberespacio',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciberseguridad principios, normativas e importancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto e importancia de la ciberseguridad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Historia y evolución de la ciberseguridad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características de la ciberseguridad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Normas y regulaciones internacionales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Retos actuales en ciberseguridad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Delitos informáticos y su impacto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Actores del cibercrimen',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de delitos informáticos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Delitos informáticos en Colombia y regulación vigente',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Contexto mundial y tendencias actuales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Desafíos globales en la lucha contra el cibercrimen',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Mecanismos de reporte y prevención',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema_complementario',
      referencia: 'Referencia_complementario',
      tipo: 'Tipo_complementario',
      link: 'Link_complementario',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Termino_glosario',
      significado: 'Significado_glosario',
    },
  ],
  referencias: [
    {
      referencia: 'Nombre_referencias',
      link: 'Link_referencias',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Carlos Camargo Solano',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
