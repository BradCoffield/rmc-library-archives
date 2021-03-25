<template>
 <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <h2 class="text-center text-uppercase">Browse {{pageTitle}}</h2>
     <PCTable :name="pageTitle" :columns="columns" :data="data" sortBy="contents" :loading="loading" ></PCTable>
 
  </q-page>
</template>

<script>
import PCTable from "components/PhysicalCollectionsTable.vue";
import getArchivesAPI from "assets/getArchivesAPI.js";
export default {
  name: "Historic Collections",
  components: { PCTable },
  data() {
    return {
      // filter: "",
      loading: true,
      pageTitle: "Historic Collections",
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
          label: "Name",
          name: "name",
          field: "name",
          sortable: true,
          align: "left"
        },
        {
          label: "Subject",
          name: "subject",
          field: "subject",
          sortable: true,
          align: "left",
          style: "max-width: 500px"
        },
        {
          label: "Archives Location",
          name: "number",
          field: "number",
          sortable: true,
          align: "left",
          style: "max-width: 200px"
        }

        // { name: "actions", label: "Subjects", field: "", align: "center" }
      ],
      data: [],
  
    };
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
          name: item.name.replace(re, ""),
          id: item.id,
          number: item.number.replace(re, ""),

          subject:  item.subject.replace(re, ""),
        });
         this.$store.commit('SET_ITEM_COUNT', this.data.length)
        this.loading = false
      });
    })();
  }
};
</script>
