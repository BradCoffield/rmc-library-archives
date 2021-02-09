<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-table title="Treats" :data="data" :columns="columns" row-key="name" />
    </div>
  </q-page>
</template>

<script>
import { axios } from "boot/axios";
export default {
  name: "collections_photos",

  data() {
    return {
      columns: [
        {
          label: "File Name",
          name: "filename",
          sortable: true,
          field: "filename",
          align: "left",
          // classes: 'bg-accent ellipsis',
          style: "max-width: 200px"
          // headerClasses: 'bg-secondary text-bold text-black'
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
        {
          label: "Subject One",
          name: "subject1",
          field: "subject1",
          sortable: true,
          align: "left"
        },
        {
          label: "Subject Two",
          name: "subject2",
          field: "subject2",
          sortable: true,
          align: "left"
        },
        {
          label: "Subject Three",
          name: "subject3",
          field: "subject3",
          sortable: true,
          align: "left"
        },
        {
          label: "Subject Four",
          name: "subject4",
          field: "subject4",
          sortable: true,
          align: "left"
        },
        {
          label: "Subject Five",
          name: "subject5",
          field: "subject5",
          sortable: true,
          align: "left"
        },
        {
          label: "Subject Six",
          name: "subject6",
          field: "subject6",
          sortable: true,
          align: "left"
        },
        {
          label: "Subject Seven",
          name: "subject7",
          field: "subject7",
          sortable: true,
          align: "left"
        },
        {
          label: "Subject Eight",
          name: "subject8",
          field: "subject8",
          sortable: true,
          align: "left"
        }
        // { name: "actions", label: "Actions", field: "", align: "center" }
      ],
      data: []
    };
  },
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
        let re = /(\\)/g
        this.data.push({
          date: photo.date.replace(re, ""),
          filelocation: photo.filelocation,
          filename: photo.filename,
          id: photo.id,
          institution: photo.institution,
          notes: photo.notes,
          subject1: photo.subject1,
          subject2: photo.subject2.replace("\\", ""),
          subject3: "Staff",
          subject4: "Stiffler",
          subject5: "C R",
          subject6: "",
          subject7: "",
          subject8: ""
        });
      });
    })();
  }
};
</script>
