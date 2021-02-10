<template>
  <q-layout view="lHh Lpr fff" class="bg-primary">
    <q-header elevated class="bg-dark text-grey-1" height-hint="64">
      <q-toolbar class="GPL__toolbar" style="height: 64px">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mx-md"
        />

        <q-toolbar-title shrink class="row items-center no-wrap">
          <!-- <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"> -->
          <q-btn flat to="/" class="q-ml-sm  "
            >Rocky Mountain College Archives</q-btn
          >
        </q-toolbar-title>

        <q-space />

        <q-space />

        <!-- <div class="q-gutter-sm row items-center no-wrap">
          <template v-if="!this.$store.state.store.user"
            ><q-btn flat label="Sign In" to="/login"></q-btn
          ></template>
          <template v-if="this.$store.state.store.user">
            <q-btn flat label="Sign Out" @click="signOut"></q-btn>
          </template>
        </div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      elevated
      behavior="mobile"
      @click="leftDrawerOpen = false"
    >
      <q-scroll-area class="fit">
        <q-toolbar class="GPL__toolbar bg-dark">
          <q-toolbar-title class="row items-center text-grey-8 bg-dark q-pa-sm">
            <span class=" text-white">Library Cheatsheets</span>
          </q-toolbar-title>
        </q-toolbar>

        <!-- <q-separator   /> -->
        <!-- This is where we are populating the drawer navigation -->
        <q-list padding>
          <q-item><span class="text-h5 text-grey-7">Cheatsheets</span></q-item>
          <q-item
            v-for="link in links1"
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
          <q-item><span class="text-h5 text-grey-7">API Searches</span></q-item>
          <q-item
            v-for="link in links2"
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
          <q-item><span class="text-h5 text-grey-7">Weblinks</span></q-item>
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
          <q-item
            ><span class="text-h5 text-grey-7">Instruction Videos</span></q-item
          >
          <q-item
            v-for="link in links4"
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
          <q-item><span class="text-h5 text-grey-7">eBooks</span></q-item>
          <q-item
            v-for="link in links5"
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
          <q-item><span class="text-h5 text-grey-7">Custom Boxes</span></q-item>
          <q-item
            v-for="link in links6"
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

    <q-page-container class="GPL__page-container">
      <router-view />

      <q-page-sticky v-if="$q.screen.gt.sm" expand position="left">
        <div class="fit q-pt-xl q-px-sm column">
          <q-btn
            round
            flat
            color="grey-9"
            stack
            no-caps
            size="26px"
            class="GPL__side-btn"
            to="/physical-collections/photos"
          >
            <q-icon size="22px" name="calendar_view_day" />
            <div class="GPL__side-btn__label">Photos</div>
          </q-btn>

          <q-btn
            round
            flat
            color="grey-9"
            stack
            no-caps
            size="26px"
            class="GPL__side-btn"
            to="/api-searches"
          >
            <q-icon size="22px" name="subject" />
            <div class="GPL__side-btn__label">API Searches</div>
            <!-- <q-badge floating color="red" text-color="white" style="top: 8px; right: 16px">
              1
            </q-badge> -->
          </q-btn>

          <q-btn
            round
            flat
            color="grey-9"
            stack
            no-caps
            size="26px"
            class="GPL__side-btn"
            to="/weblinks/list-weblinks"
          >
            <q-icon size="22px" name="insert_link" />
            <div class="GPL__side-btn__label">Weblinks</div>
          </q-btn>

          <q-btn
            round
            flat
            color="grey-9"
            stack
            no-caps
            size="26px"
            class="GPL__side-btn"
            to="/videos/list-instruction-videos"
          >
            <q-icon size="22px" name="video_library" />
            <div class="GPL__side-btn__label">Instruction Videos</div>
          </q-btn>
          <q-btn
            round
            flat
            color="grey-9"
            stack
            no-caps
            size="26px"
            class="GPL__side-btn"
            to="/ebooks/list-ebooks"
          >
            <q-icon size="22px" name="menu_book" />
            <div class="GPL__side-btn__label">eBooks</div>
          </q-btn>

          <q-btn
            round
            flat
            color="grey-9"
            stack
            no-caps
            size="26px"
            class="GPL__side-btn"
            to="/custom-boxes"
          >
            <q-icon size="22px" name="select_all" />
            <div class="GPL__side-btn__label">Custom Boxes</div>
          </q-btn>
        </div>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Screen } from "quasar";
export default {
  name: "ArchivesMainLayout",

  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      storage: 0.26,
      links1: [
        { icon: "list", text: "Photos", destination: "/physical-collections/photos" },
        {
          icon: "add_circle",
          text: "Create New",
          destination: "/create-cheatsheet"
        }
      ],
      links2: [
        { icon: "list", text: "List APIs", destination: "/api-searches" }
      ],
      links3: [
        {
          icon: "list",
          text: "List Weblinks",
          destination: "/weblinks/list-weblinks"
        },
        {
          icon: "link",
          text: "Add Weblink",
          destination: "/weblinks/add-weblink"
        }
      ],
      links4: [
        {
          icon: "list",
          text: "List Instruction Videos",
          destination: "/videos/list-instruction-videos"
        },
        {
          icon: "video_library",
          text: "Add Instruction Video",
          destination: "/videos/add-instruction-video"
        }
      ],
      links5: [
        {
          icon: "list",
          text: "List eBooks",
          destination: "/ebooks/list-ebooks"
        },
        {
          icon: "menu_book",
          text: "Add eBook",
          destination: "/ebooks/add-ebook"
        }
      ],
      links6: [
        { icon: "select_all", text: "Custom Boxes", destination: "/custom-boxes" },
   
      ]
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

<style lang="sass">




.GPL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 35%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368

    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px

  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500

  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
