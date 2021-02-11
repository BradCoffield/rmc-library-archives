<template>
  <q-page padding>
    <!-- <q-page class="flex flex-center"> -->
    <div class="q-pa-md">
      <q-card class="q-pa-md bg-dark q-mb-xl q-mt-xl text-primary header-card">
        <h2>Photos</h2>
        <span> Total items: {{data.length}}</span>
      </q-card>
    
      <q-table
        title=""
        :data="data"
        :columns="columns"
        row-key="id"
        :pagination="initialPagination"
        :filter="filter"
        :grid="$q.screen.lt.md"
        wrap-cells="true"
      >
        <template v-slot:top-right>
          <q-space />
          <q-input
            outlined
            bg-color="primary"
            debounce="300"
            color="grey-14"
            v-model="filter"
            label="Search"
          >
            <template v-slot:append>
              <q-icon name="search" color="grey-14" />
            </template>
          </q-input>
        </template>
        <!-- <template v-slot:header="props">
          <q-tr :props="props">
            <q-th style="width:200px" />
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template> -->
        <!-- 
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td style="width:150px">
              <q-btn
                size="sm"
                color="grey-14"
                @click="props.expand = !props.expand"
                :icon="props.expand ? 'remove' : 'add'"
                :label="props.expand ? 'Close' : 'View Subjects'"
              />
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div
                class="text-left fs14p q-ma-sm"
                v-if="props.row.subject1 && props.row.subject8 != 'NULL'"
              >
                Subject One: {{ props.row.subject1 }}
              </div>
              <div
                class="text-left fs14p q-ma-sm"
                v-if="props.row.subject2 && props.row.subject8 != 'NULL'"
              >
                Subject Two: {{ props.row.subject2 }}
              </div>
              <div
                class="text-left fs14p q-ma-sm"
                v-if="props.row.subject3 && props.row.subject8 != 'NULL'"
              >
                Subject Three: {{ props.row.subject3 }}
              </div>
              <div
                class="text-left fs14p q-ma-sm"
                v-if="props.row.subject4 && props.row.subject8 != 'NULL'"
              >
                Subject Four: {{ props.row.subject4 }}
              </div>
              <div
                class="text-left fs14p q-ma-sm"
                v-if="props.row.subject5 && props.row.subject8 != 'NULL'"
              >
                Subject Five: {{ props.row.subject5 }}
              </div>
              <div
                class="text-left fs14p q-ma-sm"
                v-if="props.row.subject6 && props.row.subject8 != 'NULL'"
              >
                Subject Six: {{ props.row.subject6 }}
              </div>
              <div
                class="text-left fs14p q-ma-sm"
                v-if="props.row.subject7 && props.row.subject8 != 'NULL'"
              >
                Subject Seven: {{ props.row.subject7 }}
              </div>
              <div
                class="text-left fs14p q-ma-sm"
                v-if="props.row.subject8 && props.row.subject8 != 'NULL'"
              >
                Subject Eight: {{ props.row.subject8 }}
              </div>
            </q-td>
          </q-tr>
        </template> -->
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { axios } from "boot/axios";
export default {
  name: "collections_photos",

  data() {
    return {
      filter: "",
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
        },   {
          label: "Subjects",
          name: "subjects",
          field: "subjects",
          sortable: true,
          align: "left"
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
      data: [],
      initialPagination: {
        sortBy: "id",
        descending: false,
        page: 1,
        rowsPerPage: 25
        // rowsNumber: xx if getting data from a server
      }
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
        // console.log(photo.subject8)
        let re = /(\\)/g;
        let re2 = /(NULL)/;
        let reNameStuff = /(,;)/
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

          subjects: arrayOfSubjects.filter(Boolean).join("; ").replace(reNameStuff, ",")
        });
      });
    })();
  }
};
</script>
