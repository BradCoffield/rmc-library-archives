<template>
  <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <h2 class="text-center text-uppercase">Edit {{ pageTitle }}</h2>
    <EditTable
      :name="pageTitle"
      :columns="columns"
      :data="data"
      sortBy="contents"
      :loading="loading"
      :collection="pageTitle"
    ></EditTable>
  </q-page>
</template>

<script>
import EditTable from "components/EditPhysicalCollectionsTable.vue";
import getArchivesAPI from "assets/getArchivesAPI.js";

export default {
  name: "EditHistoricCollections",
  components: { EditTable },
  data() {
    return {
      filter: "",
      //   pageTitle fuels a lot of things, including the api call
      pageTitle: "Historic Collections",
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
        },
        { name: "actions", label: "Actions", field: "", align: "center" }
      ],
      data: []
    };
  },
  methods: {
    deleteItem(item) {
      console.log(item);
      this.deleteItemData = item;
      this.showDeleteDialog = true;
    }
  },
  created() {
    console.log("edit collge publications.vue");
    (async () => {
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

          subject: item.subject.replace(re, "")
        });
        this.$store.commit("SET_ITEM_COUNT", this.data.length);
        this.loading = false;
      });
    })();
  }
};
</script>
