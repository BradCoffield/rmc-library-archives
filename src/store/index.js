import Vue from "vue";
import Vuex from "vuex";

// import example from './module-example'

Vue.use(Vuex);

const state = {
  pageTitle: "",
  collectionItemCount: "",
  physicalCollectionsMetadata: [
    {
      name: "College Publications",
      icon: "auto_stories",
      thumbnail: "_From 1914 Yearbook.png",
      thumbnailTitle: 'From the 1914 Yearbook, "The Poly"',
      briefDescription: "string",
      longDescription:
        "Minim non cupidatat proident culpa est est sit excepteur non. Reprehenderit nostrud non Lorem veniam magna id. Ad ad non consequat ipsum Lorem ullamco nisi nulla dolore ad. Ullamco nostrud ea est exercitation officia dolore duis dolore enim enim non adipisicing ea reprehenderit. Nulla mollit tempor ad officia laborum elit eu consectetur do occaecat nostrud do sunt commodo.",
      route: "/collections/physical/college-publications"
    },
    {
      name: "Historic Collections",
      icon: "history_edu",
      thumbnail: "_Auto Mechanics Class in late 1920s.jpg",
      thumbnailTitle: "Auto Mechanics Class in the late 1920s",
      briefDescription: "string",
      longDescription:
        "Minim non cupidatat proident culpa est est sit excepteur non. Reprehenderit nostrud non Lorem veniam magna id. Ad ad non consequat ipsum Lorem ullamco nisi nulla dolore ad. Ullamco nostrud ea est exercitation officia dolore duis dolore enim enim non adipisicing ea reprehenderit. Nulla mollit tempor ad officia laborum elit eu consectetur do occaecat nostrud do sunt commodo.",
      route: "/collections/physical/historic-collections"
    },
    {
      name: "Personal Collections",
      icon: "people_alt",
      thumbnail: "_Class w P.Adams.jpg",
      thumbnailTitle: "Paul Adams with students",
      briefDescription: "string",
      longDescription:
        "Minim non cupidatat proident culpa est est sit excepteur non. Reprehenderit nostrud non Lorem veniam magna id. Ad ad non consequat ipsum Lorem ullamco nisi nulla dolore ad. Ullamco nostrud ea est exercitation officia dolore duis dolore enim enim non adipisicing ea reprehenderit. Nulla mollit tempor ad officia laborum elit eu consectetur do occaecat nostrud do sunt commodo.",
      route: "/collections/physical/personal-collections"
    },
    {
      name: "Photos",
      icon: "camera_alt",
      thumbnail: "_President Bill Clinton at RMC 1992.jpg",
      thumbnailTitle: "President Clinton at RMC in 1992",
      briefDescription:
        "More than six thousand photos throughout the history of Rocky Mountain College and its precedent institutions.",
      longDescription:
        "Minim non cupidatat proident culpa est est sit excepteur non. Reprehenderit nostrud non Lorem veniam magna id. Ad ad non consequat ipsum Lorem ullamco nisi nulla dolore ad. Ullamco nostrud ea est exercitation officia dolore duis dolore enim enim non adipisicing ea reprehenderit. Nulla mollit tempor ad officia laborum elit eu consectetur do occaecat nostrud do sunt commodo.",
      route: "/collections/physical/photos"
    }
  ],
  digitalCollectionsMetadata: [
    {
      name: "Digital Photos",
      icon: "camera",
      thumbnail: "_AerialFlightPic.png",
      thumbnailTitle: "Aviation Program, Aerial Flight",
      briefDescription:
        "More than six thousand photos throughout the history of Rocky Mountain College and its precedent institutions.",
      longDescription:
        "Minim non cupidatat proident culpa est est sit excepteur non. Reprehenderit nostrud non Lorem veniam magna id. Ad ad non consequat ipsum Lorem ullamco nisi nulla dolore ad. Ullamco nostrud ea est exercitation officia dolore duis dolore enim enim non adipisicing ea reprehenderit. Nulla mollit tempor ad officia laborum elit eu consectetur do occaecat nostrud do sunt commodo.",
      route: "/collections/digital/digital-photos"
    },
    {
      name: "Online Yearbooks",
      icon: "menu_book",
      thumbnail: "_RMC-Digitized-Yearbooks-1.png",
      thumbnailTitle: "Online Yearbooks",
      briefDescription:
        "More than six thousand photos throughout the history of Rocky Mountain College and its precedent institutions.",
      longDescription:
        "Minim non cupidatat proident culpa est est sit excepteur non. Reprehenderit nostrud non Lorem veniam magna id. Ad ad non consequat ipsum Lorem ullamco nisi nulla dolore ad. Ullamco nostrud ea est exercitation officia dolore duis dolore enim enim non adipisicing ea reprehenderit. Nulla mollit tempor ad officia laborum elit eu consectetur do occaecat nostrud do sunt commodo.",
      route: "/collections/digital/yearbooks"
    },
    {
      name: "Rocky.edu Homepages",
      icon: "monitor",
      thumbnail: "_RockyEDU Homepage 3102021.png",
      thumbnailTitle: "Rocky.edu homepage, March 2021",
      briefDescription:
        "More than six thousand photos throughout the history of Rocky Mountain College and its precedent institutions.",
      longDescription:
        "Minim non cupidatat proident culpa est est sit excepteur non. Reprehenderit nostrud non Lorem veniam magna id. Ad ad non consequat ipsum Lorem ullamco nisi nulla dolore ad. Ullamco nostrud ea est exercitation officia dolore duis dolore enim enim non adipisicing ea reprehenderit. Nulla mollit tempor ad officia laborum elit eu consectetur do occaecat nostrud do sunt commodo.",
      route: "/collections/digital/rmc-homepages"
    }
  ]
};

const getters = {};

const mutations = {
  SET_ITEM_COUNT(state, count) {
    state.collectionItemCount = count;
  },
  SET_PAGE_TITLE(state, title) {
    state.pageTitle = title;
  }
};

const actions = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
