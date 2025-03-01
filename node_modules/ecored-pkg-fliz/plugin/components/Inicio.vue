<template lang="pug">
section.inicio
  BannerHero.mb-5

  //- Desarrollo de contenidos
  #contenidos.container.tarjeta.tarjeta__template--azul-claro.px-3.py-4.px-sm-5.pb-sm-5.mb-5
    .titulo__template--a.mb-4
      h3 Desarrollo<br>de contenidos

    .tarjeta--blanca.p-3.p-sm-4
      .desarrollo-contenidos
        router-link.desarrollo-contenidos__item(
          v-for="item of desarrolloContenidosData"
          :key="'desarrollo-'+item.nombreRuta"
          :to="{name: item.nombreRuta}"
        )
          .desarrollo-contenidos__item__texto
            span.desarrollo-contenidos__item__icono(v-if="item.hasOwnProperty('numero')" ) {{item.numero}}
            i.desarrollo-contenidos__item__icono(v-else :class="item.icono")
            span(v-html="item.titulo")

          a.boton--sm
            span.d-none.d-md-block Ver contenido
            span.d-md-none Ver

  .container.tarjeta.tarjeta__template--azul-claro.creditos-inicio.px-3.py-4.px-sm-5

    .creditos-inicio__container(v-if="creditosInicio")
      .creditos-inicio__item(v-for="(row, index) in creditosInicio")
        .row
          .creditos-inicio__titulo.col-md-3.col-lg-2.mb-3.mb-md-0
            h5.mb-0(v-html="row.titulo")

          .creditos-inicio__imagenes.col
            img(v-for="imagen in row.contenido" :src="imagen")
        hr(v-if="index != creditosInicio.length -1")

    .text-center(v-else)
      img.d-inline-block.mb-2(src="@/assets/logos/logo-sena.svg" style="width: 100px")
      h5.mb-0 Ecosistema de recursos educativos digitales
  Footer
  

</template>
<script>
export default {
  name: 'Inicio',
  computed: {
    menuPrincipalData() {
      return this.$config.menuPrincipal
    },
    creditosInicio() {
      return this.$config.creditosInicio
    },
    desarrolloContenidosData() {
      const allMenuData = [
        ...this.menuPrincipalData.menu,
        ...this.menuPrincipalData.subMenu,
      ]
      return allMenuData.filter(item => item.desarrolloContenidos)
    },
  },
}
</script>

<style lang="sass">
.inicio
  .footer
    border-radius: 0 !important
.resultados-aprendizaje
  &__item
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0

.desarrollo-contenidos
  &__item
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 25px
    padding: 5px
    border-radius: $base-border-radius

    &__texto
      display: flex
      align-items: center
      color: $color-sistema-texto

    &__icono
      display: block
      background-color: $color-sistema-g
      font-size: 20px
      font-weight: $base-black-font-weight
      text-align: center
      padding: 10px
      line-height: 1em
      width: 40px
      margin-right: 15px

    &:last-child
      margin-bottom: 0

    &:hover
      background-color: $color-sistema-g
      font-weight: $base-black-font-weight
      color: $color-sistema-a

.creditos-inicio
  border-bottom-left-radius: 0 !important
  border-bottom-right-radius: 0 !important
  &__container
    hr
      margin: 15px 0
  &__titulo
    display: flex
    align-items: center
  &__item
  &__imagenes
    display: flex
    flex-wrap: wrap
    img
      width: auto
      max-height: 60px
      margin-right: 15px
      margin-top: 5px
      margin-bottom: 5px
</style>
