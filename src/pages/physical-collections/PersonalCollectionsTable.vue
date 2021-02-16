<template>
  <q-page>
    <PCTable
      :name="pageTitle"
      :columns="columns"
      :data="data"
      sortBy="contents"
      :loading="loading"
    ></PCTable>
    <!-- <div class="q-pa-md">
      <q-card class="q-pa-md bg-dark q-mb-xl q-mt-xl text-primary header-card">
        <h2>{{ pageTitle }}</h2>
        <span> Total items: {{ data.length }}</span>
      </q-card>
      <PCTable
        :name="pageTitle"
        :columns="columns"
        :data="data"
        sortBy="contents"
        :loading="loading"
      ></PCTable>
    </div> -->
  </q-page>
</template>

<script>
import PCTable from "components/PhysicalCollectionsTable.vue";
import getArchivesAPI from "assets/getArchivesAPI.js";
export default {
  name: "personal_collections",
  components: { PCTable },
  data() {
    return {
      loading: true,
      pageTitle: "Personal Collections",
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
        }

        // { name: "actions", label: "Subjects", field: "", align: "center" }
      ],
      data: []
    };
  },
  created() {
    
    (async () => {
      this.$store.commit('SET_PAGE_TITLE', this.pageTitle)
      let res = await getArchivesAPI(
        this.pageTitle.replace(" ", "").toLowerCase()
      );

      let rawData = res.data;
      console.log(rawData);
      rawData.forEach(item => {
        let re = /(\\)/g;
        // let re2 = /(NULL)/;
        // let reNameStuff = /(,;)/

        this.data.push({
          firstname: item.firstname.replace(re, ""),
          lastname: item.lastname.replace(re, ""),
          id: item.id,
          number: item.number.replace(re, "")
        });
         this.$store.commit('SET_ITEM_COUNT', this.data.length)
        this.loading = false;
      });
    })();
  }
};
</script>
