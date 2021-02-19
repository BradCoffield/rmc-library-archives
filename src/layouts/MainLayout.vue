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
    <q-img
      :src="'/Montana College Deer Lodge.jpg'"
      id="nav-img"
      img-style="height:200px"
    >
      <div class="absolute-full text-subtitle2 flex flex-center q-mt-xl">
        <h1 class="text-h3 slab q-mt-xl">
          Heritage Archives
        </h1>
      </div></q-img
    >
    <q-toolbar id="sub-toolbar" class="gt-sm">
      <q-space />

      <q-btn flat label="Physical Collections" class="q-mr-sm q-ml-sm lt-md">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn flat label="Physical Collections" class="q-mr-sm q-ml-sm gt-sm">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat label="Digital Collections" class="q-mr-sm q-ml-sm gt-sm">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat label="Additional Information" class="q-mr-sm q-ml-sm gt-sm">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat label="Contact Us" class="q-mr-sm q-ml-sm gt-sm">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-space />
    </q-toolbar>

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

export default {
  name: "ArchivesMainLayout",
  components: { NavDrawer },
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
