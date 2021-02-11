<template>
  <div class="q-pa-md">
    <!-- <q-table
      title=" "
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination="initialPagination"
      :filter="filter"
    /> -->


      <q-table
        title="Photos"
        :data="data"
        :columns="columns"
        row-key="id"
        :pagination="initialPagination"
        :filter="filter"
 
      >
            <template v-slot:top-right>
            <q-space />
            <q-input outlined bg-color="primary" debounce="300" color="grey-14" v-model="filter" label="Search">
              <template v-slot:append>
                <q-icon name="search" color="grey-14" />
              </template>
            </q-input>
          </template>
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th style="width:200px"/>
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

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
        </template>
      </q-table>
  </div>
</template>

<script>
export default {
  name: "PhysicalCollectionsTable",
  props: { name: String, columns: Array, data: Array },
  data() {
    return {
      filter: "",
      initialPagination: {
        sortBy: "id",
        descending: false,
        page: 1,
        rowsPerPage: 25
        // rowsNumber: xx if getting data from a server
      }
    };
  }
};
</script>
