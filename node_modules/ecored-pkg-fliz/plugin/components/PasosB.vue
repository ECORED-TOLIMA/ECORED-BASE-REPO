<template lang="pug">
.pasos-b
  .row.flex-nowrap.mx-0.pasos-b__header.mb-4
    .col-2.col-sm-auto.px-0.me-sm-3
      .pasos-b__header__btn--left(@click="selected = leftBtnId")
        i.fas.fa-angle-left
    .col-8.col-sm.px-0
      .row.mx-0.flex-nowrap.pasos-b__header__items
        ScrollHorizontal(
          v-if="elements.length"
          :selectedId="'pb-header-' + (selected -1)"
        )
          .col-6.col-sm-4.px-0.pasos-b__header__item(
            v-for="(elm,index) of elements"
            :key="'pb-header-key-'+elm.id"
            :id="'pb-header-' +elm.id"
            :class="itemClasses(elm.id)"
          )
            .pasos-b__header__item__line-container
              .pasos-b__header__item__dot 
                span.text-bold {{index +1}}
                i.fas.fa-check
            .pasos-b__header__item__tittle.px-2.text-small(v-html="elm.titulo")
    .col-2.col-sm-auto.px-0.ms-sm-3.d-flex.justify-content-end
      .pasos-b__header__btn--right(@click="selected = rightBtnId" @mouseover="mostrarIndicador = false")
        i.fas.fa-angle-right
        .indicador__container.indicador--left(v-if="mostrarIndicador")
          .indicador--click

  .linea-tiempo-c__content
    ScrollHorizontal(
      v-if="elements.length"
      :selectedId="'pb-content-' + selected"
      item-full-width
    )
      .linea-tiempo-c__content__item(
        v-for="item in elements"
        :key="'pb-content-key-'+item.id"
        :id="'pb-content-'+item.id"
        v-child="item.elm"
      )
    .hidden-slot
      slot
</template>

<script>
import ScrollHorizontal from './ScrollHorizontal'
import componentSlotMixins from './componentSlotMixins'
export default {
  name: 'PasosB',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins],
  data: () => ({
    headerSelected: 0,
    mostrarIndicador: true,
  }),
  computed: {
    leftBtnId() {
      return this.selected - 1 === this.mainId
        ? this.selected
        : this.selected - 1
    },
    rightBtnId() {
      return this.selected + 1 ===
        this.elements[this.elements.length - 1].id + 1
        ? this.selected
        : this.selected + 1
    },
  },
  watch: {
    elements(newVal, oldVal) {
      if (!oldVal.length && newVal.length) {
        this.headerSelected = newVal[0].id
      }
    },
  },
  methods: {
    itemClasses(id) {
      return [
        { 'pasos-b__header__item--active': id === this.selected },
        { 'pasos-b__header__item--before': id < this.selected },
        this.elements.length > 6 ? 'col-lg-2' : 'col-lg',
        this.elements.length >= 4 ? 'col-md-3' : 'col-md',
      ]
    },
  },
}
</script>

<style lang="sass"></style>
