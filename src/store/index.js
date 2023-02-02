import Vue from "vue";
import Vuex from "vuex";
import { firebaseAuth, firebaseDb } from "boot/firebase";
Vue.use(Vuex);

const state = {
  user: false,
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
    }
    // {
    //   name: "Rocky.edu Homepages",
    //   icon: "monitor",
    //   thumbnail: "_RockyEDU Homepage 3102021.png",
    //   thumbnailTitle: "Rocky.edu homepage, March 2021",
    //   briefDescription:
    //     "More than six thousand photos throughout the history of Rocky Mountain College and its precedent institutions.",
    //   longDescription:
    //     "Minim non cupidatat proident culpa est est sit excepteur non. Reprehenderit nostrud non Lorem veniam magna id. Ad ad non consequat ipsum Lorem ullamco nisi nulla dolore ad. Ullamco nostrud ea est exercitation officia dolore duis dolore enim enim non adipisicing ea reprehenderit. Nulla mollit tempor ad officia laborum elit eu consectetur do occaecat nostrud do sunt commodo.",
    //   route: "/collections/digital/rmc-homepages"
    // }
  ]
};

const getters = {
  userDetails(state) {
    return state.user;
  },
  user(state) {
    return state.user;
  }
};

const mutations = {
  SET_USER(state, payload) {
    let authUser = payload;
    state.user = {
      uid: authUser.uid,
      email: authUser.email,
      displayName: authUser.displayName,
      picture: authUser.photoURL
    };
  },

  RESET_USER(state) {
    state.user = null;
    // this.$router.push("/login");
    // this.$router.push("/");
  },
  SET_ITEM_COUNT(state, count) {
    state.collectionItemCount = count;
  },
  SET_PAGE_TITLE(state, title) {
    state.pageTitle = title;
  }
};

const actions = {
  handleAuthStateChanged({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        // console.log(firebaseAuth.currentUser.displayName);
        // console.log(firebaseAuth.currentUser.email);
        // console.log(firebaseAuth.currentUser.uid);
        // console.log(firebaseAuth.currentUser.photoURL);
        console.log(user.displayName); //I should probably use this that is passed to the function

        commit("SET_USER", user);
        // this.$router.push("/");
      } else {
        console.log("No user now");
        // this.$router.push("/login");
        commit("RESET_USER", false);
        // store.dispatch('updateAuthState', {authUser: false})
        // User is signed out.
      }
    });
  }
};

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions
});
