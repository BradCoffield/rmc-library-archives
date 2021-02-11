<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card class="q-pa-md bg-dark q-mb-xl q-mt-xl text-primary header-card">
        <h2>Search Results</h2>
      </q-card>

      <PCTable name="ehhhh" :columns="columns" :data="data"></PCTable>
    </div>
  </q-page>
</template>

<script>
import PCTable from "components/PhysicalCollectionsTable.vue";
import { axios } from "boot/axios";
// import getArchivesAPI from "assets/getArchivesAPI.js"
 

export default {
  name: "Search",
  components: { PCTable },
   created() {
    console.log("photos");
    
    (async () => {
      let res = await axios.get(
        "https://rmc-library-archives.herokuapp.com/collection/photos/"
      );

      let rawData = res.data;
      console.log(rawData);
      rawData.forEach(photo => {
        // this.data.push(photo);
        let re = /(\\)/g;
        let re2 = /(NULL)/;
        this.data.push({
          date: photo.date.replace(re, ""),
          filelocation: photo.filelocation.replace(re, ""),
          filename: photo.filename.replace(re, ""),
          id: photo.id,
          institution: photo.institution.replace(re, ""),
          notes: photo.notes.replace(re, ""),
          subject1: photo.subject1.replace(re, "").replace(re2, ""),
          subject2: photo.subject2.replace(re, "").replace(re2, ""),
          subject3: photo.subject3.replace(re, "").replace(re2, ""),
          subject4: photo.subject4.replace(re, "").replace(re2, ""),
          subject5: photo.subject5.replace(re, "").replace(re2, ""),
          subject6: photo.subject6.replace(re, "").replace(re2, ""),
          subject7: photo.subject7.replace(re, "").replace(re2, ""),
          subject8: photo.subject8.replace(re, "").replace(re2, "")
        });
      });
    })();
  },
  data() {
    return {
         columns: [
        {
          label: "File Name",
          name: "filename",
          sortable: true,
          field: "filename",
          align: "left",
        //   classes: 'bg-accent ellipsis',
          style: "max-width: 200px"
          // headerClasses: 'bg-secondary text-bold text-fs14p q-ma-sm'
          // headerClasses: ' text-italic '
        },
        {
          label: "Location",
          name: "filelocation",
          field: "filelocation",
          sortable: true,
          align: "left"
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
          label: "Notes",
          name: "notes",
          field: "notes",
          sortable: true,
          align: "left"
        },
        // {
        //   label: "Subject One",
        //   name: "subject1",
        //   field: "subject1",
        //   sortable: true,
        //   align: "left"
        // },
        // {
        //   label: "Subject Two",
        //   name: "subject2",
        //   field: "subject2",
        //   sortable: true,
        //   align: "left"
        // },
        // {
        //   label: "Subject Three",
        //   name: "subject3",
        //   field: "subject3",
        //   sortable: true,
        //   align: "left"
        // },
        // {
        //   label: "Subject Four",
        //   name: "subject4",
        //   field: "subject4",
        //   sortable: true,
        //   align: "left"
        // },
        // {
        //   label: "Subject Five",
        //   name: "subject5",
        //   field: "subject5",
        //   sortable: true,
        //   align: "left"
        // },
        // {
        //   label: "Subject Six",
        //   name: "subject6",
        //   field: "subject6",
        //   sortable: true,
        //   align: "left"
        // },
        // {
        //   label: "Subject Seven",
        //   name: "subject7",
        //   field: "subject7",
        //   sortable: true,
        //   align: "left"
        // },
        // {
        //   label: "Subject Eight",
        //   name: "subject8",
        //   field: "subject8",
        //   sortable: true,
        //   align: "left"
        // }
        // { name: "actions", label: "Subjects", field: "", align: "center" }
      ],
      data:[]
    };
  }
};
</script>
