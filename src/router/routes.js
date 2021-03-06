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
        component: () =>
          import("src/pages/archives-management/ArchivesManagement.vue")
      },
      {
        path: "/edit-college-publications",
        component: () =>
          import(
            "src/pages/archives-management/EditTable_CollegePublications.vue"
          )
      },
      {
        path: "/edit-college-publications-item",
        name: "edit-college-publications-item",
        component: () =>
          import(
            "pages/archives-management/edit-items-forms/EditForm_CollegePublications.vue"
          )
      },
      {
        path: "/add-college-publications",
        component: () =>
          import(
            "pages/archives-management/add-items-forms/Add_CollegePublications.vue"
          )
      },
      {
        path: "/add-historic-collections",
        component: () =>
          import(
            "pages/archives-management/add-items-forms/Add_HistoricCollections.vue"
          )
      },
      {
        path: "/edit-historic-collections",
        component: () =>
          import(
            "src/pages/archives-management/EditTable_HistoricCollections.vue"
          )
      },
      {
        path: "/edit-historic-collections",
        component: () =>
          import(
            "src/pages/archives-management/EditTable_HistoricCollections.vue"
          )
      },
      {
        path: "/edit-historic-collections-item",
        name: "edit-historic-collections-item",
        component: () =>
          import(
            "pages/archives-management/edit-items-forms/EditForm_HistoricCollections.vue"
          )
      },
      {
        path: "/add-personal-collections",
        component: () =>
          import(
            "pages/archives-management/add-items-forms/Add_PersonalCollections.vue"
          )
      },
      {
        path: "/edit-personal-collections",
        component: () =>
          import(
            "src/pages/archives-management/EditTable_PersonalCollections.vue"
          )
      },
      {
        path: "/edit-personal-collections-item",
        name: "edit-personal-collections-item",
        component: () =>
          import(
            "pages/archives-management/edit-items-forms/EditForm_PersonalCollections.vue"
          )
      },
      {
        path: "/add-photos",
        component: () =>
          import(
            "pages/archives-management/add-items-forms/Add_Photos.vue"
          )
      },
      {
        path: "/edit-photos",
        component: () =>
          import(
            "src/pages/archives-management/EditTable_Photos.vue"
          )
      },
      {
        path: "/edit-photos-item",
        name: "edit-photos-item",
        component: () =>
          import(
            "pages/archives-management/edit-items-forms/EditForm_Photos.vue"
          )
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
