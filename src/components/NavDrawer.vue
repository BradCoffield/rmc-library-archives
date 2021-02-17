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
        <q-toolbar class="GPL__toolbar bg-dark">
          <q-toolbar-title class="row items-center text-grey-8 bg-dark q-pa-sm">
            <span class=" text-white">RMC Archives</span>
          </q-toolbar-title>
        </q-toolbar>

        <!-- <q-separator   /> -->
        <!-- This is where we are populating the drawer navigation -->
        <q-list padding>
          <q-item
            ><span class="text-h5 text-grey-7"
              >Physical Collections</span
            ></q-item
          >
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
          <q-item
            ><span class="text-h5 text-grey-7"
              >Digital Collections</span
            ></q-item
          >
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
          <q-item
            ><span class="text-h5 text-grey-7"
              >Additional Information</span
            ></q-item
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
  props: { navDrawerOpenStatus: Boolean},
  data() {
    return {
 links1: [
        {
          icon: "camera_alt",
          text: "Photos",
          destination: "/collections/physical/photos/view-all"
        },
        {
          icon: "history_edu",
          text: "Historic Collections",
          destination: "/collections/physical/historic-collections/view-all"
        },
        {
          icon: "auto_stories",
          text: "College Publications",
          destination: "/collections/physical/college-publications/view-all"
        },
        {
          icon: "people_alt",
          text: "Personal Collections",
          destination: "/collections/physical/personal-collections/view-all"
        }
      ],
      links2: [
        {
          icon: "photo_album",
          text: "Yearbooks",
          destination: "/collections/digital/yearbooks"
        }
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
        {
          icon: "select_all",
          text: "Custom Boxes",
          destination: "/custom-boxes"
        }
      ]
      }
    
  }
};
</script>