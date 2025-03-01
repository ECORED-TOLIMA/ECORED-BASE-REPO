<template lang="pug">
.acordion
  .p-3.pb-0.p-md-4.pb-md-0.mb-3(v-for="(elm, index) of elements" :key="elm.id" :class="cardClass(elm.id)")
    
    .acordion__header.mb-3.mb-md-4(
      @click="selected = selected != elm.id ? elm.id : 0"
      @mouseover="mostrarIndicador = mostrarIndicador && index === 1 ? false : mostrarIndicador"
    )
      .d-flex.align-items-center
        .acordion__accion(v-if="tipo === 'a'")
          .acordion__accion__btn--a.h3.mb-0.me-3
            i.fas.fa-minus(v-if="selected === elm.id")
            i.fas.fa-plus(v-else)
            .indicador__container(v-if="mostrarIndicador && index === 1")
              .indicador--click.indicador--sm

        .acordion__titulo
          h3.mb-0(v-html="elm.titulo")

      .acordion__accion(v-if="tipo === 'b'")
        .acordion__accion__btn--b.h3.mb-0
          i.fas.fa-angle-up(v-if="selected === elm.id")
          i.fas.fa-angle-down(v-else)
          .indicador__container.indicador--left(v-if="mostrarIndicador && index === 1")
            .indicador--click.indicador--sm
    
    .acordion__contenido(
      :style="{ height: rendered && selected === elm.id ? getActiveHeight(elm.id) : 0 } "
    )
      .acordion__contenido__item.pb-3.pb-md-4(:ref="elm.id" v-child="elm.elm")

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from './componentSlotMixins'
export default {
  name: 'AccordionRED',
  mixins: [componentSlotMixins],
  props: {
    claseTarjeta: {
      type: String,
      default: '',
    },
    tipo: {
      type: String,
      default: 'a',
    },
  },
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.domUpdated()
      }, 5000)
    })
  },
  methods: {
    cardClass(id) {
      const clasesFinales = []
      if (this.claseTarjeta.length) {
        clasesFinales.push(this.claseTarjeta)
      } else {
        clasesFinales.push('tarjeta tarjeta--blanca')
      }
      if (this.selected === id) {
        clasesFinales.push('acordion__activo')
      }
      return clasesFinales
    },
  },
}
</script>

<style lang="sass"></style>
