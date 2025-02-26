<template lang="pug">
.slyder-a
  .slyder-a__tipo-a(v-if="tipo === 'a'")
    .slyder-a__btn--sigt(
      v-if="navObj.next"
      @click="selected = navObj.next" 
      @mouseover="mostrarIndicador = false"
    )
      .indicador__container.indicador--left(v-if="mostrarIndicador")
        .indicador--click
    .slyder-a__btn--atrs(v-if="navObj.back" @click="selected = navObj.back")
    .slyder-a__bullets
      .slyder-a__bullets__item(
        v-for="bullet in elements"
        :key="'sl-blt-key-'+bullet.id"
        :class="{'slyder-a__bullets__item--active' : selected === bullet.id}"
        @click="selected = bullet.id"
      )
  ScrollHorizontal(v-if="elements.length && rendered" :selectedId="'sl-' + selected" item-full-width)
    .slyder-a__item(
      v-for="item in elements"
      :key="'sl-key-'+item.id"
      :id="'sl-'+item.id"
      v-child="item.elm"
    )
  .slyder-a__tipo-b.mt-3(v-if="tipo === 'b'")
    .slyder-a__btn--atrs(:class="{'hide' : !navObj.back}" @click="selected = navObj.back")
    
    .slyder-a__bullets
      .slyder-a__bullets__item(
        v-for="bullet in elements"
        :key="'sl-blt-key-'+bullet.id"
        :class="{'slyder-a__bullets__item--active' : selected === bullet.id}"
        @click="selected = bullet.id"
      )
    .slyder-a__btn--sigt(
      :class="{'hide' : !navObj.next}"
      @click="selected = navObj.next" 
      @mouseover="mostrarIndicador = false"
    )
      .indicador__container.indicador--left(v-if="mostrarIndicador")
        .indicador--click
  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from './componentSlotMixins'
export default {
  name: 'CarouselRED',
  mixins: [componentSlotMixins],
  props: {
    tipo: {
      type: String,
      default: 'a',
    },
  },
  data: () => ({
    mostrarIndicador: true,
    secuencial: true,
  }),
}
</script>

<style lang="sass"></style>
