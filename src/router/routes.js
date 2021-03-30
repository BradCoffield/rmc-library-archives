import store from "src/store";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/login", component: () => import("pages/Login.vue") },
      { path: "/contact-us", component: () => import("pages/ContactUs.vue") },
      {
        path: "/archives-policy",
        component: () => import("pages/ArchivesPolicy.vue")
      },

      // {
      //   path: "/collections/search",
      //   component: () => import("pages/physical-collections/Search.vue")
      // },
      // PHYSICAL COLLECTIONS

      // PHOTOS
      {
        path: "/collections/physical/photos",
        component: () => import("pages/physical-collections/Photos.vue")
      },
      {
        path: "/collections/physical/photos/view-all",
        component: () => import("pages/physical-collections/PhotosTable.vue")
      },
      // HISTORIC COLLECTIONS
      {
        path: "/collections/physical/historic-collections/view-all",
        component: () =>
          import("pages/physical-collections/HistoricCollectionsTable.vue")
      },
      {
        path: "/collections/physical/historic-collections",
        component: () =>
          import("pages/physical-collections/HistoricCollections.vue")
      },
      // PERSONAL COLLECTIONS
      {
        path: "/collections/physical/personal-collections/view-all",
        component: () =>
          import("pages/physical-collections/PersonalCollectionsTable.vue")
      },
      {
        path: "/collections/physical/personal-collections",
        component: () =>
          import("pages/physical-collections/PersonalCollections.vue")
      },
      // COLLEGE PUBLICATIONS
      {
        path: "/collections/physical/college-publications/view-all",
        component: () =>
          import("pages/physical-collections/CollegePublicationsTable.vue")
      },
      {
        path: "/collections/physical/college-publications",
        component: () =>
          import("pages/physical-collections/CollegePublications.vue")
      },
      // DIGITAL COLLECTIONS
      {
        path: "/collections/digital/yearbooks",
        component: () => import("pages/digital-collections/Yearbooks.vue")
      },
      {
        path: "/collections/digital/digital-photos",
        component: () => import("pages/digital-collections/DigitalPhotos.vue")
      },
      {
        path: "/collections/digital/rmc-homepages",
        component: () => import("pages/digital-collections/RMCHomepages.vue")
      },
      //EDITING COLLECTIONS
      {
        path: "/archives-management",
        component: () => import("src/pages/archives-management/ArchivesManagement.vue")
      },
      {
        path: "/edit-college-publications",
        component: () => import("pages/archives-management/Edit_CollegePublications.vue")
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
