export default {
  global: {
    componenteFormativo: 'Análisis de pruebas',
    descripcionCurso:
      'En este componente se abordarán temas referentes a las pruebas o procesos de <i>testing</i> de <i>software</i> antes de la puesta en marcha; estas se realizan en varias etapas, las cuales determinan la usabilidad y desempeño de la aplicación, basado en la mejor experiencia de usuario, que es el enfoque y la estrategia para diseñar sistemas bien estructurados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Terminología relacionada con pruebas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Contexto de la solución',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Enfoque de pruebas',
        desarrolloContenidos: true,
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
      tema: 'Terminología relacionada con pruebas',
      referencia:
        'Engineering Lifecycle Management – IBM. (2021). <em>Evaluación de riesgos.</em>',
      tipo: 'Página web',
      link:
        'https://www.ibm.com/docs/es/engineering-lifecycle-management-suite/lifecycle-management/7.0.3',
    },
    {
      tema: 'Contexto de la solución',
      referencia:
        'Software Testing Bureau. (2022). <em>Crear un buen Plan de Pruebas.</em> ',
      tipo: 'Página web',
      link:
        'https://www.softwaretestingbureau.com/crear-un-buen-plan-de-pruebas/#:~:text=El%20plan%20de%20pruebas%20tiene,cambios%20que%20tiene%20el%20proyecto',
    },
    {
      tema: 'Enfoque de pruebas',
      referencia:
        'Myservername.com. (2022). <em>Tutorial de Mantis Bug Tracker: Guía completa de MantisBT Issue Tracker.</em>',
      tipo: 'Página web',
      link: 'https://spa.myservername.com/mantis-bug-tracker-tutorial',
    },
    {
      tema: 'Enfoque de pruebas',
      referencia:
        'Turrado, J. (2020). <em>Qué son las pruebas de software</em>. ',
      tipo: 'Artículo de divulgación',
      link:
        'https://www.campusmvp.es/recursos/post/que-son-las-pruebas-de-software.aspx',
    },
    {
      tema: 'Enfoque de pruebas',
      referencia:
        'Trans-TI. (2021). <em>Software testing: Conocé el ciclo de vida de las pruebas de Software.</em>',
      tipo: 'Página web',
      link:
        'https://trans-ti.com/2021/01/11/software-testing-conoce-el-ciclo-de-vida-de-las-pruebas-de-software/ ',
    },
  ],
  glosario: [
    {
      termino: 'Bucle',
      significado:
        'procesos repetitivos, son instrucciones de código que se pueden ejecutar muchas veces.',
    },
    {
      termino: 'Calidad',
      significado:
        'cualidades que caracterizan al <i>software</i> y a su vez identifican su utilidad y existencia en las que cumple y supera las expectativas de los usuarios.',
    },
    {
      termino: 'Cobertura',
      significado: 'cantidad o porcentaje que abarca una actividad.',
    },
    {
      termino: 'Error',
      significado:
        'inconsistencia o problema que devuelve un resultado no deseado.',
    },
    {
      termino: 'Falla',
      significado:
        'en la ejecución de una aplicación, se manifiesta como un defecto visible dentro de las pruebas de <i>software</i>.',
    },
    {
      termino: 'Inspección',
      significado:
        'verificación que se realiza de un componente de <i>software</i> con el fin de que se cumplan las condiciones requeridas.',
    },
    {
      termino: 'Prueba',
      significado:
        'proceso de evaluación y verificación de los componentes o módulos del sistema, con el fin de encontrar fallos y establecer parámetros que definan calidad en el producto.',
    },
    {
      termino: 'Revisión',
      significado:
        'comprobación que una funcionalidad de un componente de <i>software</i> se ejecute correctamente.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'conjunto de métodos u operaciones que interactúan entre sí para llevar a cabo funcionalidades que automatizan una tarea en específico.',
    },
    {
      termino: 'Técnica',
      significado:
        'procedimientos que se llevan a cabo para obtener un resultado deseado con respecto a una funcionalidad o componente de <i>software</i>.',
    },
    {
      termino: 'TI',
      significado:
        'hace referencia a tecnologías de la información, está enfocado en las aplicaciones y el <i>hardware</i> de computadoras. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Gómez, M., Cervantes, J. & González, P. P. (2019). <i>Fundamentos de Ingeniería de Software.</i> ',
      link: 'https://www.academia.edu/66057456/Fundamentos_Ing_SW_VF_1_',
    },
    {
      referencia:
        'Toledo., F. (2018). <em>¿Qué es la cobertura de pruebas?</em> ',
      link: 'https://www.federico-toledo.com/que-es-la-cobertura-de-pruebas/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
