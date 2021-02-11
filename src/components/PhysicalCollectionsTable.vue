<template>
  <div class=" ">
    <q-table
      title=""
      :data="data"
      :columns="columns"
      row-key="id"
      :pagination="initialPagination"
      :filter="filter"
      :grid="$q.screen.lt.md"
      :wrap-cells="wrapCells"
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
      wrapCells: true,
      initialPagination: {
        sortBy: "date",
        descending: false,
        page: 1,
        rowsPerPage: 25
      }
    };
  }
};
</script>
