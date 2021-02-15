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
      <PCTable :name="pageTitle" :columns="columns" :data="data" sortBy="contents" :loading="loading" ></PCTable>
    </div> -->
  </q-page>
</template>

<script>
import PCTable from "components/PhysicalCollectionsTable.vue";
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
        }

        // { name: "actions", label: "Subjects", field: "", align: "center" }
      ],
      data: []
    };
  },
  created() {
    console.log("photos");
    (async () => {
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
          date: item.date.replace(re, ""),
          contents: item.contents.replace(re, ""),
          notes: item.notes.replace(re, ""),
          id: item.id,
          number: item.number.replace(re, ""),

          school: item.school.replace(re, "")
        });
        this.loading = false;
      });
    })();
  }
};
</script>
