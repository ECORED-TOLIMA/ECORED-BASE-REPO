<template>
  <div class="tarjeta--blanca">
    <div class="row align-items-center mb-4">
      <div class="col-auto">
        <img src="@/assets/componentes/icon-actividad.svg" alt="" />
      </div>
      <div class="col ">
        <h2 class="titulo-tercero mb-0">
          {{ cuestionario.titulo }}
        </h2>
        <p class="mb-0" v-html="cuestionario.introduccion"></p>
      </div>
    </div>
    <div class="tarjeta tarjeta--lightest-gray px-4 pb-4 pt-4 px-md-5">
      <div
        v-if="respuestas.length !== preguntas.length"
        class="d-flex justify-content-end mb-2"
      >
        <div class="form-check form-switch">
          <input
            id="switchCheckAudio"
            v-model="audioEnabled"
            class="form-check-input"
            type="checkbox"
          />
          <label class="form-check-label" for="switchCheckAudio">¿Audio?</label>
        </div>
      </div>
      <ActividadResultados
        v-if="respuestas.length === preguntas.length"
        :respuestas="respuestas"
        :mensaje-aprobado="cuestionario.mensaje_final_aprobado"
        :mensaje-reprobado="cuestionario.mensaje_final_reprobado"
        :porcentaje-aprobadas="porcentajeAprobadas"
        :preguntas-count="preguntas.length"
        :total-preguntas-base="cuestionario.preguntas.length"
        @reiniciar="onReiniciar"
      />
      <ActividadPregunta
        v-else
        :pregunta="preguntaSelected"
        :numero-pregunta="preguntaSelectedIdx + 1"
        @respuestaSelected="onRrespuestaSelected"
      />
    </div>
    <ActividadBarraAvance
      :pregunta-index="preguntaSelectedIdx"
      :preguntas-count="preguntas.length"
      :respuestas-length="respuestas.length"
      :continuar-disabled="continuarDisabled"
      :respuestas="respuestas"
      class="mx-4 mx-md-5"
      @continuar="onContinuar"
      @reiniciar="onReiniciar"
    />
  </div>
</template>

<script>
import screenChangeSound from '@/assets/actividad/audio/screen-change.mp3'
import successSound from '@/assets/actividad/audio/success.mp3'
import failSound from '@/assets/actividad/audio/fail.mp3'
import endGameSuccessSound from '@/assets/actividad/audio/end-game-success.mp3'
import endGameFailSound from '@/assets/actividad/audio/end-game-fail.mp3'
import ActividadPregunta from './ActividadPregunta'
import ActividadBarraAvance from './ActividadBarraAvance'
import ActividadResultados from './ActividadResultados'
export default {
  name: 'Actividad',
  components: {
    ActividadPregunta,
    ActividadBarraAvance,
    ActividadResultados,
  },
  props: {
    cuestionario: {
      type: Object,
      required: true,
    },
    mezclarRespuestas: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    intentos: 0,
    preguntaSelectedIdx: 0,
    respuestaActual: {},
    respuestas: [],
    continuarDisabled: true,
    audioEnabled: true,
    totalPreguntasOriginales: 0,
  }),
  computed: {
    preguntas() {
      const MAX_PREGUNTAS = 10
      const { preguntas } = this.cuestionario
      if (!preguntas) return []

      const preguntasBarajadas = this.shuffle(preguntas)

      const preguntasSeleccionadas =
        preguntasBarajadas.length >= MAX_PREGUNTAS
          ? preguntasBarajadas.slice(0, MAX_PREGUNTAS)
          : preguntasBarajadas

      console.log(
        'preguntasSeleccionadas',
        preguntasSeleccionadas,
        'preguntasBarajadas',
        preguntasBarajadas,
      )

      return preguntasSeleccionadas.map(pregunta => ({
        ...pregunta,
        opciones: pregunta.barajarRespuestas
          ? this.shuffle(pregunta.opciones)
          : pregunta.opciones,
        intentos: this.intentos,
      }))
    },
    preguntaSelected() {
      return this.preguntas[this.preguntaSelectedIdx]
    },
    porcentajeAprobadas() {
      if (this.respuestas.length === 0) return 0
      const aprobadas = this.respuestas.filter(r => r.esCorrecta).length
      return Math.round((aprobadas / this.respuestas.length) * 100)
    },
  },
  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
    /*shuffle(array) {
      let currentIndex = array.length
      let randomIndex
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ]
      }
      return array
    },*/
    onRrespuestaSelected(respuestaEsCorrecta) {
      this.continuarDisabled = false
      this.respuestaActual = {
        id: this.preguntaSelected.id,
        esCorrecta: respuestaEsCorrecta,
      }
      if (respuestaEsCorrecta) {
        this.reproducirSonido(successSound)
      } else {
        this.reproducirSonido(failSound)
      }
    },
    onContinuar() {
      this.continuarDisabled = true
      if (this.respuestaActual.id) {
        const idx = this.respuestas.findIndex(
          r => r.id === this.preguntaSelected.id,
        )
        if (idx === -1) {
          this.respuestas.push(this.respuestaActual)
        } else {
          this.respuestas[idx] = this.respuestaActual
        }
      }

      if (this.preguntaSelectedIdx < this.preguntas.length - 1) {
        this.preguntaSelectedIdx += 1
        this.reproducirSonido(screenChangeSound)
      } else {
        this.finalizarPrueba()
      }
    },
    onReiniciar() {
      this.preguntaSelectedIdx = 0
      this.respuestas = []
      this.respuestaActual = {}
      this.intentos += 1
      this.$emit('reiniciar')
    },
    reproducirSonido(audioSrc) {
      if (this.audioEnabled) {
        const audio = new Audio(audioSrc)
        audio.play()
      }
    },
    finalizarPrueba() {
      const totalPreguntas = this.preguntas.length
      const respuestasCorrectas = this.respuestas.filter(r => r.esCorrecta)
        .length
      const porcentajeAprobacion = (respuestasCorrectas / totalPreguntas) * 100

      if (porcentajeAprobacion >= 70) {
        this.reproducirSonido(endGameSuccessSound)
      } else {
        this.reproducirSonido(endGameFailSound)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.boton--disabled
  opacity: 0.5
  pointer-events: none

.tarjeta--lightest-gray
  border: 3px solid #dce4eb
</style>
