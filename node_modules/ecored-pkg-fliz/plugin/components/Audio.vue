<template lang="pug">
.audio.position-relative(@mouseover.once="$emit('audio-hover')")
  slot
  .spinner-border.spinner-border-sm(v-if="!audioCanPlay" role="status")
    span.visually-hidden Loading..
  button.audio__btn( v-else-if="state ==='pause'"  @click="play")
    img(src="@/assets/template/audio.svg")
  button.audio__btn(v-else @click="pause")
    img(src="@/assets/template/pause.svg")
</template>

<script>
import audioMixins from './audioMixins'
export default {
  name: 'Audio',
  mixins: [audioMixins],
}
</script>

<style lang="sass"></style>
