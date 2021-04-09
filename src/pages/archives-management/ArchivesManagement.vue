<template>
  <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <h2 class="text-center text-uppercase">Archives Management Dashboard</h2>
 
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
      <!-- <li>
        <router-link to="/edit-photos">Photos</router-link>
      </li> -->
    </ul>
    <h3>Add Items to Physical Collections</h3>
    <ul>
      <li>
        <router-link to="/add-college-publications"
          >College Publications</router-link
        >
      </li>
      <li>
        <router-link to="/add-historic-collections"
          >Historic Collections</router-link
        >
      </li>
      <li>
        <router-link to="/add-personal-collections"
          >Personal Collections</router-link
        >
      </li>
      <!-- <li>
        <router-link to="/add-photos">Photos</router-link>
      </li> -->
    </ul>
  </q-page>
</template>

<script>
export default {
  name: "ArchivesManagement",

  data() {
    return {};
  },

  created() {console.log("You make change?");}
};
</script>
