<template lang="pug">
.img-infografica-b(
  :class="{'img-infografica-b--open': selectedItem}"
)
  .img-infografica-b__img(:ref="'img-ref-'+mainId")
    slot(name="imagen")
  .img-infografica-b__content(v-if="elements.length")
    .img-infografica-b__item(
        v-for="(item, index) in elements"
        :key="'img-infografica-b-btn-'+item.id"
        :style="[{top: item.y},{left: item.x}]"
        @click="selected = item.id"
      )
      .indicador--click(v-if="showIndicator && firstElement.id === item.id")
      .img-infografica-b__item__tooltip
        span.text-small(v-html="item.tooltip")
      .img-infografica-b__item__dot
      .img-infografica-b__item__numero(v-if="item.hasOwnProperty('numero')") {{item.numero}}
      .img-infografica-b__item__numero(v-else)
        i.fas.fa-plus

  .img-infografica-b__modal.p-3.p-md-4.p-xl-5(v-if="selectedItem" :style="getImageHeight()")
    .img-infografica-b__modal__btn-cerrar(@click="selected = 0")
      i.fas.fa-times
    .img-infografica-b__modal__contenido(v-child="selectedItem.elm")

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from './componentSlotMixins'
export default {
  name: 'ImagenInfograficaB',
  mixins: [componentSlotMixins],
  data: () => ({
    firstSelection: false,
    showIndicator: true,
  }),
  computed: {
    selectedItem() {
      return this.elements.find(element => element.id === this.selected)
    },
    firstElement() {
      return this.elements.length && this.elements[0]
    },
  },
  watch: {
    selected() {
      if (this.showIndicator) {
        this.showIndicator = false
      }
    },
  },
  methods: {
    getImageHeight() {
      const imgElement = this.$refs['img-ref-' + this.mainId]
      if (imgElement) {
        return {
          'min-height': imgElement.clientHeight + 'px',
        }
      }
    },
  },
}
</script>

<style lang="sass"></style>
