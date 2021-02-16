import Vue from "vue";
import Vuex from "vuex";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// export default function (/* { ssrContext } */) {
//   const Store = new Vuex.Store({
//     modules: {
//       // example
//     },
//     state: {
//       count: 0,
//       pageTitle: "College Publications"
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       },
//       SET_PAGE_TITLE (state, title){
//         state.pageTitle = title
//       }
//     },
//     actions:{},
//     getters:{},

//     // enable strict mode (adds overhead!)
//     // for dev mode only
//     strict: process.env.DEBUGGING
//   })

//   return Store
// }

const state = {
  pageTitle: "",
  collectionItemCount: "",
  physicalCollectionsMetadata: [
    {
      name: "College Publications",
      thumbnail: "something.jpg",
      briefDescription: "string"
    },
    {
      name: "Historic Collections",
      thumbnail: "something.jpg",
      briefDescription: "string"
    },
    {
      name: "Personal Collections",
      thumbnail: "something.jpg",
      briefDescription: "string"
    },
    {
      name: "Photos",
      thumbnail: "something.jpg",
      briefDescription: "string"
    },
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
