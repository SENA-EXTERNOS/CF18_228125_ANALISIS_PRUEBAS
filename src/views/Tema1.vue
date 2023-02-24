<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Terminología relacionada con pruebas

    .bloque-texto-g.color-secundario.p-3.p-sm-1.p-md-5.mb-4   
      .bloque-texto-g__img.bloque-img-1(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-01.svg')})`}"
      )(data-aos="flip-right")
      .bloque-texto-g__texto.bloque-txt-1.p-2(data-aos="fade-left")
        p.mb-0 Existen definiciones y terminologías asociadas a las pruebas de #[i software] que enmarcan los conocimientos, acontecimientos y prácticas que se realizan para la puesta en marcha de este, luego de la fase de producción o creación del producto que determina la solución a las necesidades del cliente, a partir de los requerimientos establecidos y solicitados. La realización de pruebas se hace con base en la búsqueda de errores generados en los sistemas desarrollados, no solo con el fin de determinar el buen funcionamiento del sistema y pensar que está listo para la puesta en marcha, sino que todo aplicativo desarrollado genera errores de cualquier índole, por lo tanto, es indispensable tenerlo presente y realizar las pruebas correspondientes.
          
    p.mt-3 A continuación, conozca algunas de las terminologías más utilizadas al realizar pruebas de #[i software]:

    .puntos-calientes-t1.mt-3.mb-3
      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img-02.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="49.9%" y="9%" numero="+")
          p El producto #[i software] puede adecuarse a distintos entornos a los cuales sea sometido sin la necesidad de utilizar factores externos para este fin, solo con las funcionalidades y características por las cuales fue desarrollado.

        .tarjeta.color-acento-contenido.p-3(x="59.6%" y="12.2%" numero="+")
          p Tener en cuenta los riesgos en todo el proceso del desarrollo del #[i software] para saber afrontar y manejar los errores y fallas.

        .tarjeta.color-acento-contenido.p-3(x="68%" y="21%" numero="+")
          p Evaluación realizada de forma independiente al desarrollo, para determinar los requerimientos y especificaciones del #[i software] a partir de los estándares y normas establecidos.

        .tarjeta.color-acento-contenido.p-3(x="72.9%" y="33.8%" numero="+")
          p Ayudan al proceso de las pruebas del #[i software] y todo lo relacionado al diseño, puesta en marcha, gestión y comprobación de pruebas.

        .tarjeta.color-acento-contenido.p-3(x="74.3%" y="49.3%" numero="+")
          p Es el grado de satisfacción por el cual un sistema de información sometido a varios procesos de funcionalidad, cumple los requisitos y necesidades solicitados por el cliente.

        .tarjeta.color-acento-contenido.p-3(x="71%" y="64%" numero="+")
          p Es la capacidad del #[i software] de utilizar recursos y ambientes que son compartidos a través de otra plataforma tecnológica diseñada para otro fin y que son independientes.

        .tarjeta.color-acento-contenido.p-3(x="64%" y="75%" numero="+")
          p Es la capacidad del #[i software] de cumplir con las especificaciones y estándares establecidos por los entes reguladores y que son claves para darle respuesta al cliente y satisfacer sus necesidades.

        .tarjeta.color-acento-contenido.p-3(x="55%" y="81.6%" numero="+")
          p Es un procedimiento en el cual se realiza análisis, se eliminan las fallas en el sistema y se solventan algunos errores generados en el proceso de desarrollo.

        .tarjeta.color-acento-contenido.p-3(x="44.6%" y="81.5%" numero="+")
          p Está relacionado con el rendimiento y uso óptimo del sistema, al igual que las capacidades generales.

        .tarjeta.color-acento-contenido.p-3(x="35.7%" y="75%" numero="+")
          p Capacidad para relacionar componentes del #[i software] para hacerlo más complejo y funcional, con más capacidades.

        .tarjeta.color-acento-contenido.p-3(x="28.8%" y="63.8%" numero="+")
          p Permite al #[i software] relacionarse o comunicarse con otros componentes o aplicaciones.

        .tarjeta.color-acento-contenido.p-3(x="25.7%" y="49.5%" numero="+")
          p Permite a los distintos usuarios su administración y uso, dependiendo el rol que tengan para tener acceso a los diferentes módulos del sistema.

        .tarjeta.color-acento-contenido.p-3(x="26.6%" y="33.8%" numero="+")
          p Capacidad del sistema para enfrentar entornos hostiles y ambientes distintos a los manejados de forma normal, en el cual opera de forma consistente y adecuadamente.	

        .tarjeta.color-acento-contenido.p-3(x="32.2%" y="21%" numero="+")
          p Capacidad del #[i software] de prevenir inconsistencias y fallos. 

        .tarjeta.color-acento-contenido.p-3(x="40.1%" y="12.3%" numero="+")
          p Facilidad para usar el sistema, entendible y aprendido por todos los usuarios en distintos campos específicos.

    .bloque-texto-g.color-secundario.p-3.p-sm-1.p-md-5(data-aos="zoom-in")   
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-03.svg')})`}"
      )
      .bloque-texto-g__texto.p-3
        p.mb-0 Ahora bien, las pruebas involucran actividades correspondientes al diseño del plan en el que se realiza el modelo y la forma como se desarrollan; así mismo, se tiene en cuenta la localización de errores al momento de validar las funcionalidades del sistema, sin olvidar que la experiencia de usuario es de suma importancia en la etapa de pruebas, así como la arquitectura de la información en la que se debe verificar la estructura, conformación y contenido de los datos que se quieren mostrar, lo cual no debe complicar la navegación. Recuerde que no debe tener mucho contenido, debe ser fácil e intuitivo, con la finalidad que el usuario encuentre lo que necesita rápidamente y se sienta en una plataforma amigable.<br/>
        p La siguiente figura presenta las actividades relacionadas con las pruebas.

    .clr-background-1
      .row.justify-content-around.align-items-center.mt-5 
        .col-lg-10
          .titulo-sexto.color-primario.margin-top1
            h5.mb-0 Figura 1   
            p.mb-0 #[em Actividades relacionadas con las pruebas].
      .row.justify-content-around.align-items-center
        .col-lg-9.margin-bottom1
          img(src='@/assets/curso/temas/tema1/tema1-img-05.svg', alt='Texto que describa la imagen')   

    .row.justify-content-around.align-items-center.mt-5 
      .col-lg-7
        p.mb-3 Las pruebas que se desarrollan en cada uno de los proyectos de #[em software], tienen como objetivo encontrar la mayor cantidad posible de errores en cada uno de los módulos o secciones del sistema, con el fin de realizar la retroalimentación oportuna para que se corrijan las fallas encontradas, aportando posibles soluciones.
        p El departamento de QA (Quality Assurance) realiza pruebas a las plataformas tecnológicas, con el fin de determinar su funcionamiento de forma eficiente y eficaz, por ende, es necesario que esta área realice los distintos planes para ejecutar pruebas y así dirigir a cabalidad cada esfuerzo de la operación en la metodología utilizada.
      .col-lg-5
        img(src='@/assets/curso/temas/tema1/tema1-img-06.svg', alt='Texto que describa la imagen')(data-aos="fade-up") 
        
    img(src='@/assets/curso/temas/tema1/tema1-img-decorativa-01.svg', alt='Texto que describa la imagen').tema1-decorativa-01      

    p.mb-3.mt-3 Además, permite:   
    
    .row.slide-1.mt-3
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.align-items-center 
              p.text-center Analizar la automatización.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-07.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-08.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.text-center Enfocarse en experiencias de usuarios con el fin de determinar la forma de utilización.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-09.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.align-items-center 
              p.text-center Hacer estudios en arquitectura de la información para mostrar de forma organizada y detallada, lo que los usuarios realmente quieren en una respectiva plataforma tecnológica.

    .row.justify-content-center.align-items-center
      .col-lg-9
        .cajon.color-secundario.p-4.mt-4
          p Un sitio o web o cualquier tipo de aplicación que se desarrolle e implemente, también debe cumplir con la utilización de programas de seguimiento de errores, para asegurar el funcionamiento óptimo del #[i software].

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
