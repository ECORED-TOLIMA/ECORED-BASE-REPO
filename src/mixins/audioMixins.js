export default {
  props: {
    audio: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    audioElement: null,
    audioCanPlay: false,
    state: 'pause',
  }),
  computed: {
    audioDuration() {
      if (!this.audioElement) return
      const audioElBuff = this.audioElement.buffered
      return audioElBuff.end(audioElBuff.length - 1)
    },
  },
  mounted() {
    this.audioElement = this.createAudioElement()
    this.audioElement.oncanplay = () => {
      this.audioCanPlay = true
    }
    this.audioElement.onloadedmetadata = () => {
      this.audioCanPlay = true
    }
    this.audioElement.onended = () => {
      this.audioElement.currentTime = 0
      this.state = 'pause'
    }
  },
  beforeDestroy() {
    this.audioElement.remove()
  },
  methods: {
    createAudioElement() {
      const audioElement = document.createElement('audio')
      audioElement.setAttribute('preload', 'metadata')
      audioElement.setAttribute('src', this.audio)
      document.body.appendChild(audioElement)
      return audioElement
    },
    play() {
      this.state = 'play'
      this.audioElement.play()
    },
    pause() {
      this.state = 'pause'
      this.audioElement.pause()
    },
    stop() {
      this.state = 'pause'
      this.audioElement.pause()
      this.audioElement.currentTime = 0
    },
  },
}
