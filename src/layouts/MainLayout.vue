<template>
  <q-layout view="lHh Lpr fff" class="bg-primary">
    <q-header elevated class="" height-hint="90">
      <q-toolbar id="primary-sticky-toolbar" class="GPL__toolbar" style="">
        <q-space />
        <a href="/" style="display:block;display: 0 auto;width:150px; ">
          <q-img :src="'/Archives_Logo3.svg'" id="archives-logo" class="q-ml-md"
        /></a>

        <q-space />

        <q-btn
          flat
          dense
          color="white"
          @click="navDrawerOpenStatus = !navDrawerOpenStatus"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />
      </q-toolbar>
    </q-header>
       <q-footer id="footer1"  >
        <div style="max-width: 300px;margin:auto;font-size:18px" >
          <q-btn icon="house" type="a" href="https://www.rocky.edu/library" target="_blank" label="Back to RMC Library"  flat class="q-ma-md bg-darknoise" /> 



             
          <template v-if="!this.$store.state.user"
            ><q-btn flat label="Archivist Sign In" to="/login"></q-btn
          ></template>
          <template v-if="this.$store.state.user">
            <q-btn flat label="Archivist Sign Out" @click="signOut"></q-btn>
          </template>
         
        </div>
   <!-- <secondary-toolbar></secondary-toolbar> -->
      
      </q-footer>
    <q-img :src="'/Montana College Deer Lodge.jpg'" id="nav-img">
      <div class="absolute-full text-subtitle2 flex flex-center q-mt-xl">
        <a href="/" style="color:inherit">
          <h1 class="text-h3 slab q-mt-xl">
            Heritage Archives
          </h1>
        </a>
      </div></q-img
    >

    <secondary-toolbar></secondary-toolbar>

    <nav-drawer :navDrawerOpenStatus="navDrawerOpenStatus"></nav-drawer>

    <q-page-container style="padding-top:50px" class="">
      <!-- <q-page-container class="GPL__page-container"> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Screen } from "quasar";
import NavDrawer from "components/NavDrawer";
import SecondaryToolbar from "components/SecondaryToolbar";

export default {
  name: "ArchivesMainLayout",
  components: { NavDrawer, SecondaryToolbar },
  data() {
    return {
      navDrawerOpenStatus: false,
      search: "",
      storage: 0.26
    };
  },
  methods: {
    signOut() {
      console.log("signOut");
      this.$fireAuth.signOut();
    }
  }
};
</script>

<style lang="sass"></style>
