export default {
  data: () => ({
    mainId: Math.floor(Math.random() * 10 ** 10),
    selected: 0,
    elements: [],
    stateStr: '',
    rendered: false,
    firstSelection: true,
  }),
  watch: {
    menuState() {
      this.domUpdated()
    },
  },
  created() {
    window.addEventListener('resize', this.domUpdated)
  },
  mounted() {
    this.$nextTick(() => {
      this.crearElementos()
    })
  },
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
    navObj() {
      if (!this.elements.length || !this.secuencial) return {}
      const idsArr = this.elements.map(elm => elm.id)
      const idxOfSelected = idsArr.indexOf(this.selected)
      if (idxOfSelected < 0) return {}

      const navObj = {}
      if (idxOfSelected === 0) {
        navObj.next = idsArr[idxOfSelected + 1]
      } else if (idxOfSelected + 1 === idsArr.length) {
        navObj.back = idsArr[idxOfSelected - 1]
      } else {
        navObj.next = idsArr[idxOfSelected + 1]
        navObj.back = idsArr[idxOfSelected - 1]
      }
      return navObj
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.domUpdated)
  },
  updated() {
    this.$nextTick(() => {
      if (this.getStateStr() != this.stateStr) {
        this.crearElementos()
      }
    })
  },
  methods: {
    crearElementos() {
      if (!this.$slots.default) return []
      else if (!this.$slots.default.length) return []
      this.domUpdated()
      this.elements = this.$slots.default.map((elemento, index) => {
        const attributes =
          elemento.data && elemento.data.attrs ? elemento.data.attrs : []
        return {
          id: this.mainId + index + 1,
          elm: elemento.elm,
          ...attributes,
        }
      })
      if (this.firstSelection) {
        this.selected = this.selected > 0 ? this.selected : this.elements[0].id
      }
      this.stateStr = this.getStateStr()
    },
    getActiveHeight(id) {
      return this.$refs[id][0].scrollHeight + 'px'
    },
    getStateStr() {
      return this.$slots.default.map(elm => elm.elm.outerHTML).join('')
    },
    domUpdated() {
      this.rendered = false
      setTimeout(() => {
        this.rendered = true
      }, 100)
    },
  },
}
