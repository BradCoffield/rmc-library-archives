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
  name: "EditPersonalCollections",
  components: { EditTable },
  data() {
    return {
      filter: "",
      //   pageTitle fuels a lot of things, including the api call
      pageTitle: "Personal Collections",
      loading: true,
      columns: [
       {
          label: "First Name",
          name: "firstname",
          sortable: true,
          field: "firstname",
          align: "left",
          //   classes: 'bg-accent ellipsis',
          style: "max-width: 100px"
          // headerClasses: 'bg-secondary text-bold text-fs14p q-ma-sm'
          //   headerClasses: ' text-italic '
        },

        {
          label: "Last Name",
          name: "lastname",
          field: "lastname",
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
          firstname: item.firstname.replace(re, ""),
          lastname: item.lastname.replace(re, ""),
          id: item.id,
          number: item.number.replace(re, "")
        });
        this.$store.commit("SET_ITEM_COUNT", this.data.length);
        this.loading = false;
      });
    })();
  }
};
</script>
