export default {
  methods: {
    obtenerLink(ruta) {
      const route = window.location.href
      const separator = route.includes('/index.html#') ? 'index.html#' : '#/'
      const baseRoute = route.split(separator)[0]
      const routeEnd = ruta.startsWith('/') ? ruta.substring(1) : ruta
      return baseRoute + routeEnd
    },
  },
}
