<template>
  <q-drawer
    side="right"
    v-model="navDrawerOpenStatus"
    bordered
    elevated
    behavior="mobile"
    @click="leftDrawerOpen = false"
  >
    <q-scroll-area class="fit">
      <q-toolbar class="GPL__toolbar  bg-darknoise">
        <q-toolbar-title
          class="row items-center text-grey-8 bg-darknoise q-pa-sm"
        >
          <a href="/" style="display:block;display: 0 auto;width:150px; ">
            <q-img
              :src="'/Archives_Logo3.svg'"
              id="archives-logo"
              class="q-ml-md"
          /></a>
        </q-toolbar-title>
      </q-toolbar>

      <!-- <q-separator   /> -->
      <!-- This is where we are populating the drawer navigation -->
      <q-list padding>
        <q-item
          ><span class="text-h5 text-grey-7">Physical Collections</span>
        </q-item>
        <q-item
          v-for="link in physicalCollectionsMetadata"
          :key="link.name"
          clickable
          :to="link.route"
          class="GPL__drawer-item"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.name }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />
        <q-item
          ><span class="text-h5 text-grey-7">Digital Collections</span></q-item
        >
        <q-item
          v-for="link in digitalCollectionsMetadata"
          :key="link.name"
          clickable
          :to="link.route"
          class="GPL__drawer-item"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.name }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />
        <q-item
          ><span class="text-h5 text-grey-7">Additional Links</span></q-item
        >
        <q-item
          v-for="link in links3"
          :key="link.text"
          clickable
          :to="link.destination"
          class="GPL__drawer-item"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  props: { navDrawerOpenStatus: Boolean },
  data() {
    return {
      physicalCollectionsMetadata: this.$store.state
        .physicalCollectionsMetadata,
      digitalCollectionsMetadata: this.$store.state.digitalCollectionsMetadata,
      links3: [
        {
          icon: "note",
          text: "Archives Policy",
          destination: "/archives-policy"
        },
        {
          icon: "insert_emoticon",
          text: "Contact Us",
          destination: "/contact-us"
        }
      ]
    };
  }
};
</script>
