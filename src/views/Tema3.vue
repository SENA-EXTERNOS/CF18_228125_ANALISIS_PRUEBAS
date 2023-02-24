<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Enfoque de pruebas

    .bloque-texto-g.color-secundario.p-3.p-sm-1.p-md-5(data-aos="zoom-in-right")   
      .bloque-texto-g__img.bloque-img-2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-01.svg')})`}"
      )
      .bloque-texto-g__texto.bloque-txt-2.p-3(data-aos="zoom-out-left") 
        p Anteriormente, se ha visualizado la importancia de realizar pruebas de #[em software] y los riesgos que tiene cada proceso del ciclo de su desarrollo, sin embargo, existen alternativas y opciones para determinar el plan de pruebas, es un punto crucial en el que es necesario abordar todos los aspectos de inicio a fin y, la forma como se realizan en todos los componentes del sistema. De igual forma, se deben tener en cuenta los recursos y, sobre todo, la documentación del proyecto y del proceso como tal. En el enfoque de pruebas se tienen en cuenta las distintas técnicas usadas, características y procesos de cada una, así como la metodología, cobertura y métricas aplicadas en este ciclo.

    .row.aling-items-center.mt-5
      .col-lg-9
        p En el ciclo de vida de desarrollo de #[em software], se contemplan métodos que llevan a la definición y estructura de las estrategias para el plan de pruebas, existen alternativas y métodos para el desarrollo de programas como, por ejemplo, el modelo en cascada, el modelo general en V y otros como metodologías ágiles, que son implementadas en muchas empresas. Todos ellos usan su propia estructura para la implementación de aplicaciones y la puesta en marcha. En el modelo V se contemplan igualdades en los procesos de desarrollo (lado izquierdo) y actividades de prueba, (lado derecho), como se presenta en la siguiente figura.
      .col-lg-3
        img(src='@/assets/curso/temas/tema3/tema3-img-02.svg', alt='Texto que describa la imagen')
  
    img(src='@/assets/curso/temas/tema3/tema3-img-decorativa-01.svg', alt='Texto que describa la imagen').tema3-decorativa-01

    .clr-background-3.mt-4
      .row.justify-content-around.align-items-center.mt-5 
        .col-lg-10
          .titulo-sexto.color-primario.margin-top1
            h5 Figura 2
            p.mb-0 #[em Modelo V]
      .row.justify-content-around.align-items-center
        .col-lg-9.margin-bottom1
          img(src='@/assets/curso/temas/tema3/tema3-img-04.svg', alt='Texto que describa la imagen')           

    p.mt-4 En los niveles de desarrollo deben realizar una prueba por cada nivel, en este sentido, el encargado de realizarlas debe constatar que se cumpla con la calidad del #[i software], para lo cual existe verificación y validación en todo el proceso.
    p.mt-3 Se amplía la información sobre algunas de estas pruebas:

    .row.aling-items-center.mt-5
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/tema3-img-05.svg', alt='Texto que describa la imagen')(data-aos="zoom-out-right") 
      .col-lg-8
        .acordionA-01
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Verificación y validación (VyV)")
              .col-md-12.mb-4.mb-md-0
                p La validación consiste en que los requerimientos solicitados por el cliente se cumplan a cabalidad, por su parte, la verificación es la que determina si los procesos de implementación del #[i software] cumplen con las funcionalidades o funcionalidad específica. En los procesos VyV existen una serie de actividades que permiten dar calidad; además de las pruebas, se tienen en cuenta las revisiones técnicas, simulación, revisiones periódicas y documentación, entre otras.                
            .row(titulo="Pruebas unitarias o de componentes")
              .col-md-12.mb-4.mb-md-0
                p Son pruebas que se realizan de forma individual a cada componente del #[i software], funcionalidad o fragmento de código; cada unidad es invocada desde una clase o componente externo para formar el #[i software], por lo tanto, cada una debe ser funcionalmente independiente. El desarrollador es quien debe realizar estas pruebas, porque es el más idóneo e implementó el módulo o componente del sistema, por lo tanto, conoce la estructura generada.
            .row(titulo="Pruebas de integración")
              .col-md-12.mb-4.mb-md-0
                p Estas pruebas son necesarias para constatar que los componentes o módulos del sistema, pueden funcionar correctamente acoplados e integrados, debido a que pueden ocurrir imprevistos o errores no contemplados. Este tipo de pruebas verifican el funcionamiento, consolidación e interacción entre partes del sistema, ya sea con el sistema operativo, el #[em hardware] en el cual se está corriendo, y las interfaces en el sistema.
            .row(titulo="Pruebas de validación o aceptación")
              .col-md-12.mb-4.mb-md-0
                p Estas pruebas se realizan por parte del cliente y son llevadas a cabo antes de la puesta en marcha o etapa de producción.                           
    
    img(src='@/assets/curso/temas/tema3/tema3-img-decorativa-02.svg', alt='Texto que describa la imagen').tema3-decorativa-02

    p.mt-4 Se complementa un poco más la información sobre las pruebas de integración y de validación o aceptación.

    .row.aling-items-center.mt-5
      .col-lg-8
        .acordionA-02
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Integración descendente")
              .col-md-12.mb-4.mb-md-0
                p Consiste en que el componente de mayor nivel integra otros componentes del sistema, por lo tanto, esta prueba es incremental para definir la arquitectura del sistema.
            .row(titulo="Integración ascendente")
              .col-md-12.mb-4.mb-md-0
                p Se realizan pruebas con los componentes más simples y sencillos de la aplicación y luego se van integrando a los de mayor envergadura o a los subsistemas.
            .row(titulo="Integración <i>ad-hoc</i>")
              .col-md-12.mb-4.mb-md-0
                p En la medida que se termina la implementación de cada componente, estos se van probando y posteriormente integrando con otro componente en iguales condiciones, es decir, ya probado.
            .row(titulo="Integración de esqueleto")
              .col-md-12.mb-4.mb-md-0
                p Se realiza integración de componentes sobre un componente o subsistema con una complejidad moderada o avanzada, los componentes más pequeños se van agregando a este.
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/tema3-img-06.svg', alt='Texto que describa la imagen')(data-aos="zoom-out-right")       

    p.mt-4 Se finaliza con las pruebas de validación y aceptación.

    .puntos-calientes-t3.mt-3.mb-3
      .row.justify-content-around.align-items-center
        .col-lg-10
          p.mt-4 Se encuentran las siguientes pruebas:   
      .row.justify-content-around.align-items-center.mt-4  
        .col-lg-10.mb-5
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/tema3-img-08.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-contenido.p-3(x="5.5%" y="47%" numero="+")
              h4 Pruebas de aceptación del contrato
              p.mb-0 Se validan los datos e información del contrato y los requerimientos ahí establecidos, pueden ocurrir casos en que no se cumpla esas condiciones y al realizar las pruebas por parte del cliente, surjan errores en el #[i software].

            .tarjeta.color-acento-contenido.p-3(x="39.2%" y="47%" numero="+")
              h4 Pruebas de aceptación del usuario
              p.mb-0 Consiste en realizar pruebas con el usuario final de la plataforma tecnológica, porque ocurre que, en muchos casos, cuando se lleva a cabo la implantación del #[i software], algunos usuarios no contemplan una o varias funcionalidades, mientras que otros sí dan la aceptación.

            .tarjeta.color-acento-contenido.p-3(x="73.2%" y="47%" numero="+")
              h4 Pruebas de operativas
              p.mb-0 Se realizan con el administrador de tecnologías de la información -TI-, para realizar distintos procesos como creación de usuarios, copias de seguridad, mantenimientos, vulnerabilidades en la infraestructura, entre otros.

    .row.justify-content-center.align-items-center
      .col-lg-9
        .cajon.color-acento-botones.p-4.mt-4
          p Existen diversas metodologías para realizar pruebas de #[i software] con la calidad deseada, pueden ser estáticas, dinámicas o basadas en la experiencia.

    img(src='@/assets/curso/temas/tema3/tema3-img-decorativa-03.svg', alt='Texto que describa la imagen').tema3-decorativa-03

    h3.mt-5 Pruebas estáticas
    p.mt-4 En este tipo de pruebas se tienen en cuenta los documentos de especificación de requisitos para analizar y revisar el código fuente de la aplicación, con el fin de detectar errores al inicio del desarrollo.
    p.mt-4 En ellas se encuentra:

    .row.aling-items-center.mt-5
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/tema3-img-09.svg', alt='Texto que describa la imagen')(data-aos="zoom-out-right") 
      .col-lg-8
        .acordionA-03
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Análisis estático")
              .col-md-12.mb-4.mb-md-0
                p No se realiza ejecución del #[i software], si no, para encontrar fallas en el código fuente del sistema, por lo tanto, se hace necesario hacer uso de herramientas para analizar el código de la aplicación, con el fin de encontrar errores en la implementación. Los defectos más comunes hallados son relacionados con interfaces inconsistentes entre módulos, código inaccesible y sin lógica, entre otros.
            .row(titulo="Revisiones")
              .col-md-12.mb-4.mb-md-0
                p Se realizan con el fin de establecer correcciones a las fallas encontradas de una forma temprana, lo que implica reducción en costes de tiempo y dinero. En este ámbito se pueden encontrar los defectos en requisitos, en el diseño e interfaces incorrectas.
            .row(titulo="Inspección")
              .col-md-12.mb-4.mb-md-0
                p Se realiza sobre los documentos del proyecto para validar el cumplimiento de estándares de calidad del #[i software], es realizado por varios entes como revisor, escriba y moderador, personas encargadas y responsables de las revisiones o inspecciones del producto.

    h3.mt-5 Pruebas dinámicas
    .row.aling-items-center.mt-4
      .col-lg-9
        p.mb-5 Se realizan con la ejecución de la plataforma tecnológica, en la cual se encuentran dos formas de probar el funcionamiento, la internamente conocida como técnica de caja blanca, en la cual se validan los módulos y la relación entre ellos con sus diferentes funcionalidades y, las pruebas que se realizan de forma externa o técnicas de caja negra, en la que se determinan las funcionalidades operativas y las fallas ocurridas en el entorno de la aplicación.
        p.mb-2 Para conocer la técnica de prueba de caja blanca, ver el siguiente video:

      .col-lg-3
        img(src='@/assets/curso/temas/tema3/tema3-img-10.svg', alt='Texto que describa la imagen')(data-aos="zoom-out-left")

    .row
      figure.mb-5.mt-3
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .clr-background-4.mt-3
      .row.justify-content-around.align-items-center
        .col-lg-10
          p.mb-3.mt-4 Continuando con las pruebas de caja negra. 
          p Se realizan al finalizar todas las pruebas, estas técnicas están basadas en la especificación funcional y no funcional del sistema y tienen en cuenta la estructura de la aplicación que se desarrolla. En las pruebas de caja negra se perciben funciones incorrectas o faltantes, errores de inicio y fin, fallas en la interfaz y también en estructuras de datos.
      .row.justify-content-around.align-items-center
        .col-lg-9.top-1
          img(src='@/assets/curso/temas/tema3/tema3-img-12.png', alt='Texto que describa la imagen')           

    p.mt-4 En esta técnica se observan varios métodos:

    .row.aling-items-center.mt-5
      .col-lg-8
        .acordionA-04
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Partición equivalente")
              .col-md-12.mb-4.mb-md-0
                p Se aplican a datos válidos y no válidos de una clase, e igualmente a valores de salida, internos y relativos a las interfaces. En este caso se tienen en cuenta las condiciones de entrada si hacen referencia a rangos o valores específicos, se define una clase con equivalencia válida y dos inválidas. Si las condiciones de entrada hacen referencia a conjuntos o entradas booleanas, se define una clase válida y otra inválida.
            .row(titulo="Análisis del valor límite")
              .col-md-12.mb-4.mb-md-0
                p Tiene en cuenta los valores extremos o límites de una clase y determina el mayor número de errores, se realiza posterior a la participación equivalente como complemento a esa técnica.
            .row(titulo="Pruebas de tabla de decisión")
              .col-md-12.mb-4.mb-md-0
                p Se basa en decisiones y condiciones lógicas como verdadero y falso, valores booleanos, además identifican los requerimientos basados en las condiciones lógicas en el sistema.
            .row(titulo="Pruebas de caso de uso")
              .col-md-12.mb-4.mb-md-0
                p Permiten definir pruebas de aceptación con la colaboración de los usuarios, teniendo en cuenta que los casos de uso muestran la forma de interactuar de ellos con el sistema. 
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/tema3-img-13.svg', alt='Texto que describa la imagen')(data-aos="zoom-out-up")       

    h3.mt-5 Pruebas basadas en la experiencia
    p.mt-4 Hacen referencia a las técnicas, conocimientos y experiencias del encargado de realizar las pruebas, además, de acuerdo con las tecnologías y la relación con aplicaciones de características semejantes, haciéndolas idóneas para el probador.
    p.mt-4 Existen dos tipos de pruebas basadas en experiencia:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/tema3-img-14.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Predicción de error 
            p.mb-0.text-center Se definen los errores del sistema, componentes, módulos o funciones, a partir de experiencia o habilidades del encargado de realizarlas.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/tema3-img-15.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Pruebas exploratorias
            p.mb-0.text-center Se basan en la autonomía y responsabilidad del probador para realizarlas conforme al aprendizaje, diseño y ejecución de manera simultánea de las pruebas.

    h3.mt-5 Cobertura
    .row.aling-items-center.mt-4
      .col-lg-8
        p Se conoce como medida para la calidad de las pruebas e indica la cantidad de código del programa que se ha probado. La cobertura indica lo que abarca cada una de las tareas, se basa en criterios de los cuales se contiene uno al otro y así, se generaliza con respecto a los casos probados, componentes o funcionalidades del #[i software]. La cobertura permite conocer las medidas por las cuales se examina un sistema de información, con las pruebas que se realizan de acuerdo con criterios de calidad establecidos.
      .col-lg-3
        img(src='@/assets/curso/temas/tema3/tema3-img-16.svg', alt='Texto que describa la imagen')(data-aos="zoom-out-left")

    h3.mt-5 Métricas y recursos de pruebas
    .row.aling-items-center.mt-5
      .col-lg-3
        img(src='@/assets/curso/temas/tema3/tema3-img-17.svg', alt='Texto que describa la imagen')(data-aos="zoom-out-right")
      .col-lg-8
        p Realizar mediciones sobre las pruebas a los módulos o componentes de #[i software] son determinantes en la definición de la calidad del sistema que se construye, con esto se estiman los errores y fallos encontrados en la fase de pruebas del programa. Si no se cuenta con las métricas en los procesos de casos de pruebas, no es específico ni objetivo el proceso, porque no se determinan ni se cuantifican las tareas realizadas. Por el contrario, al contar con datos cuando se llevan a cabo, se establecen lineamientos y cifras exactas a través de cada proceso que se puso en marcha en esa fase, como por ejemplo, cantidad de pruebas realizadas sobre los distintos módulos, cantidad de errores encontrados por funcionalidad, faltantes por llevarse a cabo, cantidad de resultados nulos, fallas o completas.
    
    img.mb-3(src='@/assets/curso/temas/tema3/tema3-img-decorativa-04.svg', alt='Texto que describa la imagen').tema3-decorativa-04

    p.mt-4 Se cuenta con dos tipos de métricas para pruebas, las cuales determinan las mediciones al realizar los casos de pruebas en los ambientes, componentes y módulos del sistema.

    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-acento-botones.color-txt-container.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-18.svg', alt='Texto que describa la imagen')
            h2.text-center Métrica base
            p.text-center Hacen referencia a los datos medidos por el probador en el proceso de desarrollo y ejecución de los casos de pruebas, a estos datos continuamente se les realiza seguimiento en todo el ciclo de vida de las pruebas.
          
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema3/tema3-img-19.svg', alt='Texto que describa la imagen')
            h2.text-center Métrica calculada
            p.text-center Nacen de los datos recolectados de las métricas base, son realizadas por el líder de pruebas a partir de los informes de pruebas.

    .row.justify-content-center.align-items-center
      .col-lg-9
        .cajon.color-primario.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, en el cual encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
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
