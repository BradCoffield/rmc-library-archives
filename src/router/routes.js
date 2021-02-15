const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "/collections/physical/photos/view-all",
        component: () => import("pages/physical-collections/PhotosTable.vue")
      },
      {
        path: "/collections/physical/historic-collections/view-all",
        component: () =>
          import("pages/physical-collections/HistoricCollectionsTable.vue")
      },
      {
        path: "/collections/physical/personal-collections/view-all",
        component: () =>
          import("pages/physical-collections/PersonalCollectionsTable.vue")
      },
      {
        path: "/collections/physical/college-publications/view-all",
        component: () =>
          import("pages/physical-collections/CollegePublicationsTable.vue")
      },
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
    component: () => import("layouts/TestingLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/physical-collections/PhysicalCollectionsLanding.vue")
      },
      {
        path: "photostable",
        component: () =>
          import("pages/physical-collections/HistoricCollectionsTable.vue")
      }
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
