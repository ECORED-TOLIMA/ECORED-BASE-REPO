<template lang="pug">
footer.container.footer.tarjeta.p-3.px-sm-5.py-sm-4(:class="[allRound && 'footer__all-round']")
  .row.align-items-center.justify-content-center
    .col-auto.mb-2.mb-sm-0
      img(src="@/assets/bullets/cc.svg")
    .col-12.col-sm
      p.mb-0.text-small Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.

</template>

<script>
export default {
  name: 'Footer',
  props: {
    allRound: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    versiones() {
      return {
        base: this.$package.version,
        pkg: this.$package.dependencies['ecored-base-pkg'],
      }
    },
  },
}
</script>

<style lang="sass">
.footer
  background-color: $color-sistema-d
  border-bottom-right-radius: 0 !important
  border-bottom-left-radius:  0 !important
  &__all-round
    border-bottom-right-radius: 20px !important
    border-bottom-left-radius:  20px !important
  p
    color: $color-sistema-b
    line-height: 1.2em
</style>
