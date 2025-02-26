<template lang="pug">
.slyder-f
  
  .slyder-f__btn.pe-3(@click="clickAnterior")
    i.fas.fa-chevron-left
  .slyder-f__main(:id="'slyder-f-' + mainId")
    ScrollHorizontal(
      v-if="elements.length && rendered" 
      :selectedId="'sl-' + selected"
      row
    )
      .slyder-f__slyde(
        v-for="(item, index) in elements"
        :key="'sl-key-'+item.id"
        :id="'sl-'+item.id"
        :class="columnas"
        v-child="item.elm"
      )
  .slyder-f__btn.ps-3(@click="clickSiguiente")
    i.fas.fa-chevron-right

  .hidden-slot
    slot
</template>

<script>
import ScrollHorizontal from './ScrollHorizontal'
import componentSlotMixins from './componentSlotMixins'
import slyderMixins from './slyderMixins'
export default {
  name: 'CarouselCard',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins, slyderMixins],
  props: {
    columnas: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickAnterior() {
      const ids = this.elements.map(element => element.id)
      const idxOfSelected = ids.indexOf(this.selected)
      if (idxOfSelected > 0) {
        this.selected = ids[idxOfSelected - 1]
      }
    },
    clickSiguiente() {
      const ids = this.elements.map(element => element.id)
      const container = document.querySelector('#slyder-f-' + this.mainId)
      const containerComputedStyles = window.getComputedStyle(container)
      const containerWidth = parseFloat(containerComputedStyles.width)
      const elm = document.querySelector(`#sl-${this.elements[0].id}`)
      const elmComputedStyles = window.getComputedStyle(elm)
      const elmWidth = parseFloat(elmComputedStyles.width)
      const elmtsPerContainer = Math.round(containerWidth / elmWidth)
      const newIds =
        elmtsPerContainer > 1
          ? ids.slice(0, ids.length - (elmtsPerContainer - 1))
          : ids
      const idxOfSelected = newIds.indexOf(this.selected)
      if (idxOfSelected < newIds.length - 1) {
        this.selected = newIds[idxOfSelected + 1]
      }
    },
  },
}
</script>

<style lang="sass"></style>
