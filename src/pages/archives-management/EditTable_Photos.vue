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
  name: "EditTablePhotos",
  components: { EditTable },
  data() {
    return {
      filter: "",
      //   pageTitle fuels a lot of things, including the api call
      pageTitle: "Photos",
      loading: true,
      columns: [
        {
          label: "File Name",
          name: "filename",
          sortable: true,
          field: "filename",
          align: "left",
          style: "max-width: 200px"
        },

        {
          label: "Date",
          name: "date",
          field: "date",
          sortable: true,
          align: "left"
        },
        {
          label: "Institution",
          name: "institution",
          field: "institution",
          sortable: true,
          align: "left"
        },
        {
          label: "Subjects",
          name: "subjects",
          field: "subjects",
          sortable: true,
          align: "left",
          style: "max-width: 500px"
        },
        {
          label: "Notes",
          name: "notes",
          field: "notes",
          sortable: true,
          align: "left",
          style: "max-width: 200px"
        },

        {
          label: "Archives Location",
          name: "filelocation",
          field: "filelocation",
          sortable: true,
          align: "left"
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
    console.log("edit photos");
    (async () => {

//       let snapshot = await this.$firestore.collection("photos").get({ source: 'cache' }
// if (!snapshot.exists) {
//     snapshot = await documentRef.get({ source: 'server' })
// }

      let res = await getArchivesAPI(
        this.pageTitle.replace(" ", "_").toLowerCase()
      );

      res.forEach(photo => {
        let re = /(\\)/g;
        let re2 = /(NULL)/;
        let reNameStuff = /(,;)/;
        let subject1,
          subject2,
          subject3,
          subject4,
          subject5,
          subject6,
          subject7,
          subject8;

        if (photo.subject1 && photo.subject1 != "NULL") {
          subject1 = photo.subject1.replace(re, "").replace(re2, "");
        } else if (photo.subject1 == "NULL") {
          subject1 = null;
        }

        if (photo.subject2 && photo.subject2 != "NULL") {
          subject2 = photo.subject2.replace(re, "").replace(re2, "");
        } else {
          subject2 = null;
        }

        if (photo.subject3 && photo.subject3 != "NULL") {
          subject3 = photo.subject3.replace(re, "").replace(re2, "");
        } else {
          subject3 = null;
        }

        if (photo.subject4 && photo.subject4 != "NULL") {
          subject4 = photo.subject4.replace(re, "").replace(re2, "");
        } else {
          subject4 = null;
        }

        if (photo.subject5 && photo.subject5 != "NULL") {
          subject5 = photo.subject5.replace(re, "").replace(re2, "");
        } else {
          subject5 = null;
        }

        if (photo.subject6 && photo.subject6 != "NULL") {
          subject6 = photo.subject6.replace(re, "").replace(re2, "");
        } else {
          subject6 = null;
        }
        if (photo.subject7 && photo.subject7 != "NULL") {
          subject7 = photo.subject7.replace(re, "").replace(re2, "");
        } else if (photo.subject7 == "NULL") {
          subject7 = null;
        }

        if (photo.subject8 && photo.subject8 != "NULL") {
          subject8 = photo.subject8.replace(re, "").replace(re2, "");
        } else {
          subject8 = null;
        }

        let arrayOfSubjects = [
          subject1,
          subject2,
          subject3,
          subject4,
          subject5,
          subject6,
          subject7,
          subject8
        ];
        this.data.push({
          date: photo.date.replace(re, ""),
          filelocation: photo.filelocation.replace(re, ""),
          filename: photo.filename.replace(re, ""),
          id: photo.id,
          institution: photo.institution.replace(re, ""),
          notes: photo.notes.replace(re, ""),

          subjects: arrayOfSubjects
            .filter(Boolean)
            .join("; ")
            .replace(reNameStuff, ",")
        });
        this.$store.commit("SET_ITEM_COUNT", this.data.length);
        this.loading = false;
      });
    })();
  }
};
</script>
