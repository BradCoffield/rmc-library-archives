
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/physical-collections/photos/view-all', component: () => import('pages/physical-collections/Photos.vue') },
      { path: '/physical-collections/historic-collections/view-all', component: () => import('pages/physical-collections/HistoricCollections.vue') },
      { path: '/physical-collections/personal-collections/view-all', component: () => import('pages/physical-collections/PersonalCollections.vue') },
      { path: '/physical-collections/college-publications/view-all', component: () => import('pages/physical-collections/CollegePublications.vue') },
      { path: '/physical-collections/search', component: () => import('pages/physical-collections/Search.vue') },
      { path: '/digital-collections/yearbooks', component: () => import('pages/digital-collections/Yearbooks.vue') },
     
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
