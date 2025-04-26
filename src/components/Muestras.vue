<template lang="pug">
  div.mb-5 
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Titulo_de_primer_nivel
        
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2 1.1  Título de segundo nivel, 24pt
    p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    h3.titulo-tercero(data-aos="fade-right") Título de tercer nivel, 20pt
    p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    h4.titulo-cuarto(data-aos="fade-right") Título de cuarto nivel, 18pt
    p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    .titulo-quinto.color-acento-contenido(data-aos="fade-right")
      h4 Título de quinto nivel, 18pt

    p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Título de sexto nivel, 16pt
      span subtitulo

    .row.justify-content-center.mb-4
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .h5 Fracionarios
        .fraccionario
          span.num Numerador
          span.div /
          span.den Denominador
      .col-lg-4.mb-lg-0.mb-4(data-aos="flip-up")
        .h5 Radicales
        .radical
          span.potencia 3 
          span &radic;
          span.radicand 8
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .h5 Potencias
        p x #[sup 3]


    Separador
    #parrafos.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Párrafos

    p.mb-0 Los párrafos mantienen un tamaño regular de 16 pt con interlineado base de 24 pt, sin embargo, existe excepciones para resaltar contenido donde se puede hacer uso de pesos 
      | #[span.text-thin THIN], 
      | #[strong BOLD], y #[span.text-black BLACK] 
      | o #[mark etiquetas] de color (según paleta del programa). Así mismo, el ancho de los cajones textos permite variación en las doce (12) columnas.

    Separador
    #listas.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Listas
    
    p.mb-3 Se debe tener en cuenta que las personas realizan un escaneo del mismo para encontrar elementos de su interés. Las listas deben estar compuestas por elementos relacionados entre sí, con un orden específico o un conteo importante. 
  
    ul.lista-ul.mb-3(data-aos="fade-right")
      li
        i.lista-ul__vineta
        | Texto
      li 
        i.lista-ul__vineta
        | Cita o Referencia
      li  
        i.lista-ul__vineta
        | Imagen + Texto

    .h5 Requerimientos de información:

    ul.lista-ul.mb-5(data-aos="fade-right")
      li 
        i.lista-ul__vineta
        | Título conciso y claro.
      li 
        i.lista-ul__vineta
        | Si el texto del item es largo, la extensión máxima será de cuatro líneas en word tamaño carta. 
      li 
        i.lista-ul__vineta
        | Enfatizar ciertos puntos diferenciándolos del resto del texto.
      li 
        i.lista-ul__vineta
        | Cuando desee comunicar un procedimiento paso por paso y cuando el orden de los elementos sea necesario.

    h3 Listado ordenado
    .row.mb-5
      .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
        h4 Listado ordenado básico
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Item lista ordenada 1 
            i Texto en Italica
          li 
            span.text-bold 2. 
            | Item lista ordenada 2
          li 
            span.text-bold 3. 
            | Item lista ordenada 3
          li 
            span.text-bold 4. 
            | Item lista ordenada 4
          li 
            span.text-bold 5. 
            | Item lista ordenada 5
      .col-lg.mb-lg-0.mb-5(data-aos="flip-up")
        h4 Listado ordenado básico
        ol.lista-ol
          li 
            span.text-bold a. 
            | Item lista ordenada a 
            i Texto en Italica
          li 
            span.text-bold b. 
            | Item lista ordenada b
          li 
            span.text-bold c. 
            | Item lista ordenada c
          li 
            span.text-bold d. 
            | Item lista ordenada d
          li 
            span.text-bold e. 
            | Item lista ordenada e
      .col-lg(data-aos="fade-left")
        h4 Listado ordenado básico + separadores
        ol.lista-ol.lista-ol--separador
          li 
            span.text-bold a. 
            | Item lista ordenada a 
            i Texto en Italica
          li 
            span.text-bold b. 
            | Item lista ordenada b
          li 
            span.text-bold c. 
            | Item lista ordenada c
          li 
            span.text-bold d. 
            | Item lista ordenada d
          li 
            span.text-bold e. 
            | Item lista ordenada e

    .row.mb-5
      .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
        h4 Listado ordenado cuadro color
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Item lista ordenada 1 
            i Texto en Italica
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Item lista ordenada 2
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Item lista ordenada 3
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Item lista ordenada 4
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Item lista ordenada 5
      .col-lg.mb-lg-0.mb-4(data-aos="flip-up")
        h4 Listado ordenado cuadro color
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Item lista ordenada a
          li 
            .lista-ol--cuadro__vineta
              span b
            | Item lista ordenada b
          li 
            .lista-ol--cuadro__vineta
              span c
            | Item lista ordenada c
          li 
            .lista-ol--cuadro__vineta
              span d
            | Item lista ordenada d
          li 
            .lista-ol--cuadro__vineta
              span e
            | Item lista ordenada e
      .col-lg.mb-lg-0.mb-4(data-aos="fade-left")
        h4 Listado ordenado cuadro color + separadores
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span a
            | Item lista ordenada a
          li 
            .lista-ol--cuadro__vineta
              span b
            | Item lista ordenada b
          li 
            .lista-ol--cuadro__vineta
              span c
            | Item lista ordenada c
          li 
            .lista-ol--cuadro__vineta
              span d
            | Item lista ordenada d
          li 
            .lista-ol--cuadro__vineta
              span e
            | Item lista ordenada e

    h3 Listado no ordenado

    .row.mb-5
      .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
        h4 Listado no ordenado básico
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Item lista no ordenada
          li
            ul
              li 
                i.lista-ul__vineta
                | Item lista no ordenada
              li 
                i.lista-ul__vineta
                | Item lista no ordenada
          li 
            i.lista-ul__vineta
            | Item lista no ordenada
          li 
            i.lista-ul__vineta
            | Item lista no ordenada
      .col-lg.mb-lg-0.mb-4(data-aos="flip-up")
        h4 Listado no ordenado básico
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Item lista no ordenada
          li
            ul
              li 
                i.fas.fa-angle-right
                | Item lista no ordenada
              li 
                i.fas.fa-angle-right
                | Item lista no ordenada 
                i Texto en Italica
          li 
            i.fas.fa-angle-right
            | Item lista no ordenada
          li 
            i.fas.fa-angle-right
            | Item lista no ordenada 
            i Texto en Italica
      .col-lg(data-aos="fade-left")
        h4 Listado no ordenado básico + separadores
        ul.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Item lista no ordenada
          li.pb-0
            ul
              li 
                i.fas.fa-angle-right
                | Item lista no ordenada
              li 
                i.fas.fa-angle-right
                | Item lista no ordenada
          li 
            i.fas.fa-angle-right
            | Item lista no ordenada
          li 
            i.fas.fa-angle-right
            | Item lista no ordenada

    .row
      .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
        h4 Listado no ordenado color
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Item lista no ordenada 
            i Texto en Italica
          li
            ul
              li 
                i.lista-ul__vineta
                | Item lista no ordenada
              li 
                i.lista-ul__vineta
                | Item lista no ordenada
          li 
            i.lista-ul__vineta
            | Item lista no ordenada
          li 
            i.lista-ul__vineta
            | Item lista no ordenada
      .col-lg.mb-lg-0.mb-4(data-aos="flip-up")
        h4 Listado no ordenado color
        ul.lista-ul--color
          li 
            i.fas.fa-brain
            | Item lista no ordenada 
            i Texto en Italica
          li
            ul
              li 
                i.fas.fa-bug
                | Item lista no ordenada
              li 
                i.fas.fa-car-side
                | Item lista no ordenada
          li 
            i.fas.fa-compass
            | Item lista no ordenada
          li 
            i.fas.fa-eye
            | Item lista no ordenada
      .col-lg(data-aos="fade-left")
        h4 Listado no ordenado color + separadores
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Item lista no ordenada 
            i Texto en Italica
          li.pb-0
            ul
              li 
                i.fas.fa-cookie
                | Item lista no ordenada 
                b texto bold
              li 
                i.fas.fa-hat-wizard
                | Item lista no ordenada
          li 
            i.fas.fa-hippo
            | Item lista no ordenada
          li 
            i.fas.fa-kiwi-bird
            | Item lista no ordenada

    #tablas.titulo-segundo.color-acento-botones
      h2 Tablas

    .h5 Requerimientos de información

    ul.lista-ul.mb-5(data-aos="fade-right")
      li 
        i.lista-ul__vineta
        | Se requiere que la información contenida dentro de las tablas propuestas en los materiales, se encuentre digitalizada únicamente en formato excel. 

    //- .tabla-a debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-sexto.color-secundario(data-aos="fade-right")
      h5 Tabla A.
      i Titulo_tabla
    .tabla-a.color-acento-botones.mb-5 
      table(data-aos="zoom-in" alt="Texto alternativo tabla")
        caption Nota. <span style="font-weight: 400">Tomado referencia.</span>
        thead
          tr(data-aos="fade-right")
            th Encabezado 1
            th Encabezado 2
            th Encabezado 3
            th Encabezado 4
            th Encabezado 5
        tbody
          tr(data-aos="fade-right")
            td Celda 1
            td Celda 2
            td Celda 3
            td Celda 4
            td Celda 5
          tr(data-aos="fade-right")
            td Celda 1
            td Celda 2
            td Celda 3
            td Celda 4
            td Celda 5
          tr(data-aos="fade-right")
            td Celda 1
            td Celda 2
            td Celda 3
            td Celda 4
            td Celda 5

    //- .tabla-a debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .titulo-sexto.color-secundario(data-aos="fade-right")
      h5 Tabla B.
      i Titulo_tabla
    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        h4.mb-0 Niveles del lenguaje
      table(data-aos="zoom-in" alt="Texto alternativo tabla")
        caption Nota. <span style="font-weight: 400">Tomado referencia.</span>
        tr(data-aos="fade-right")
          th Vulgar
          td Get back to work. Learn from criticism. Creativity is a work-ethic. Design as if your life depended on it. Keep going. It isn’t what you are.
        tr(data-aos="fade-right")
          th Coloquial
          td It isn’t what you are, but what you’re going to become. Don’t censor yourself.  Sterility leads to susceptibility.It is, in effect, conditioned to prefer bad design.
        tr(data-aos="fade-right")
          th Convencional o estándar
          td Paul Rand once said, “The public is more familiar with bad design than good design. leassuring. You are not your work. Don’t fucking lie to yourself. Life depended on it. Keep going
        tr(data-aos="fade-right")
          th Técnico
          td The new becomes threatening, the old reassuring.” You are not your work. Don’t lie to yourself. Never, never assume that what Respect your craft. Widows and orphans are terrible.
        tr(data-aos="fade-right")
          th Formal
          td Design as if your life depended on it. Keep going. It isn’t what you are, but what you’re going to become. Don’t censor yourself. 

    .titulo-sexto.color-secundario(data-aos="fade-right")
      h5 Tabla C.
      i Titulo_tabla
    .tabla-c.mb-5
      table(data-aos="zoom-in" alt="Texto alternativo tabla")
        caption Nota. <span style="font-weight: 400">Tomado referencia.</span>
        tr(data-aos="fade-right")
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33
        tr(data-aos="fade-right")
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33
        tr(data-aos="fade-right")
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33
        tr(data-aos="fade-right")
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33
        tr(data-aos="fade-right")
          th 03 de marzo
          td 
            p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
          td
            .h6.mb-0 $12.500.200
          td
            .h6.mb-0 $12.500.200
            span.text-small Textos pequeños
          td
            .h6 FDSD33

    //- Formato Figura
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          i EstructuraX
        figure(data-aos="zoom-in")
          img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
          figcaption Nota. <span style="font-weight: 400">Tomado referencia.</span>

    #imagen_infografica.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Imagen Infográfica

    h3 Imagen Infográfica A

    ImagenInfografica.color-secundario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
        .h5.mb-2 titulo
        p.mb-0 Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
      .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="A")
        .h5.mb-2 titulo
        p.mb-0 Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
      .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="B")
        .h5.mb-2 titulo
        p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

    h3 Imagen Infográfica B

    ImagenInfograficaB.color-primario.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
      div(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
        h5 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p.mb-0 Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
      div(x="50%" y="50%" tooltip="tooltip de max 35 caracteres")
        .h5.mb-2 titulo
        p.mb-0 Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
      div(x="70%" y="70%" tooltip="tooltip de max 35 caracteres")
        .h5.mb-2 titulo
        p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

    #video.titulo-segundo.color-acento-botones
      h2 Video

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    
    h3.titulo-tercero Cajón texto color
    //- .cajon debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4(data-aos="fade-right")
        .cajon.color-primario.p-4
          .h5 Cajón texto color
          p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
      .col-lg-8.mb-4(data-aos="fade-left")
        .cajon.color-secundario.p-4
          .h5 Cajón texto color
          p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
      .col-lg-8.mb-4(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4
          .h5 Cajón texto color
          p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
      .col-lg-4.mb-4(data-aos="fade-left")
        .cajon.color-acento-botones.p-4
          .h5 Cajón texto color
          p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.

    //- .cajon-b debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- .arriba-derecha, .abajo-derecha, .abajo-izquierda (arriba-izquierda esta por defecto)
    .cajon-b.color-primario.p-3.mb-5(data-aos="fade-right")
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel porta justo. Praesent congue nibh a justo ornare, eget vulputate nisl eleifend. Cras interdum finibus lacinia. Fusce dignissim sapien sit amet orci imperdiet, pharetra maximus nisi ullamcorper. Aliquam interdum elit ac nisi viverra, ultrices finibus est ultricies. Fusce tincidunt velit nulla. Aliquam eleifend libero eu neque rhoncus, sed placerat mi ornare.
      p.mb-0 Proin dignissim nisl ac iaculis molestie. Fusce et orci arcu. Cras ac ultricies nisl. Praesent posuere tempor felis in pharetra. Curabitur vestibulum, mi sed placerat accumsan, est nulla sagittis mi, non faucibus tortor ex ac lacus. Nunc condimentum dolor sem, et pulvinar sapien cursus ut. Aenean consequat pharetra rutrum. Nunc vel nunc laoreet, ornare augue a, efficitur quam.

    h3.titulo-tercero Cajón texto color A
    //- .bloque-texto-a debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.justify-content-between.align-items-center.m-0
        .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
          h2.mb-0 Whatever can be captured in words can be conquered with understanding. 
        .col-lg-8(data-aos="fade-left")
          .bloque-texto-a__texto.p-4
            p Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
            p.mb-0 Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        h3.titulo-tercero Cajón texto color B
        //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Can we all just agree as the greater design community to stop talking about Comic Sans altogether?
            i.fas.fa-quote-right
      .col-lg-6(data-aos="fade-left")
        h3.titulo-tercero Cajón texto color C
        //- .bloque-texto-c debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          h2.mb-2 Then you’ll prove to yourself that you can survive anything.
          span - The graphic designer

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        h3.titulo-tercero Cajón texto color D
        //- .bloque-texto-d debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 The graphic designer
            .h6.mb-0 Lorem ipsum dolor sit amet
      .col-lg-6(data-aos="fade-left")
        h3.titulo-tercero Cajón texto color E
        //- .bloque-texto-e debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-e.color-secundario.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            h2.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada.
            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                .h5.mb-0 The graphic designer
                .h6.mb-0 Lorem ipsum dolor sit amet
            .col-4
              img(src='@/assets/template/img-placeholder-1-1.svg', alt="Imagen decorativa")

    h3.titulo-tercero Cajón texto color F
    //- .bloque-texto-f debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .bloque-texto-f.color-secundario.pt-4.px-5.mb-5(data-aos="fade-right")
      .bloque-texto-f__comillas
        i.fas.fa-quote-left
        i.fas.fa-quote-right
      h4.text-regular.bloque-texto-f__texto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
      .bloque-texto-f__autor.mb-3
        h3.mb-0 The graphic designer
      .bloque-texto-f__avatar
        .bloque-texto-f__avatar__img
          img(src='@/assets/template/img-placeholder-1-1.svg', alt="Imagen decorativa")

    h3.titulo-tercero Cajón texto color G
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/img.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
          br
          br
          | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/img.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
          br
          br
          | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 

    .tarjeta.tarjeta--azul.p-4.mb-5
      h4.titulo-cuarto Tipo A
      SlyderA(data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
            img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
          .col-lg-6(data-aos="fade-left")
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        div
          figure
            img.w-75(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen

    .tarjeta.tarjeta--azul.p-4.mb-5
      h4.titulo-cuarto Tipo B
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
            img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
          .col-lg-6(data-aos="fade-left")
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        div
          figure
            img.w-75(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen

    h3 Slyder F

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
        h2.text-center FIRST
        p.text-center.mb-0 moment. Abandon the shelter  asdf asdf asdf asdf asdfasdf asaasdfa sdf asdfsadf asd fasd dsf sdf asdfa sdfasdf asd of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
        h2.text-center 2
        p.text-center.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
        h2.text-center 3
        p.text-center.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
        h2.text-center 4
        p.text-center.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
        h2.text-center LAST
        p.text-center.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    h3 Slider Bootstrap
    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel' data-aos="zoom-in")
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
      .carousel-inner
        .carousel-item.active
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        .carousel-item
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        .carousel-item
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
      .row.justify-content-center(titulo="Titulo item 1")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
      div(titulo="Titulo item 2")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen

    h3 Acordion A tipo B
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
      .row.justify-content-center(titulo="Titulo item 1")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
      div(titulo="Titulo item 2")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen

    Separador
    #tabs.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Pestañas o Tabs

    p.mb-3 Es un elemento web que permite cambiar rápidamente el contenido que el usuario está consumiendo sin cambiar de ventana o desplazarse verticalmente por el sitio web. 

    .h5 Requerimientos de información

    ul.lista-ul.mb-5
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Los títulos que actuará como botón que sea una palabra o frases muy cortas.
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | La cantidad máxima es de 5 items.
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Se sugiere que la cantidad de texto sea igual o menor a 12 líneas de word tamaño carta. 
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Se sugiere el uso de texto acompañado de imágenes que refuercen el contenido a representar. 
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Se recomienda utilizar este componente para evidenciar procesos o temas generales compuesto de varias etapas.
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | No se debe utilizar para representar grandes cantidades de texto o contenido.
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | No se debe utilizar dentro de la pestaña o tab vídeos.

    h3 Pestañas A
    //- TabsA debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    TabsA.color-acento-botones.mb-5(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 1")
        h4 PASO 1: The splendor
        p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
          strong user style sheets
          |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
        p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 2")
        h4 PASO 2: The splendor
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
          .col-lg-6
            p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
              strong user style sheets
              |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 3")
        h4 PASO 3: The splendor
        p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
          strong user style sheets
          |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
        p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 4")
        h4 PASO 4: The splendor
        p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
          strong user style sheets
          |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
        p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 5")
        h4 PASO 5: The splendor
        p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
          strong user style sheets
          |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
        p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 6")
        h4 PASO 6: The splendor
        p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
          strong user style sheets
          |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
        p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
    h3 Pestañas B
    //- TabsB debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    TabsB.color-acento-contenido.mb-5(data-aos="zoom-out")
      .py-4.py-lg-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            h4 Celebrate your failures 1
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
      .py-4.py-lg-5(titulo="Don’t lie to yourself" :icono="require('@/assets/componentes/ej-04.svg')")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
          .col-lg-6
            h4 Celebrate your failures 2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .py-4.py-lg-5(titulo="Don’t quit" :icono="require('@/assets/componentes/ej-04.svg')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            h4 Celebrate your failures 3
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
      .py-4.py-lg-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
          .col-lg-6
            h4 Celebrate your failures 4
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .py-4.py-lg-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            h4 Celebrate your failures 5
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen 
      .py-4.py-lg-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
          .col-lg-6
            h4 Celebrate your failures 6
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

    h3 Pestañas C
    //- TabsC debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    TabsC.color-primario.mb-5(data-aos="zoom-out")
      .py-3.py-md-4(titulo="The splendor of the mystery")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Celebrate your failures 1
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
      .py-3.py-md-4(titulo="Don’t lie to yourself")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
          .col-lg-6
            h4 Celebrate your failures 2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .py-3.py-md-4(titulo="The splendor of the mystery")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Celebrate your failures 3
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
      .py-3.py-md-4(titulo="Don’t lie to yourself")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
          .col-lg-6
            h4 Celebrate your failures 4
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .py-3.py-md-4(titulo="The splendor of the mystery")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4 Celebrate your failures 5
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
      .py-3.py-md-4(titulo="Don’t lie to yourself")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
          .col-lg-6
            h4 Celebrate your failures 6
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

    h3 Linea Tiempo C
    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="1761")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        .row.justify-content-center(titulo="1798")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion. 
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        .row.justify-content-center(titulo="1887")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        div(titulo="1889")
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        .row.justify-content-center(titulo="1899")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        div(titulo="1901")
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        div(titulo="1930")
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        div(titulo="1987")
          figure
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen

    h3 Linea Tiempo D
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Praesent luctus") Lorem ipsum dolor sit amet, consectetur adipiscvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.     
          p.text-small(numero="2" titulo="Praesent luctus") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
          p.text-small(numero="3" titulo="Praesent luctus") Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
          p.text-small(numero="4" titulo="Praesent luctus") quam cursus in. Donec feugiat volutpat metus at pulvinar.
      .col-lg-6(data-aos="fade-left")
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Praesent luctus")
            .col-lg-6.order-lg-1.order-2
              p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
              figcaption Leyenda de la imagen
          .row.justify-content-center(numero="2" titulo="Praesent luctus")
            .col-lg-6.col-10.mb-4
              img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
              figcaption Leyenda de la imagen
            .col-lg-6
              p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .row.justify-content-center(numero="3" titulo="Praesent luctus")
            .col-lg-6.order-lg-1.order-2
              p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
              figcaption Leyenda de la imagen

    //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    LineaTiempoD.color-acento-contenido.mb-5(data-aos="zoom-out")
      .row.justify-content-center(numero="1" titulo="Praesent luctus")
        .col-lg-6.order-lg-1.order-2
          p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
      .row.justify-content-center(numero="2" titulo="Praesent luctus")
        .col-lg-6.mb-lg-0.mb-4
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
        .col-lg-6
          p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row.justify-content-center(numero="3" titulo="Praesent luctus")
        .col-lg-6.order-lg-1.order-2
          p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen

    h3 Linea Tiempo E

    //- LineaTiempoE debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    LineaTiempoE.color-acento-contenido(data-aos="zoom-out")
      .row.justify-content-center(titulo="2014 - Present" subtitulo="Title, Company")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
      div(titulo="1014 - Past" subtitulo="Title, Company")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
      .row.justify-content-center(titulo="2034 - Future" subtitulo="Title, Company")
        .col-lg-6.order-lg-1.order-2
          p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
    
    h3 Cronologia
    .cronologia.mb-5
      .contenedor
        .tarjeta-evento.tarjeta-evento--paso1(data-aos="fade-left")
          .tarjeta-titulo
            .cajon-numero
              span 01
            h2.p-2.text-white Subtitle
          .tarjeta-cuerpo.p-4
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
            figure
              img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
              figcaption Leyenda de la imagen 
        .tarjeta-evento.tarjeta-evento--paso2(data-aos="fade-right")
          .tarjeta-titulo
            .cajon-numero
              span 02
            h2 Subtitle
          .tarjeta-cuerpo
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
        .tarjeta-evento.tarjeta-evento--paso3(data-aos="fade-left")
          .tarjeta-titulo
            .cajon-numero
              span 03
            h2 Subtitle
          .tarjeta-cuerpo
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
        .tarjeta-evento.tarjeta-evento--paso4(data-aos="fade-right")
          .tarjeta-titulo
            .cajon-numero
              span 04
            h2 Subtitle
          .tarjeta-cuerpo
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
        .tarjeta-evento.tarjeta-evento--paso5(data-aos="fade-left")
          .tarjeta-titulo
            .cajon-numero
              span 05
            h2 Subtitle
          .tarjeta-cuerpo
            p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis

    Separador
    #pasos.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Pasos

    h3 Pasos A tipo n
    //- PasosA debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    PasosA.color-primario.mb-5(tipo="n")
      .row.justify-content-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Lorem ipsum dolor sit amet.
          p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la Imagen
        .col-lg-8(data-aos="fade-left")
          h3 Nullam vulputate mauris eros, ut.
          p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row.justify-content-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Lorem ipsum dolor sit amet.
          p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la Imagen
        .col-lg-8(data-aos="fade-left")
          h3 Nullam vulputate mauris eros, ut.
          p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

    h3 Pasos A tipo l
    //- PasosA debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    PasosA.color-acento-botones.mb-5(tipo="l")
      div(data-aos="fade-left")
        h3 Lorem ipsum dolor sit amet.
        p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id risus eu tortor vulputate luctus. Fusce ligula tortor, euismod vel scelerisque nec, dapibus sit amet enim. Mauris aliquet tempor neque non faucibus. Etiam ex urna, viverra ut velit maximus, malesuada tincidunt lectus. Aliquam tincidunt ipsum turpis, at lacinia purus ultricies eget. Curabitur at fringilla elit. Mauris id rhoncus sapien. Integer mollis ante enim, at congue enim suscipit et. Aliquam erat volutpat. Maecenas dolor ex, laoreet sed egestas pellentesque, molestie vitae mauris. Quisque cursus eros eget odio consequat egestas.
      div(data-aos="fade-right")
        h3 Nullam vulputate mauris eros, ut.
        p.mb-0 Duis non elit arcu. In luctus placerat dapibus. Praesent auctor nunc vitae iaculis iaculis. Aenean efficitur lectus in elit ullamcorper porttitor. Phasellus sit amet scelerisque magna, eget rhoncus urna. Integer mollis faucibus hendrerit. Nullam blandit vel tortor vel elementum.
      div(data-aos="fade-left")
        h3 Duis laoreet est non ligula.
        p.mb-0 Nulla lobortis orci quis posuere fringilla. Mauris sit amet ligula et tortor euismod mollis laoreet sit amet nisl. Sed ac suscipit sapien. Aliquam commodo magna quis nisl porttitor pulvinar. Donec efficitur sapien pulvinar, dictum tortor ac, pellentesque felis. Sed in nunc quis enim mattis sodales. Suspendisse sodales sem mauris, nec vehicula felis rhoncus in.
      div(data-aos="fade-right")
        h3 Lorem ipsum dolor sit amet.
        p.mb-0 Aliquam ornare sem in mauris lobortis accumsan. Suspendisse sollicitudin tellus eget bibendum cursus. Praesent tincidunt cursus mattis. Fusce nec convallis mauris, eu tincidunt neque. Proin justo orci, fermentum vel est vel, ornare sodales dui. Etiam consequat commodo tincidunt. Maecenas imperdiet ante eu mauris imperdiet, Phasellus pretium tortor quis varius sagittis. Suspendisse eu posuere enim, sed lacinia justo. Praesent eget tempor erat, a pretium ante. Nulla facilisi.

    h3 Pasos B
    .tarjeta.tarjeta--gris.p-4
      //- PasosB debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      PasosB.color-acento-contenido(data-aos="zoom-in")
        .row.justify-content-center(titulo="Palabra")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        .row.justify-content-center(titulo="I think it needs to be")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        .row.justify-content-center(titulo="I have selected those elements")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        div(titulo="Etiam eu mauris sit amet")
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
        .row.justify-content-center(titulo="Praesent luctus")
          .col-lg-6.order-lg-1.order-2
            p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.      
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
            figcaption Leyenda de la imagen
        div(titulo="arcu porta, vel finibus eros posuere")
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
        div(titulo="Praesent")
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen
        div(titulo="Sed vehicula velit vel arcu porta,")
          img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
          figcaption Leyenda de la imagen

    Separador
    #llamados_accion.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 Llamados a la acción

    p.mb-2 Es un bloque de texto que destaca por su composición y diseño. Su principal función es incentivar al usuario a realizar una acción a través de un botón o hipervínculo, en este caso, con el fin de poder acceder a recursos como infografías, videos, documentos y sitios web externos e independientes del componente formativo.

    ul.lista-ul.mb-3
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Abrir PDF
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Infografías
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Documentos
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Videos externos 
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Enlaces

    .h5 Requerimientos de información:

    ul.lista-ul.mb-5
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Título llamativo, claro y conciso. 
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | La redacción de los textos deben crear la necesidad de consultar el contenido sugerido (anexos).
      li(data-aos="fade-right") 
        i.lista-ul__vineta
        | Se sugiere un párrafo de acompañamiento que no sobrepase las 3 líneas de texto en su extensión, cuya característica principal sea incentivar al aprendiz a consultar el recurso propuesto.

    .h5 Ejemplo: Llamado a la acción 1 Acción de infografías

    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-acento-botones.p-4.p-md-5.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/componentes/ej-01.png")
        .col-md.col-lg-6
          h3 Título del recurso
          p.mb-4 There is no right answer. The splendor of the mystery is that you don’t understand. Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original. Why are you reading all of this?  
          a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .h5 Ejemplo: Llamado a la acción 2 Recursos externos
    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-primario.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/ej-02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0.mb-4
              h3.mb-1 Título del recurso
              p.text-small Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias  
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- estas clases tambien tienen un modificador --borde
    .tarjeta.color-acento-botones.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/ej-02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col-mb-sm-0.mb-4
              h3.mb-1 Título del recurso
              p.text-small Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias 
            .col-sm-auto
              a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .h5 Ejemplo: Llamado a la acción 3 Recursos externos versión simplificada
    .row.justify-content-center.mb-5
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias   
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        a.anexo.mb-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-ppt.svg")
          .anexo__texto
            p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
        a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-xml.svg")
          .anexo__texto
            p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias

      Separador
      #tarjetas.titulo-segundo.color-acento-botones(data-aos="fade-right")
        h2 Tarjetas

      p.mb-3 Es la agrupación de contenidos (texto e imágenes) en forma de tarjeta, que tiene como propósito, uno, ser más amigable el consumo de la información y dos, destacar información o conceptos relevantes.

      .h5 Requerimientos de información:

      ul.lista-ul.mb-5
        li(data-aos="fade-right") 
          i.lista-ul__vineta
          | Título corto y claro.
        li(data-aos="fade-right") 
          i.lista-ul__vineta
          | Información precisa, que reporten conceptos o definiciones.
        li(data-aos="fade-right") 
          i.lista-ul__vineta
          | Se sugiere una cantidad de texto igual o menor a 4 líneas de word tamaño carta.
    
    h3 tarjeta de deslizamiento arriba abajo
    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
          .tarjetas-up__card.BG03.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Desempeño financiero
            p.text-center.mb-0 Analiza la rentabilidad del proyecto mediante indicadores como ingresos totales, costos operativos, margen de ganancia y retorno sobre la inversión (ROI).
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
          .tarjetas-up__card.BG03.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Experiencia del cliente
            p.text-center.mb-0 Mide la satisfacción del visitante a través de encuestas, opiniones en redes sociales, tasa de retención y el Net Promoter Score (NPS), que indica la probabilidad de recomendación.

      h3 Tarjetas botones
      .row.mb-5
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-03.svg', alt="Imagen decorativa")
            h3.text-center Intuition important
            p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-03.svg', alt="Imagen decorativa")

            h3.text-center Intuition important
            p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-03.svg', alt="Imagen decorativa")

            h3.text-center Intuition important
            p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

        .col-sm-6.col-lg-3
          //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta--boton.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/componentes/ej-03.svg', alt="Imagen decorativa")

            h3.text-center Intuition important
            p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.


      h3 Tarjetas conectadas
      .tarjeta--container.row.mb-5
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt="Imagen decorativa")
            
          h2.text-center Celebrate your<br>failures
          p To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. Think about all the possibilities. You’ve been placed in the crucial moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .col-md.tarjeta.color-acento-botones.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt="Imagen decorativa")
            
          h2.text-center Sterility leads to<br>susceptibility
          p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.

        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .col-md.tarjeta.color-acento-contenido.text-white.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/componentes/ej-05.svg', alt="Imagen decorativa")
            
          h2.text-center Sterility leads to<br>susceptibility
          p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.

      h3 Tarjetas avatar A
      .row
        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
            .tarjeta.tarjeta--azul
              .p-4
                h2 John Doe
                p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
            //- .tarjeta debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.color-acento-botones
              .p-4
                h2 John Doe
                p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
            //- .tarjeta debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.color-acento-contenido
              .p-4
                h2 Greatness isn’t the height
                p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-lg-6
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
            //- .tarjeta debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.color-primario.text-white
              .p-4
                h2 Greatness isn’t the height
                p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      h3 Tarjetas avatar B
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
            //- .tarjeta debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.color-primario
              .text-white.p-4
                h2.text-center John Doe
                p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
            //- .tarjeta debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.color-acento-botones
              .p-4
                h2.text-center John Doe
                p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
            //- .tarjeta debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.color-acento-contenido
              .p-4
                h2.text-center Greatness isn’t the height
                p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      h3 Tarjetas flip

      .row.mb-5
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, 

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

      h3 Tarjetas slide

      //- .tarjeta-slide debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- .arriba, .abajo, .derecha, .izquierda para controlar la animacion
      .row.mb-5
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, 
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

        .col-sm-6.col-xl-3
          .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h1 John Doe
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

      h3 Tarjetas Tabla
      .row.mb-5
        .col-md-6.col-lg.tarjeta--tabla.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
          h2.text-center John Doe
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-md-6.col-lg.tarjeta--tabla.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
          h2.text-center John Doe
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-md-6.col-lg.tarjeta--tabla.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
          h2.text-center John Doe
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .col-md-6.col-lg.tarjeta--tabla.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
          h2.text-center John Doe
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

      h3 Tarjetas con número

      .row.mb-5
        .col-md-6.col-xl.mb-4.mb-xl-0
          //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta-numerada.color-primario.p-5
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

        .col-md-6.col-xl.mb-4.mb-xl-0
          //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta-numerada.color-secundario.p-5
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

        .col-md-6.col-xl.mb-4.mb-xl-0
          //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

        .col-md-6.col-xl.mb-4.mb-xl-0
          //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta-numerada.color-acento-botones.p-5
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
            p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

      Separador
      #modal.titulo-segundo.color-acento-botones
        h2 Modal

      .row
        .col-auto
          a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
        .col
          p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t 
            a.lnk(@click="modal1 = true") Abrir modal 
            |the height of your stature, it’s the heft of your spirit.
      
      ModalA(:abrir-modal.sync="modal1")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Modal 1
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
              figcaption Leyenda de la imagen
      
      Separador
      #modal.titulo-segundo.color-acento-botones
        h2 Animaciones

      h3.titulo-tercero Fade
      .row.mb-5
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-acento-botones.text-center.p-3(data-aos="fade-left")
            h3.mb-0 fade-left
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-primario.text-center.p-3(data-aos="fade-right")
            h3.mb-0 fade-right

      h3.titulo-tercero Flip
      .row.mb-5
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-primario.text-center.p-3(data-aos="flip-up")
            h3.mb-0 flip-up
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-secundario.text-center.p-3(data-aos="flip-down")
            h3.mb-0 flip-down
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-acento-contenido.text-center.p-3(data-aos="flip-left")
            h3.mb-0 flip-left
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-acento-botones.text-center.p-3(data-aos="flip-right")
            h3.mb-0 flip-right

      h3.titulo-tercero Zoom
      .row
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-primario.text-center.p-3(data-aos="zoom-in")
            h3.mb-0 zoom-in
        .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
          .tarjeta.color-secundario.text-center.p-3(data-aos="zoom-in-up")
            h3.mb-0 zoom-out

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
