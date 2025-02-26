<template>
  <div>
    <h3 class="mb-4 pb-4">
      <strong
        >{{ numeroPregunta }}. <span v-html="pregunta.texto"></span
      ></strong>
    </h3>
    <div class="row align-items-center">
      <div class="d-none d-md-block col-5">
        <img :src="pregunta.imagen" alt="" />
      </div>
      <div class="col">
        <div
          v-for="(respuesta, idx) in opcionesComputed"
          :key="respuesta.id"
          class="tarjeta tarjeta--azul tarjeta-respuesta p-4"
          :class="{
            'mb-3': idx !== opcionesComputed.length - 1,
            'tarjeta-respuesta--correcta': respuesta.correcta,
            'tarjeta-respuesta--incorrecta': respuesta.incorrecta,
            'tarjeta-respuesta--disabled': respuesta.disabled,
          }"
          @click="onRespuestaSelected(respuesta)"
        >
          <div class="row align-items-center">
            <div class="col-auto">
              <div
                class="tarjeta-respuesta__icon"
                :class="[
                  respuestaSelected.id === respuesta.id
                    ? respuesta.esCorrecta
                      ? 'tarjeta-respuesta__icon--correcto'
                      : 'tarjeta-respuesta__icon--incorrecto'
                    : '',
                ]"
              />
            </div>
            <div class="col" v-html="respuesta.texto"></div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="respuestaSelected.id">
      <hr />
      <div v-if="respuestaSelected.esCorrecta" class="pt-1">
        <span class="text-success h3 ma-0">¡Correcto!</span>
        {{ pregunta.mensaje_correcto }}
      </div>
      <div v-else class="pt-1">
        <span class="text-danger h3 ma-0">¡Incorrecto!</span>
        {{ pregunta.mensaje_incorrecto }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ActividadPregunta',
  props: {
    pregunta: {
      type: Object,
      required: true,
    },
    numeroPregunta: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    respuestaSelected: {},
  }),
  computed: {
    opcionesComputed() {
      if (!this.pregunta.opciones.length) return []
      const selectedId = this.respuestaSelected.id
      return this.pregunta.opciones.map(opcion => ({
        ...opcion,
        correcta: selectedId === opcion.id && opcion.esCorrecta,
        incorrecta: selectedId === opcion.id && !opcion.esCorrecta,
        disabled: !!selectedId,
      }))
    },
  },
  watch: {
    pregunta() {
      this.respuestaSelected = {}
    },
  },
  methods: {
    onRespuestaSelected(respuesta) {
      this.respuestaSelected = respuesta
      this.$emit('respuestaSelected', respuesta.esCorrecta)
    },
  },
}
</script>

<style lang="sass" scoped>
img
  width: auto
  height: auto
  display: block
  margin: auto
.tarjeta--pregunta
  background: #dce4eb
.tarjeta-respuesta
  border: 2px solid transparent
  cursor: pointer
  transition: border-color 0.2s
  &:hover
    border-color: #556a82

    .tarjeta-respuesta__icon:not(.tarjeta-respuesta__icon--correcto):not(.tarjeta-respuesta__icon--incorrecto)
      background-image: url('~@/assets/actividad/vacio-hover.svg')

  &--correcta
    border-color: #61ca92ff
    background-color: #ebfff0ff
    &:hover
      border-color: #61ca92ff

  &--incorrecta
    border-color: #ff6b6bff
    background-color: #ffedecff
    &:hover
      border-color: #ff6b6bff

  &--disabled
    cursor: not-allowed
    pointer-events: none

  &__icon
    width: 32px
    height: 32px
    position: relative
    background-image: url('~@/assets/actividad/vacio.svg')
    &:hover
      background-image: url('~@/assets/actividad/vacio-hover.svg')

    &--correcto
      background-image: url('~@/assets/actividad/correcto.svg')

    &--incorrecto
      background-image: url('~@/assets/actividad/incorrecto.svg')
</style>
