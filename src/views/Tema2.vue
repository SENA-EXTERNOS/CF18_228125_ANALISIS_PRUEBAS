<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contexto de la solución

    .bloque-texto-g.color-secundario.p-3.p-sm-1.p-md-5(data-aos="fade-down-right")   
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-01.svg')})`}"
      )
      .bloque-texto-g__texto.bloque-txt-2.p-3(data-aos="fade-left") 
        p Las pruebas son esenciales en cualquier proyecto de #[i software], permiten tener mejores resultados al desarrollar aplicaciones, y de esto depende que los clientes o usuarios estén satisfechos con la solución, hacer las pruebas respectivas implica encontrar errores y evitar pérdidas luego de la puesta en marcha. Los probadores deben regirse a partir de los requerimientos funcionales y no funcionales del #[i software] para encontrar defectos, y a partir de ellos, se deben elegir requisitos comprobables de las pruebas. Las aplicaciones solo están listas para la pruebas cuando se hayan terminado las fases anteriores a esta, luego se debe diligenciar la documentación respectiva de los resultados esperados con los reales, en los que se hayan detectado daños y errores. 

    .clr-background-2.mb-3
      .row.justify-content-around.align-items-center.mt-5 
        .col-lg-12
          p.margin-top1.margin-l1 Las pruebas deben realizarse luego de la culminación de la implementación y también después de cada corrección, porque:
      .row.justify-content-around.align-items-center
        .col-lg-10.margin-bottom1
          img(src='@/assets/curso/temas/tema2/tema2-img-03.svg', alt='Texto que describa la imagen')   

    .row.justify-content-around.aling-items-center.mt-5
      .col-12
        .bloque-texto-g.color-acento-botones.tam-tarjeta-color.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-04.svg')})`}"
          )(data-aos="zoom-out-right") 
          .bloque-texto-g__texto.bloque-texto-tema2-1.p-3
            p.mb-0 #[b Es así como la metodología utilizada en el proceso de desarrollo de #[i software], requiere tener limitaciones en la determinación de cada uno de los procedimientos. Hay una fase en la cual se planifican y otra que llevan a cabo, teniendo las restricciones requeridas, es en este aspecto en el cual se visualizan los alcances del #[i software], con la necesidad de hallar falencias y errores en todo el programa; esto ayuda a corregirlos antes de la etapa de producción, en la cual saldría costoso y con un riesgo enorme de pérdidas económicas y de otros tipos.]
          .bloque-texto-g__texto.bloque-texto-tema2-2.p-4
            p.mb-0 Los sistemas de información, por muy sencillos que sean, tienen una gran cantidad de niveles o casos de pruebas, las cuales deben ser planificadas, administradas, ejecutadas y sobre todo, utilizar tecnologías y herramientas para realizar pruebas automatizadas. Estas tecnologías utilizadas para llevar a cabo las pruebas, ayudan a que el #[i software] obtenga la calidad deseada y los recursos sean manejados eficientemente.

    p.mt-4.mb-4 Existe gran variedad de herramientas que se utilizan para la gestión de estas tareas, conozca algunas de ellas:

    .slyderA-img
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-md-0.margin-slyder-1
            h3.mb-3 Herramientas para pruebas estáticas
            p.mb-3 Permiten la detección de fallas y defectos al inicio del proyecto. Algunos tipos son:
            ul.lista-ul--color.mb-3
              li
                i.fas.fa-circle.fa-xs
                | Herramientas de revisión: utilizadas para informar o dar a conocer comentarios sobre las revisiones e informes sobre fallas encontradas.
              li
                i.fas.fa-circle.fa-xs
                | Análisis estático: permiten distinguir y encontrar errores en el código antes de llevar a cabo las pruebas dinámicas; ejecutan estructuras para la codificación, análisis y dependencias.
              li
                i.fas.fa-circle.fa-xs
                p.mb-0 Herramientas de modelado: permiten verificar y contemplar los modelos del #[i software] como la información de una base de datos relacional en la consecución de inestabilidades, inconsistencias y defectos.
           
            p Existen varias herramientas que permiten realizar la automatización de pruebas estáticas como son: #[i PMD, ChekStyle, SONAR, Simian, FindBugs, MacCaabeTest].
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-06.svg', alt='Texto que describa la imagen').img-slyder-1
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0.margin-slyder-2
            h3.mb-3 Herramientas para la planificación y gestión
            p.mb-3 Están relacionadas con la documentación de las pruebas, mantenimiento y gestión de resultados de estas tareas, en este caso, permiten documentar, analizar y gestionar las debilidades e incidencias en el proyecto de desarrollo.
            p Las herramientas utilizadas en la planificación y gestión son: #[i Teslink, Redmine, Trello, Mantis, HP Quality Center, IBM Rational quiality mánager, Testopia, BugZilla].
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-07.svg', alt='Texto que describa la imagen').img-slyder-1
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0.margin-slyder-3
            h3 Herramientas para pruebas de automatización
            p Funcionan a partir de scripts que se pueden realizar en distintos lenguajes de programación, para ejecutar herramientas de pruebas funcionales de forma automática. Las herramientas utilizadas son: #[i Selenium, QTP, SoapUI, Cucumber, IBM Rational Automation Framework].
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-08.svg', alt='Texto que describa la imagen').img-slyder-1
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0.margin-slyder-4
            h3.mb-3 Herramientas de pruebas de carga y rendimiento
            p Permiten llevar a cabo pruebas en las cuales se intensifique la sobrecarga de la aplicación, y así validar hasta qué nivel puede responder, se realiza sobre todo a sistemas que trabajan en tiempo real para establecer los límites de este. Las herramientas utilizadas son:  #[i Imeter, LoadUI, FunkLoad, HP Load runner].
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-09.svg', alt='Texto que describa la imagen').img-slyder-1
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-5.mb-4.mb-md-0.margin-slyder-5
            h3.mb-3 Drivers y Stubs
            p Son miniaplicaciones o programas pequeños, diseñados para la realización de pruebas en la integración de los módulos del sistema. Los drivers permiten brindar información a los módulos que están debajo de él, es decir, funciona a un alto nivel del #[i software] y los #[i stubs] reciben información de módulos que están más arriba, por lo tanto, el trabajo realizado funciona a un nivel bajo del sistema.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-10.svg', alt='Texto que describa la imagen').img-slyder-1                                                   

    p.mb-0.mt-5 Por otra parte, cuando se realizan pruebas de #[i software] para identificar los riesgos del producto, la idea es anticipar las fallas de las funcionalidades y módulos del sistema para afrontar su impacto ante el cliente. 
    p.mb-4 Enfocarse en los riesgos facilita el trabajo para los controles de calidad, diseño y ejecución de pruebas, debido a que se priorizan con respecto a las fallas, también permite realizar una evaluación, e identificar áreas propensas a fallas y de alto riesgo dentro de la plataforma tecnológica.

    p.mb-4 Trabajar en los riesgos y tenerlos definidos con anticipación va a ayudar en muchos aspectos, como por ejemplo:    

    .slyderF-01.mb-5.index-dos
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/tema2-img-11.svg' alt='AvatarTop')
          p.text-center Optimización de pruebas.

        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/tema2-img-12.svg' alt='AvatarTop')
          p.text-center Reducción de costos por la implementación de tareas optimizadas y sencillas.

        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/tema2-img-13.svg' alt='AvatarTop')
          p.text-center Permite dirigir y enfatizar los casos de pruebas hacia esos elementos de alto riesgo, para determinar las fallas y resolverlas rápidamente.

        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/tema2-img-14.svg' alt='AvatarTop')
          p.text-center Permite claridad para delimitar el alcance de las pruebas.

        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/tema2-img-15.svg' alt='AvatarTop')
          p.text-center Aumenta la calidad del #[i software], porque se implementan herramientas menos costosas que determinan defectos en la aplicación.

    .bloque-texto-g.color-acento-botones.index-dos.p-3.p-sm-1.p-md-5(data-aos="fade-down-right")   
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-16.svg')})`}"
      )
      .bloque-texto-g__texto.p-3
        p El diseño del plan de pruebas para mantener una buena calidad del #[i software], debe prepararse con anticipación y objetividad hacia los errores o fallas que se puedan encontrar, para así contar con la solución y el tiempo requerido. Al no contar con esta planificación, es complejo determinar los tiempos y soluciones a las inconsistencias encontradas, además la inversión y recursos es mayor y más prolongada. Por lo tanto, es necesario que se tenga en cuenta, aún desde la concepción del proyecto.

    img(src='@/assets/curso/temas/tema2/tema2-img-decorativa-01.svg', alt='Texto que describa la imagen').tema2-decorativa-01

    .row.justify-content-center.align-items-center
      .col-lg-9
        .cajon.color-acento-contenido.p-4.mt-4
          p La gestión de la calidad es un componente de solución de #[i software] que junto a las distintas actividades que se realizan en ella, permiten la detección temprana y la corrección de errores y fallas en la construcción de este. Para determinar una solución, en la etapa del plan de pruebas, es necesario diseñar y desarrollar casos y tareas que abarque todo lo concerniente en el #[i software] como iteraciones, combinaciones, permutaciones, con el fin de determinar cuáles benefician o afectan los módulos o subsistemas. En ese orden de ideas, se indagan las operaciones que realiza el producto, se determinan los casos, ponerlos en primera medida y finalmente, realizar programas automatizados para gestionar las tareas de pruebas.


</template>

<script>
export default {
  name: 'Tema2',
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
