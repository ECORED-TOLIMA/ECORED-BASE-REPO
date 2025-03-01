<template lang="pug">
.tarjeta-audio
  .row.align-items-center
    .col
      .tarjeta-audio__texto.h5.fst-italic.mb-0(v-html="texto")
      .tarjeta-audio__input.mt-2(v-if="!noBarra")
        input(
          v-model="sliderVal",
          type="range", 
          max="100", 
          :style="{'background-size': `${sliderVal}% 100%`}",
          @input="onSliderMove"
        )
      .tarjeta-audio__tiempo.text-end.pt-1(v-if="tiempo")
        span {{currentTimeDisplay}}
        span {{audioDurationDisplay}}
    .col-auto.ps-0
      .audio.position-relative(@mouseover.once="$emit('audio-hover')")
        slot
        .spinner-border.spinner-border-sm(v-if="!audioCanPlay" role="status")
          span.visually-hidden Loading..
        button.audio__btn(v-else-if="state ==='pause'"  @click="play")
          img(src="@/assets/template/audio.svg")
        button.audio__btn(v-else @click="pause")
          img(src="@/assets/template/pause.svg")

</template>

<script>
import audioMixins from './audioMixins'
export default {
  name: 'TarjetaAudio',
  mixins: [audioMixins],
  props: {
    texto: {
      type: String,
      required: true,
    },
    noBarra: {
      type: Boolean,
      default: false,
    },
    tiempo: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    sliderVal: 0,
  }),
  watch: {
    currentTime() {
      this.sliderVal = (this.currentTime / this.audioDuration) * 100
    },
  },
  methods: {
    onSliderMove() {
      this.audioElement.currentTime =
        (this.sliderVal / 100) * this.audioDuration
    },
  },
}
</script>

<style lang="sass"></style>
