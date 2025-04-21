<template lang="pug">
.accesibilidad
  .accesibilidad__menu
    .accesibilidad__menu__header
      .accesibilidad__menu__item
        i(class="fas fa-universal-access")
        span.h5.mb-0 Accesibilidad
    .accesibilidad__menu__content
      .accesibilidad__menu__item(
        @click="contraste()"
      )
        i(class="fas fa-adjust")
        span Contraste
      .accesibilidad__menu__item(
        @click="aumentarLetra()"
      )
        img(src="@/assets/template/aumentar.svg")
        span Aumentar letra
      .accesibilidad__menu__item(
        @click="reducirLetra()"
      )
        img(src="@/assets/template/reducir.svg")
        span Reducir letra

</template>

<script>
export default {
  name: 'Accesibilidad',
  data: () => ({
    fontSize: 16,
  }),
  methods: {
    contraste() {
      const htmlElement = document.querySelector('html')
      const clase = 'html-constraste-activo'
      if (htmlElement.classList.contains(clase)) {
        htmlElement.classList.remove(clase)
      } else {
        htmlElement.classList.add(clase)
      }
    },
    aumentarLetra() {
      const bodyElement = document.querySelector('body')
      if (this.fontSize >= 22) return
      this.fontSize += 2
      bodyElement.style.fontSize = this.fontSize + 'px'
    },
    reducirLetra() {
      const bodyElement = document.querySelector('body')
      if (this.fontSize <= 16) return
      this.fontSize -= 2
      bodyElement.style.fontSize = this.fontSize + 'px'
    },
  },
}
</script>

<style lang="sass" scoped>
.accesibilidad
  position: fixed
  right: 0
  top: 50vh
  height: 50px
  background-color: #111E61
  border-top-left-radius: 15px
  border-bottom-left-radius: 15px
  transform: translateY(-50%) translateX(100%) translateX(-50px)
  overflow: hidden
  transition: transform 0.3s ease-in-out, height 0.3s ease-in-out
  &:hover
    transform: translateY(-50%) translateX(0)
    height: 12.75rem

  *
    color: $white
  &__menu
    &__header
    &__content
      .accesibilidad__menu__item
        cursor: pointer
        &:hover
          background-color: #273685
        &:last-child
          border: none
    &__item
      display: flex
      align-items: center
      padding: 10px
      border-bottom: 1px solid #273685
      line-height: 1em
      user-select: none
    i
      font-size: 30px
      font-style: normal
      margin-right: 10px
      line-height: 1em
    img
      width: 30px
      margin-right: 10px
</style>
