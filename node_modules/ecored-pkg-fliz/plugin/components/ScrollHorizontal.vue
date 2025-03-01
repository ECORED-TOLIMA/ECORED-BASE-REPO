<template lang="pug">
.horizontal-scroll__wrapper(ref="hContainer")
  .horizontal-scroll(
    :class="[{'horizontal-scroll--item-fw':itemFullWidth},{'row':row}]"
    :style="[{transform: `translate(${scrollVal}px,0px)`}]"
  )
    slot
</template>

<script>
export default {
  name: 'ScrollHorizontal',
  props: {
    selectedId: {
      type: String,
      default: '',
    },
    itemFullWidth: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scrollVal: 0,
      ids: [],
    }
  },
  watch: {
    selectedId(newVal) {
      if (newVal.length) {
        this.scroll()
      }
    },
  },
  mounted() {
    this.getCords()
    this.scroll()
    window.addEventListener('resize', this.scroll)
  },
  updated() {
    this.getCords()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.scroll)
  },
  methods: {
    scroll() {
      const selectedElementId = this.ids.find(
        item => item.id === this.selectedId,
      )?.id
      const selectedElement = document.getElementById(selectedElementId)
      if (
        !Object.keys(this.$slots.default).length ||
        !this.selectedId.length ||
        selectedElement === null
      )
        return
      const container = this.$refs.hContainer
      const scrollContentTotalWidth =
        selectedElement.offsetWidth * this.ids.length
      let newScrollVal = selectedElement.offsetLeft
      const elementsFitInContainer =
        container.offsetWidth / selectedElement.offsetWidth
      if (
        elementsFitInContainer > 1 &&
        scrollContentTotalWidth - newScrollVal < container.offsetWidth
      ) {
        newScrollVal = scrollContentTotalWidth - container.offsetWidth
      }
      this.scrollVal = this.ids.length === 1 ? 0 : -newScrollVal
    },
    getCords() {
      if (this.$slots.default) {
        this.ids = this.$slots.default.map(element => ({
          id: element.elm.id,
          key: element.key,
        }))
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.horizontal-scroll__wrapper
  overflow: hidden
.horizontal-scroll
  display: flex
  transition: transform 0.5s ease-in-out
  align-items: center
  flex-wrap: nowrap
  &:not(.row)
    width: 100%
  &--item-fw
    & ::v-deep > div
      flex-grow: 0
      flex-shrink: 0
      width: 100%
      margin: 0 !important
</style>
