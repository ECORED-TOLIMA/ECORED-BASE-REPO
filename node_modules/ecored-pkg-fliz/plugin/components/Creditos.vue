<template lang="pug">
  .curso-main-container.creditos-vista
    BannerInterno(icono="far fa-registered" titulo="Créditos")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .creditos.mb-4.mb-md-5
        .creditos__item(
          v-for="(creditoObj, index) of creditosData"
          :key="'credito-'+index"
          :class="index != creditosData.length -1 ? 'mb-4' : ''" 
        )
          .creditos__titulo {{creditoObj.titulo}}
          table
            tbody
              tr(
                v-for="(item, idx) of creditoObj.autores" 
                :key="'autor-'+idx"
              )
                td.text-bold(colspan='2' v-html="renderText(item.nombre)")
                td(colspan='2' v-html="renderText(item.cargo)")
                td(colspan='3' v-html="renderText(item.centro)")
      .row.mb-4.mb-md-5
        .col-md-6.mb-4.mb-md-0
          .tarjeta.credito.p-3.text-center.h-100
            img.d-inline-block(src="@/assets/template/creditos-img.svg" style="width: 70px")
            p(v-html="creditosAdicionales.imagenes")
        .col-md-6
          .tarjeta.credito.p-3.text-center.h-100
            img.d-inline-block(src="@/assets/template/creditos-cc.svg" style="width: 70px;")
            p.mb-0(v-html="creditosAdicionales.creativeCommons")
  
      Footer(all-round)
    
      
  
</template>
<script>
import plantillaMixins from './plantillaMixins'
export default {
  name: 'Creditos',
  mixins: [plantillaMixins],
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
