
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/physical-collections/photos', component: () => import('pages/physical-collections/Photos.vue') },
      { path: '/physical-collections/historic-collections', component: () => import('pages/physical-collections/HistoricCollections.vue') },
      { path: '/physical-collections/personal-collections', component: () => import('pages/physical-collections/PersonalCollections.vue') },
      { path: '/physical-collections/college-publications', component: () => import('pages/physical-collections/CollegePublications.vue') },
      { path: '/physical-collections/search', component: () => import('pages/physical-collections/Search.vue') },
     
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
