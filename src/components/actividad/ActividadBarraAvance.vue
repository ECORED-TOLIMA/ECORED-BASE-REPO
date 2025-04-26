<template>
  <div class="tarjeta-avance">
    <div class="row align-items-center">
      <div class="d-none d-md-block col">
        <div class="tarjeta-avance__barra-container ms-4">
          <div class="tarjeta-avance__barra" :style="{ width: avanceWidth }" />
        </div>
      </div>
      <div class="col col-md-auto text-center">
        <span class="lh-1">
          Pregunta {{ preguntaIndex + 1 }} de {{ preguntasCount }}
        </span>
      </div>
      <div class="col-auto">
        <div v-if="respuestasLength === preguntasCount" class="py-4"></div>
        <button
          v-else-if="respuestasLength === 9"
          class="boton btn-lg boton--b py-3 px-4"
          :class="{ 'boton--disabled': continuarDisabled }"
          @click="$emit('continuar')"
        >
          <span>Verificar</span>
          <i class="fas fa-arrow-right"></i>
        </button>
        <button
          v-else
          class="boton btn-lg boton--b py-3 px-4"
          :class="{ 'boton--disabled': continuarDisabled }"
          @click="$emit('continuar')"
        >
          <span>Continuar</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActividadBarraAvance',
  props: {
    preguntaIndex: {
      type: Number,
      required: true,
    },
    preguntasCount: {
      type: Number,
      required: true,
    },
    continuarDisabled: {
      type: Boolean,
      default: false,
    },
    respuestasLength: {
      type: Number,
      default: 0,
    },
    respuestas: {
      type: Array,
      required: true,
    },
  },
  computed: {
    avanceWidth() {
      return `${((this.preguntaIndex + 1) / this.preguntasCount) * 100}%`
    },
    rtas() {
      const respuestas = {
        correctas: 0,
        incorrectas: 0,
        total: this.respuestas.length,
        porcentaje: 0,
      }
      this.respuestas.forEach(r => {
        if (r.esCorrecta) {
          respuestas.correctas++
        } else {
          respuestas.incorrectas++
        }
      })
      respuestas.porcentaje = (respuestas.correctas / respuestas.total) * 100
      return respuestas
    },
  },
}
</script>

<style lang="sass" scoped>
.tarjeta-avance
  background-color: #dce4ebff
  border-bottom-right-radius: 10px
  border-bottom-left-radius: 10px
  overflow: hidden
  @media (max-width: 560px)
    padding-left: .85rem !important

  .boton
    border-radius: 0

  .boton--disabled
    opacity: 0.5
    pointer-events: none

  &__barra-container
    background-color: #b4cce3ff
    border-radius: 8px
    height: 16px
    overflow: hidden
    .tarjeta-avance__barra
      background-color: #2c70abff
      height: 100%
      border-radius: 8px
      width: 0%
      transition: width 0.5s
</style>
