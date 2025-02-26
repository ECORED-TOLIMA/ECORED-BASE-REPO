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
    audioDuration: 0,
    currentTime: 0,
    state: 'pause',
  }),
  computed: {
    currentTimeDisplay() {
      return this.getTimeFormated(this.currentTime)
    },
    audioDurationDisplay() {
      return this.getTimeFormated(this.audioDuration)
    },
  },
  mounted() {
    this.audioElement = this.createAudioElement()
    this.audioElement.oncanplay = () => {
      this.audioCanPlay = true
    }
    this.audioElement.onloadedmetadata = ({ target }) => {
      this.audioCanPlay = true
      this.audioDuration = target.duration
    }
    this.audioElement.onended = () => {
      this.audioElement.currentTime = 0
      this.state = 'pause'
    }
    this.audioElement.ontimeupdate = ({ target }) => {
      this.currentTime = target.currentTime
    }
  },
  beforeDestroy() {
    this.audioElement.remove()
  },
  methods: {
    getTimeFormated(time) {
      const totalSeconds = Math.floor(time)
      let minutes = Math.floor(totalSeconds / 60)
      let seconds = totalSeconds % 60
      minutes = minutes < 10 ? `0${minutes}` : minutes
      seconds = seconds < 10 ? `0${seconds}` : seconds
      return `${minutes}:${seconds}`
    },
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
