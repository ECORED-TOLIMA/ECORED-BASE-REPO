<template lang="pug">
.linea-tiempo-e
  .linea-tiempo-e__item(
    v-for="(item, index) in elements"
    :key="'linea-tiempo-e-key-'+item.id"
  )
    .linea-tiempo-e__item__header
      h3.mb-1 {{item.titulo}}
      p.mb-0(v-if="item.hasOwnProperty('subtitulo')") {{item.subtitulo}}
    .linea-tiempo-e__item__body(v-child="item.elm")

  .hidden-slot
    slot

</template>

<script>
import componentSlotMixins from './componentSlotMixins'
export default {
  name: 'LineaTiempoE',
  mixins: [componentSlotMixins],
}
</script>

<style lang="sass"></style>
