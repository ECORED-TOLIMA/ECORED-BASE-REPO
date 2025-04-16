<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciberseguridad principios, normativas e importancia
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p La ciberseguridad es una disciplina esencial en el mundo digital, encargada de proteger sistemas informáticos, redes, dispositivos y datos frente a amenazas cibernéticas y ataques maliciosos. A medida que la tecnología avanza y la interconectividad aumenta, se ha vuelto fundamental para garantizar la privacidad, integridad y disponibilidad de la información en línea.
            p Se compone de un conjunto de prácticas, tecnologías y procesos diseñados para prevenir accesos no autorizados, daños o pérdidas de datos. Su objetivo principal es garantizar la confidencialidad, integridad y disponibilidad de la información, protegiendo tanto a individuos como a organizaciones de amenazas como virus, <em>malware</em>, <em>ransomware</em>, ataques de denegación de servicio (DDoS) y fraudes digitales.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.align-items-center
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img02.svg', alt='Imagen decorativa')
            .col-10.mb-3
              p.mb-0 En un mundo altamente interconectado, un solo ataque cibernético puede generar consecuencias devastadoras, desde el robo de identidad hasta la interrupción de infraestructuras críticas como redes de energía y sistemas de comunicación gubernamentales. No solo es crucial para empresas y gobiernos, sino también para los ciudadanos, ya que cada vez más actividades diarias dependen de internet y los sistemas digitales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p A medida que surgen nuevas tecnologías como la Inteligencia Artificial (IA) y el Internet de las Cosas (IoT), los ciberdelincuentes desarrollan métodos de ataque más sofisticados, aprovechando la creciente cantidad de dispositivos conectados. Por ello, la protección del ecosistema digital requiere un enfoque integral que combine herramientas avanzadas, normativas adecuadas y una sólida cultura de seguridad.
            p Para garantizar una protección eficaz, se emplean diversas herramientas y estrategias, como:
            .cajon.cajon.color2.p-4
              .row.justify-content-center
                .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen decorativa')
                .col-lg-8.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
                  ul.lista-ul--color.lista-ul
                    li.mb-0
                      i.fas.fa-shield
                      | Firewalls y antivirus para detectar y bloquear amenazas.
                    li.mb-0
                      i.fas.fa-shield
                      | Encriptación de datos para proteger la información sensible.
                    li.mb-0
                      i.fas.fa-shield
                      | Autenticación multifactor (MFA) para reforzar el acceso seguro.
                    li.mb-0
                      i.fas.fa-shield
                      | Monitoreo continuo de redes para identificar posibles vulnerabilidades.
                    li.mb-0
                      i.fas.fa-shield
                      | Capacitación en seguridad digital para reducir el riesgo de errores humanos.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto e importancia de la ciberseguridad

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Historia y evolución de la ciberseguridad

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Características de la ciberseguridad

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Normas y regulaciones internacionales

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Retos actuales en ciberseguridad

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
