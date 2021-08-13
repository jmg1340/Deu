
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/missatges',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/missatges.vue') }
    ]
  },
  {
    path: '/pregaries',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pregaries.vue') }
    ]
  },
  {
    path: '/angels',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/apunts/angels.vue') }
    ]
  },
  

  // ---- FILOCALIA ----
  {
    path: '/filocalia/niceforo',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/filocalia/Niceforo.vue') }
    ]
  },
  {
    path: '/filocalia/gregorio',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/filocalia/Gregorio.vue') }
    ]
  },
  {
    path: '/filocalia/simeon',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/filocalia/Simeon.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
