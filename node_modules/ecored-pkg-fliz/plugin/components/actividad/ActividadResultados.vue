<template>
  <div class="row align-items-center justify-content-around">
    <div class="col-lg-5">
      <img
        v-if="aprobado"
        src="@/assets/componentes/cuestionario-resultado.svg"
        alt=""
        class="mx-auto d-none d-lg-block"
      />
      <img
        v-else
        src="@/assets/componentes/cuestionario-resultado.svg"
        alt=""
        class="mx-auto d-none d-lg-block"
      />
    </div>
    <div class="col-lg-4">
      <div class="d-flex align-items-center flex-column">
        <div class="circle-container mb-4">
          <svg class="circle" viewBox="0 0 36 36">
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#00FF00" />
                <stop offset="50%" stop-color="#FFFF00" />
                <stop offset="100%" stop-color="#FF0000" />
              </linearGradient>
            </defs>
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle-progress"
              :stroke-dasharray="`${currentPercentage}, 100`"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div class="percentage-text">
            {{ Math.round(porcentajeAprobadas) }}%
          </div>
        </div>

        <template v-if="aprobado">
          <h3>¡BUEN TRABAJO!</h3>
          <p class="mb-0 text-center">
            {{ mensajeAprobado }}
          </p>
        </template>
        <template v-else>
          <h3>VUELVE A INTENTARLO</h3>
          <p class="mb-0 text-center">
            {{ mensajeReprobado }}
          </p>
        </template>
        <hr class="w-100" />
        <p class="mb-0">Aciertos: {{ rtas.correctas }} / {{ rtas.total }}</p>
        <button
          v-if="totalPreguntasBase >= preguntasCount"
          class="boton btn-lg boton--b py-3 px-5 mt-3"
          @click="$emit('reiniciar')"
        >
          <span>Volver a intentarlo</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActividadResultados',
  props: {
    respuestas: {
      type: Array,
      required: true,
    },
    mensajeAprobado: {
      type: String,
      default: '¡Excelente! Ha superado la actividad.',
    },
    mensajeReprobado: {
      type: String,
      default:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    porcentajeAprobadas: {
      type: Number,
      required: true,
    },
    totalPreguntasBase: {
      type: Number,
      required: true,
    },
    preguntasCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentPercentage: 0,
    }
  },
  computed: {
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
    aprobado() {
      return this.rtas.porcentaje >= 70
    },
  },
  mounted() {
    this.animateProgress()
  },
  methods: {
    animateProgress() {
      const duration = 1500
      const start = performance.now()

      const animate = time => {
        const timeFraction = (time - start) / duration
        if (timeFraction > 1) {
          this.currentPercentage = this.porcentajeAprobadas
        } else {
          this.currentPercentage = timeFraction * this.porcentajeAprobadas
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    },
  },
}
</script>

<style lang="sass" scoped>


.resultados
  &__icono
    width: 150px
    height: 150px
    background-size: cover
    background-repeat: no-repeat
    &--correcto
      background-image: url('~@/assets/actividad/correcto.svg')
    &--incorrecto
      background-image: url('~@/assets/actividad/incorrecto.svg')
    @media (max-width: 560px)
      width: 80px
      height: 80px

.circle-container
  width: 150px
  height: 150px
  position: relative
  display: flex
  justify-content: center
  align-items: center

.circle
  transform: rotate(0deg)
  width: 100%
  height: 100%

.circle-bg
  fill: none
  stroke: #eee
  stroke-width: 3.8

.circle-progress
  fill: none
  stroke: url(#progressGradient)
  stroke-width: 3.8
  stroke-linecap: round
  transition: stroke-dasharray 0.1s

.percentage-text
  position: absolute
  font-size: 1.5rem
  font-weight: bold
  color: #666
</style>
