import Complementario from 'ecored-pkg-fliz/plugin/components/Complementario.vue'
import Glosario from 'ecored-pkg-fliz/plugin/components/Glosario.vue'
import Curso from 'ecored-pkg-fliz/plugin/components/plantilla/Curso.vue'
import Referencias from 'ecored-pkg-fliz/plugin/components/Referencias.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Creditos from '../components/Creditos.vue'
import Inicio from '../components/Inicio.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/introduccion',
      name: 'introduccion',
      component: () =>
        import(/* webpackChunkName: "intro" */ '../views/Introduccion.vue'),
    },
    {
      path: '/curso',
      name: 'curso',
      component: Curso,
      redirect: {
        name: 'tema1',
      },
      children: [
        {
          path: 'tema1',
          name: 'tema1',
          component: () =>
            import(/* webpackChunkName: "tema1" */ '../views/Tema1.vue'),
        },
        {
          path: 'tema2',
          name: 'tema2',
          component: () =>
            import(/* webpackChunkName: "tema2" */ '../views/Tema2.vue'),
        },
        {
          path: 'tema3',
          name: 'tema3',
          component: () =>
            import(/* webpackChunkName: "tema3" */ '../views/Tema3.vue'),
        },
      ],
    },
    {
      path: '/actividad',
      name: 'actividad',
      component: () =>
        import(/* webpackChunkName: "actividad" */ '../views/Actividad.vue'),
    },
    {
      path: '/glosario',
      name: 'glosario',
      component: Glosario,
    },
    {
      path: '/complementario',
      name: 'complementario',
      component: Complementario,
    },
    {
      path: '/referencias',
      name: 'referencias',
      component: Referencias,
    },
    {
      path: '/sintesis',
      name: 'sintesis',
      component: () =>
        import(/* webpackChunkName: "sintesis" */ '../views/sintesis.vue'),
    },
    {
      path: '/creditos',
      name: 'creditos',
      component: Creditos,
    },
  ],
  scrollBehavior(to, from) {
    if (to.hash) {
      const newRoute = {
        selector: to.hash,
        offset: { y: 100 },
        behavior: 'smooth',
      }
      if (to.name === from.name) {
        return newRoute
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(newRoute)
          }, 500)
        })
      }
    } else {
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto',
        })
      }, 100)
    }
  },
})

export default router
