<template>
  <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <h2 class="text-center text-uppercase">Archives Management Dashboard</h2>
     <template v-if="!this.$store.state.user"
          ><q-btn flat label="Archivist Sign In" to="/login"></q-btn
        ></template>
        <template v-if="this.$store.state.user">
          <ul id="management-buttons">
             
            <!-- <li>
              <q-btn flat label="Archivist Sign Out" @click="signOut"></q-btn>
            </li> -->
          </ul>
        </template>
    <h3>Edit Physical Collections</h3>
    <ul>
      <li>
        <router-link to="/edit-college-publications"
          >College Publications</router-link
        >
      </li>
      <li>
        <router-link to="/edit-historic-collections"
          >Historic Collections</router-link
        >
      </li>
      <li>
        <router-link to="/edit-personal-collections"
          >Personal Collections</router-link
        >
      </li>
    </ul>
    <h3>Add Items to Physical Collections</h3>
    <ul>
      <li>
        <router-link to="/add-college-publications"
          >College Publications</router-link
        ></li><li>
        <router-link to="/add-historic-collections"
          >Historic Collections</router-link
        >
      </li>
      <li>
        <router-link to="/add-personal-collections">Personal Collections</router-link>
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  name: "ArchivesManagement",

  data() {
    return {};
  },

  created() {}
};
</script>
