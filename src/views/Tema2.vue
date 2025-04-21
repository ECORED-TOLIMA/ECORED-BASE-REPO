<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo_de_primer_nivel

    .cronologia.mb-5
      .contenedor
        .tarjeta-evento.tarjeta-evento--paso1(data-aos="fade-left")
          .tarjeta-titulo
            .cajon-numero
              span 01
            h2.p-2.text-white Subtitle
          .tarjeta-cuerpo.p-4
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
            figure
              img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
              figcaption Leyenda de la imagen 
        .tarjeta-evento.tarjeta-evento--paso2(data-aos="fade-right")
          .tarjeta-titulo
            .cajon-numero
              span 02
            h2 Subtitle
          .tarjeta-cuerpo
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
        .tarjeta-evento.tarjeta-evento--paso3(data-aos="fade-left")
          .tarjeta-titulo
            .cajon-numero
              span 03
            h2 Subtitle
          .tarjeta-cuerpo
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
        .tarjeta-evento.tarjeta-evento--paso4(data-aos="fade-right")
          .tarjeta-titulo
            .cajon-numero
              span 04
            h2 Subtitle
          .tarjeta-cuerpo
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
        .tarjeta-evento.tarjeta-evento--paso5(data-aos="fade-left")
          .tarjeta-titulo
            .cajon-numero
              span 05
            h2 Subtitle
          .tarjeta-cuerpo
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis

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
