<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Titulo de primer nivel
        

      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Titulo item 1")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        div(titulo="Titulo item 2")
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen




      Separador

      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Titulo item 1")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row(titulo="Titulo item 2")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      Separador

      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

        .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
          .h5.mb-2 titulo
          p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="A")
          .h5.mb-2 titulo
          p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="B")
          .h5.mb-2 titulo
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      Separador

      ImagenInfograficaB.color-primario
        template(v-slot:imagen)
          figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        div(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
          h5 titulo
          p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
          p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
          p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        div(x="50%" y="50%" tooltip="tooltip de max 35 caracteres")
          h5.mb-2 titulo
          p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        div(x="70%" y="70%" tooltip="tooltip de max 35 caracteres")
          .h5.mb-2 titulo
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      Separador


      TarjetaAudio.color-primario.mb-3(
        texto="Texto de muestra  "
        :audio="require('../assets/componentes/audios/audio-ej.mp3')"
        @audio-hover="mostrarIndicadorTarjetaAudio = false"
      )
        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      TarjetaAudio.color-secundario.mb-3(
        texto="Texto de muestra <br> Texto de muestra "
        :audio="require('../assets/componentes/audios/audio-ej.mp3')"
      )

      Separador


      .tarjeta.tarjeta--azul.p-4
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      Separador

      .tarjeta.tarjeta--gris.p-4
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

          .row(titulo="")
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.


      Separador

      .tarjeta.tarjeta--gris.p-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="Titulo 1")
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen


          .row(titulo="Titulo 2")
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      Separador

      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center FIRST
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 2
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 3
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 4
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 5
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 6
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 7
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center LAST
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
            
      Separador

      LineaTiempoD.color-primario
        .row(numero="1" titulo="Praesent luctus")
          .col-md-6.mb-4.mb-md-0
            p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row(numero="2" titulo="Praesent luctus")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6.mb-4.mb-md-0
            p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.  

        .row(numero="3" titulo="Praesent luctus")
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6.mb-4.mb-md-0
            p.text-small This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion. 


      Separador

      TabsA.color-acento-botones
        .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 1")
          h4 PASO 1: The splendor
          p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
            strong user style sheets
            |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

        .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 2")
          h4 PASO 2: The splendor
          .row
            .col-xl-6.mb-4
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-xl-6
              p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
                strong user style sheets
                |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      Separador


      TabsC.color-primario
        .py-3.py-md-4(titulo="The splendor of the mystery")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Celebrate your failures 1
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
        .py-3.py-md-4(titulo="Don’t lie to yourself")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6
              h4 Celebrate your failures 2
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion. 


      Separador


      TabsB.color-primario
        .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Celebrate your failures 1
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
        .py-4.py-md-5(titulo="Don’t lie to yourself" :icono="require('@/assets/componentes/ej-04.svg')")
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen
            .col-md-6
              h4 Celebrate your failures 2
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      Separador



      LineaTiempoE.color-primario
        .row(titulo="2014 - Present" subtitulo="Title, Company")
          .col-lg-6.mb-4.mb-lg-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row(titulo="2014 - Present" subtitulo="Title, Company")
          .col-lg-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen      
          .col-lg-6.mb-4.mb-lg-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.


      Separador

      PasosA.color-primario.mb-5(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Lorem ipsum dolor sit amet.
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la Imagen
          .col-md-6
            h3 Nullam vulputate mauris eros, ut.
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Duis laoreet est non ligula.
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Duis laoreet est non ligula.
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen


      Separador

      p(data-aos="fade-left").mb-4 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

      .row
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

            h3.text-center Intuition important
            p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

            h3.text-center Intuition important
            p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

            h3.text-center Intuition important
            p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

        .col-sm-6.col-lg-3
          .tarjeta--boton.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

            h3.text-center Intuition important
            p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.


      Separador



      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
            
          h2.text-center Celebrate your<br>failures
          p To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. Think about all the possibilities. You’ve been placed in the crucial moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
        .col-md.tarjeta.color-acento-botones.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
            
          h2.text-center Sterility leads to<br>susceptibility
          p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.
        .col-md.tarjeta.color-acento-contenido.text-white.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')
            
          h2.text-center Sterility leads to<br>susceptibility
          p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.


      Separador

      .row
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, 
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/template/avatar.svg')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/template/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/template/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/template/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.


      Separador
      .row
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Ruta integral de atención en salud 
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-secundario.p-5
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Ruta integral de atención en salud 
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Ruta integral de atención en salud 
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.p-5
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Ruta integral de atención en salud 
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas  
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
