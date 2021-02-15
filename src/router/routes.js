const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
     
      {
        path: "/collections/search",
        component: () => import("pages/physical-collections/Search.vue")
      },
      {
        path: "/collections/digital/yearbooks",
        component: () => import("pages/digital-collections/Yearbooks.vue")
      }
    ]
  },
  {
    path: "/collections/physical",
    component: () => import("layouts/PhysicalCollectionsLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/physical-collections/PhysicalCollectionsLanding.vue")
      },
      {
        path: "photos/view-all",
        component: () => import("pages/physical-collections/PhotosTable.vue")
      },
      {
        path: "historic-collections/view-all",
        component: () =>
          import("pages/physical-collections/HistoricCollectionsTable.vue")
      },
      {
        path: "personal-collections/view-all",
        component: () =>
          import("pages/physical-collections/PersonalCollectionsTable.vue")
      },
      {
        path: "college-publications/view-all",
        component: () =>
          import("pages/physical-collections/CollegePublicationsTable.vue")
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
