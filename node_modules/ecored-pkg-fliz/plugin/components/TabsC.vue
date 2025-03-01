<template lang="pug">
.tabs-c
  .tabs-c__header
    .row.m-0
      .col-sm-6.col-lg-4.col-xl.tabs-c__tab.py-3(
        v-for="(elm,index) of elements"
        :key="'tabs-c-menu-'+elm.id"
        :class="{'tabs-c__tab--active' : selected === elm.id}"
        @click="selected = elm.id"
        role="button"
        @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
      )
        .indicador__container(v-if="mostrarIndicador && index === 1")
          .indicador--click
        span(v-html="elm.titulo")
  .tabs-c__content-item(
    v-for="elm of elements"
    :key="'tabs-content-'+elm.id"
    v-show="selected === elm.id"
    v-child="elm.elm"
  )

  .hidden-slot
    slot

</template>

<script>
import componentSlotMixins from './componentSlotMixins'
export default {
  name: 'TabsC',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
