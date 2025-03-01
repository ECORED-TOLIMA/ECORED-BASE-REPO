<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" titulo="Referencias bibliográficas")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item(v-for="ref in orderedData" :key="ref.link")
      span(v-html="ref.referencia")
      a.ms-1(v-if="ref.link" :href="ref.link" target="_blank")
        span(v-html="ref.link")
        i.ms-1.fas.fa-external-link-alt
      hr.my-3
</template>
<script>
import plantillaMixins from './plantillaMixins'
export default {
  name: 'Referencias',
  mixins: [plantillaMixins],
  computed: {
    referenciasData() {
      return this.$config.referencias
    },
    orderedData() {
      const ArrayOrdered = [...this.referenciasData].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
      return ArrayOrdered
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
