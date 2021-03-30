<template>
<q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <h2 class="text-center text-uppercase">Archives Management Dashboard</h2>
    <h3>Edit Physical Collections</h3>
    <ul>
        <li> <router-link to="/edit-college-publications">College Publications</router-link> </li>
    </ul>
  </q-page>
</template>

<script>
import PCTable from "components/EditPhysicalCollectionsTable.vue";
import getArchivesAPI from "assets/getArchivesAPI.js";
export default {
  name: "college_publications",
  components: { PCTable },
  data() {
    return {
      filter: "",
      //   pageTitle fuels a lot of things, including the api call
      pageTitle: "College Publications",
      loading: true,
      columns: [
        {
          label: "Contents",
          name: "contents",
          sortable: true,
          field: "contents",
          align: "left",
          //   classes: 'bg-accent ellipsis',
          style: "max-width: 400px"
          // headerClasses: 'bg-secondary text-bold text-fs14p q-ma-sm'
          // headerClasses: ' text-italic '
        },

        {
          label: "Date",
          name: "date",
          field: "date",
          sortable: true,
          align: "left"
        },
        {
          label: "Notes",
          name: "notes",
          field: "notes",
          sortable: true,
          align: "left"
        },
        {
          label: "School",
          name: "school",
          field: "school",
          sortable: true,
          align: "left"
        },

        {
          label: "Archives Location",
          name: "number",
          field: "number",
          sortable: true,
          align: "left",
          style: "max-width: 200px"
        },
 { name: "actions", label: "Actions", field: "", align: "center" }
  
        // { name: "actions", label: "Subjects", field: "", align: "center" }
      ],
      data: []
    };
  },
   computed: {
    // pageTitle() {
    //   return this.$store.state.pageTitle;
    // }
  },
  created() {
  
    
    (async () => {
    this.$store.commit('SET_PAGE_TITLE', this.pageTitle)
    let res = await getArchivesAPI(
        this.pageTitle.replace(" ", "_").toLowerCase()
      );

      
      res.forEach(item => {
        let re = /(\\)/g;
        // let re2 = /(NULL)/;
        // let reNameStuff = /(,;)/

        this.data.push({
          date: item.date.replace(re, ""),
          contents: item.contents.replace(re, ""),
          notes: item.notes.replace(re, ""),
          id: item.id,
          number: item.number.replace(re, ""),

          school: item.school.replace(re, "")
        });
        this.$store.commit('SET_ITEM_COUNT', this.data.length)
        this.loading = false;
      });
    })();
  }
};
</script>
