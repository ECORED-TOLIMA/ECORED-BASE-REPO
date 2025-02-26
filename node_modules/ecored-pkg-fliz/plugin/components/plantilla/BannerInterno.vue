<template lang="pug">
.container-fluid.banner-interno
  .banner-interno__fondo(:style="{'background-image': `url(${globalData.fondoBannerPrincipal})`}")
  .container
    .banner-interno__titulo.py-5
      .banner-interno__titulo__icono.me-3(v-if="icono.length")
        i(:class="icono")
      h2.mb-0(v-html="titulo")
</template>

<script>
export default {
  name: 'BannerInterno',
  props: {
    icono: {
      type: String,
      default: '',
    },
    titulo: {
      type: String,
      default: '',
    },
  },
  data: () => ({}),
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-interno
  position: relative

  &__fondo
    position: absolute
    top: 0
    bottom: -50px
    left: 0
    right: 0
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__titulo
    display: flex
    align-items: center
    &__icono
      display: block
      width: 32px
      height: 32px
      border-radius: 50%
      background-color: $color-banner-text
      position: relative
      i
        color: $color-banner-fondo
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
    h1, h2, h3, h4, h5, h6
      color: $color-banner-text
      line-height: 1.1em
</style>
