<template lang="pug">
.barra-avance(:class="[showBarra ? 'barra-avance--open' : 'barra-avance--close']")

  router-link.boton.barra-avance__boton--regresar(
    :class="[!controlLinks.back.name && 'barra-avance__boton--disable']"
    :to="{name: controlLinks.back.name, hash: controlLinks.back.hash ? `#${controlLinks.back.hash}` : ''}"
  )
    i.me-2(class="fas fa-angle-left")
    span Regresar
  
  //- .barra-avance__barra
  //-   .barra-avance__barra--blanca
  //-   .barra-avance__barra--amarilla

  router-link.boton(
    :class="[!controlLinks.next.name && 'barra-avance__boton--disable']"
    :to="{name: controlLinks.next.name, hash: controlLinks.next.hash ? `#${controlLinks.next.hash}` : ''}"
  )
    span.me-2 Continuar
    i(class="fas fa-angle-right")

</template>

<script>
export default {
  name: 'BarraAvance',
  data: () => ({
    cursoSelection: null,
    idSelecctionArr: [],
  }),
  computed: {
    menuData() {
      return this.$config.menuPrincipal.menu
    },
    showBarra() {
      const enIntro = this.$route.fullPath.includes('/introduccion')
      const enCurso = this.$route.fullPath.includes('/curso')
      const haveControls =
        (this.controlLinks.next && this.controlLinks.next.name) ||
        (this.controlLinks.back && this.controlLinks.back.name)
      return !this.menuOpen && (enIntro || enCurso) && haveControls
    },
    // controlLinks() {
    //   const menuObject = this.menuData.find(
    //     item => item.nombreRuta === this.$route.name,
    //   )
    //   if (this.$route.name === 'introduccion') {
    //     // SI ESTOY EN INTRODUCCION
    //     const tema1 = this.menuData.find(item => item.nombreRuta === 'tema1')
    //     return {
    //       next: {
    //         name: tema1.nombreRuta,
    //         hash: '',
    //       },
    //       back: {
    //         name: '',
    //         hash: '',
    //       },
    //     }
    //   } else if (!menuObject) {
    //     // SI NO ESTOY EN UN TEMA O SI NO HAY SUBTEMAS --ERROR FALLBACK
    //     return {
    //       next: {
    //         name: '',
    //         hash: '',
    //       },
    //       back: {
    //         name: '',
    //         hash: '',
    //       },
    //     }
    //   } else {
    //     // SI ESTOY EN UN TEMA

    //     let routeObj = {}
    //     const idxOfMenuItem = this.menuData
    //       .map(item => item.nombreRuta)
    //       .indexOf(this.$route.name)

    //     if (menuObject.subMenu) {
    //       // MENU ITEM TIENE SUBMENU
    //       const idxCurrentHash = menuObject.subMenu
    //         .map(item => item.hash)
    //         .indexOf(this.$route.hash.replace('#', ''))

    //       // back logic
    //       if (idxCurrentHash <= 0) {
    //         // SI NO HAY SELECCIONADO UN HASH O ESTA SELECCIONADO EL PRIMERO
    //         const backMenuItem = this.menuData[idxOfMenuItem - 1]

    //         const backIsTheme =
    //           backMenuItem && backMenuItem.nombreRuta.includes('tema')
    //         const backIsIntro =
    //           backMenuItem && backMenuItem.nombreRuta.includes('introduccion')

    //         if (backIsTheme || backIsIntro) {
    //           // si el anterior objeto es un tema o introduccion
    //           routeObj.back = {
    //             name: backMenuItem.nombreRuta,
    //             hash: '',
    //           }
    //         } else {
    //           // si el objeto anterior no es tema o introduccion
    //           routeObj.back = {
    //             name: '',
    //             hash: '',
    //           }
    //         }
    //       } else if (idxCurrentHash === menuObject.subMenu.length - 1) {
    //         // SI EL ULTIMO HASH ESTA SELECCIONADO
    //         const backHash = menuObject.subMenu[idxCurrentHash - 1].hash

    //         routeObj.back = {
    //           name: this.$route.name,
    //           hash: backHash,
    //         }
    //       } else {
    //         // SI ESTOY ENMEDIO DE LOS HASH
    //         routeObj.back = {
    //           name: this.$route.name,
    //           hash: menuObject.subMenu[idxCurrentHash - 1].hash,
    //         }
    //       }

    //       // Next Logic
    //       if (idxCurrentHash === menuObject.subMenu.length - 1) {
    //         // es el ultimo hash seleccionado
    //         const nextMenuItem = this.menuData[idxOfMenuItem + 1]

    //         const nextIsTheme =
    //           nextMenuItem && nextMenuItem.nombreRuta.includes('tema')

    //         if (nextIsTheme) {
    //           // el siguiente objeto del menu es tema
    //           routeObj.next = {
    //             name: nextMenuItem.nombreRuta,
    //             hash: '',
    //           }
    //         } else {
    //           // si es el ultimo tema
    //           routeObj.next = {
    //             name: '',
    //             hash: '',
    //           }
    //         }
    //       } else {
    //         // no estoy en el ultimo hash
    //         const nextSubMenuItem = menuObject.subMenu[idxCurrentHash + 1]
    //         const nextHash = nextSubMenuItem.hash
    //         routeObj.next = {
    //           name: this.$route.name,
    //           hash: nextHash,
    //         }
    //       }
    //     } else {
    //       // MENU ITEM NO TIENE SUBMENU

    //       // Back logic
    //       const backMenuItem = this.menuData[idxOfMenuItem - 1]

    //       const backIsTheme =
    //         backMenuItem && backMenuItem.nombreRuta.includes('tema')
    //       const backIsIntro =
    //         backMenuItem && backMenuItem.nombreRuta.includes('introduccion')

    //       if (backIsTheme || backIsIntro) {
    //         // si el anterior objeto es un tema o introduccion
    //         routeObj.back = {
    //           name: backMenuItem.nombreRuta,
    //           hash: '',
    //         }
    //       } else {
    //         // si el objeto anterior no es tema o introduccion
    //         routeObj.back = {
    //           name: '',
    //           hash: '',
    //         }
    //       }

    //       // Next logic
    //       const nextMenuItem = this.menuData[idxOfMenuItem + 1]

    //       const nextIsTheme =
    //         nextMenuItem && nextMenuItem.nombreRuta.includes('tema')

    //       if (nextIsTheme) {
    //         // el siguiente objeto del menu es tema
    //         routeObj.next = {
    //           name: nextMenuItem.nombreRuta,
    //           hash: '',
    //         }
    //       } else {
    //         // si es el ultimo tema
    //         routeObj.next = {
    //           name: '',
    //           hash: '',
    //         }
    //       }
    //     }
    //     return routeObj
    //   }
    // },
    controlLinks() {
      const menuObject = this.menuData.find(
        item => item.nombreRuta === this.$route.name,
      )
      if (this.$route.name === 'introduccion') {
        // SI ESTOY EN INTRODUCCION
        const tema1 = this.menuData.find(item => item.nombreRuta === 'tema1')
        return {
          next: {
            name: tema1.nombreRuta,
            hash: '',
          },
          back: {
            name: '',
            hash: '',
          },
        }
      } else if (!menuObject) {
        // SI NO ESTOY EN UN TEMA O SI NO HAY SUBTEMAS --ERROR FALLBACK
        return {
          next: {
            name: '',
            hash: '',
          },
          back: {
            name: '',
            hash: '',
          },
        }
      } else {
        let routeObj = {}
        const idxOfMenuItem = this.menuData
          .map(item => item.nombreRuta)
          .indexOf(this.$route.name)

        // Back logic
        const backMenuItem = this.menuData[idxOfMenuItem - 1]

        const backIsTheme =
          backMenuItem && backMenuItem.nombreRuta.includes('tema')
        const backIsIntro =
          backMenuItem && backMenuItem.nombreRuta.includes('introduccion')

        if (backIsTheme || backIsIntro) {
          // si el anterior objeto es un tema o introduccion
          routeObj.back = {
            name: backMenuItem.nombreRuta,
            hash: '',
          }
        } else {
          // si el objeto anterior no es tema o introduccion
          routeObj.back = {
            name: '',
            hash: '',
          }
        }

        // Next logic
        const nextMenuItem = this.menuData[idxOfMenuItem + 1]

        const nextIsTheme =
          nextMenuItem && nextMenuItem.nombreRuta.includes('tema')

        if (nextIsTheme) {
          // el siguiente objeto del menu es tema
          routeObj.next = {
            name: nextMenuItem.nombreRuta,
            hash: '',
          }
        } else {
          // si es el ultimo tema
          routeObj.next = {
            name: '',
            hash: '',
          }
        }
        return routeObj
      }
    },
    menuOpen() {
      return this.$store.getters.isMenuOpen
    },
  },
  // created() {
  //   document.addEventListener('scroll', this.trackIds)
  // },
  // mounted() {
  //   this.cursoSelection = document.querySelector('#curso')
  //   const subMenuSelected = this.menuData.find(
  //     item => item.nombreRuta === this.$route.name,
  //   ).subMenu
  //   this.idSelecctionArr = subMenuSelected
  //     ? subMenuSelected.map(item => document.querySelector(`#${item.hash}`))
  //     : []
  // },
  // methods: {
  //   trackIds() {
  //     if (!this.idSelecctionArr.length) return
  //     this.idSelecctionArr.forEach(item => {
  //       console.log(item.scrollTop)
  //     })
  //     const mao = document.querySelector('#t_1_5')
  //     console.log(this.cursoSelection.clientHeight)
  //     console.log(window.innerHeight, window.scrollY, mao.offsetTop)
  //   },
  // },
}
</script>

<style lang="sass">
.barra-avance
  display: flex
  align-items: center
  justify-content: space-between
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  padding: 10px
  background-color: $color-sistema-e
  transition: transform 0.5s ease-in-out
  z-index: 100000

  &__barra
    margin: 0 20px
    flex: 1
    position: relative
    max-width: 800px

    &--blanca, &--amarilla
      height: 4px

      &:before, &:after
        content: ''
        display: block
        width: 10px
        height: 10px
        border-radius: 50%
        position: absolute
        top: 50%

      &:before
        left: 0
        transform: translate(-50%,-50%)

      &:after
        right: 0
        transform: translate(50%,-50%)

    &--blanca
      background-color: $white
      &:before, &:after
        background-color: $white

    &--amarilla
      position: absolute
      width: 100%
      top: 0
      background-color: $color-acento-botones
      &:before, &:after
        background-color: $color-acento-botones

  &__boton
    &--regresar
      background-color: $color-sistema-c
      span
        color: $color-sistema-a !important
    &--disable
      opacity: 0
      pointer-events: none

  &--open
    transform: translateY(0)

  &--close
    transform: translateY(100%)
</style>
