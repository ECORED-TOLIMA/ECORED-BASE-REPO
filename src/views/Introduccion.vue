<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            .tarjeta.tarjeta--gris.p-4
              p.mb-0 Este componente formativo permite comprender los fundamentos del ciberespacio, la ciberseguridad y los delitos informáticos, abordando su evolución, características y regulaciones vigentes. Su propósito es proporcionar a los aprendices las bases necesarias para identificar amenazas digitales, conocer las normativas de seguridad y entender el impacto del cibercrimen a nivel nacional e internacional. A través del análisis de conceptos clave y casos aplicados, se explorarán estrategias de prevención y respuesta para fortalecer la seguridad en entornos digitales. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/EBTxhJ7SJBE?si=VfvjNcyGuy-r6stA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
