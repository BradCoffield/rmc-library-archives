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
      :loading="loading"
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
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="editItem(props)"
            icon="edit"
            ><q-tooltip content-style="font-size: 16px">Edit</q-tooltip></q-btn
          >

          <q-btn
            dense
            round
            flat
            color="grey"
            @click="deleteItem(props)"
            icon="delete"
            ><q-tooltip content-style="font-size: 16px"
              >Delete</q-tooltip
            ></q-btn
          >
        </q-td>
      </template>
    </q-table>
    <delete-dialog
      :show="showDeleteDialog"
      :item="deleteItemData"
      :collectionName="collection"
    ></delete-dialog>
  </div>
</template>

<script>
import DeleteDialog from "components/DeleteDialog.vue";

export default {
  name: "EditPhysicalCollectionsTable",
  components: { DeleteDialog },
  props: {
    name: String,
    columns: Array,
    data: Array,
    sortBy: String,
    loading: Boolean,
    collection: String
  },
  computed: {
    // collectionFormatted() {
    //    return "college_publications"
    // }
  },
  data() {
    return {
      filter: "",
      showDeleteDialog: false,
      deleteItemData: {},
      wrapCells: true,
      // collectionFormatted: this.collection.replace(" ", "_").toLowerCase(),
      initialPagination: {
        sortBy: this.sortBy,
        descending: false,
        page: 1,
        rowsPerPage: 25
      }
    };
  },

  methods: {
    editItem(item) {
      console.log("edit item");
      console.log("OOO", item, this.collection);
     
      if (this.collection == "College Publications") {
        console.log("ehhhCP", item.uid, item.key, item.id);
        this.$router.push({
        name: "edit-college-publications-item",
        params: { id: item.key || item.uid }
      });
      }
      if (this.collection == "Historic Collections") {
        console.log("ehhhHC", item.uid, item.key, item.id);
        this.$router.push({
        name: "edit-historic-collections-item",
        params: { id: item.key || item.id }
      });
      }
      if (this.collection == "Personal Collections") {
        console.log("ehhhPC", item.uid, item.key, item.id);
        this.$router.push({
        name: "edit-personal-collections-item",
        params: { id: item.key || item.id }
      });
      }
      if (this.collection == "Photos") {
        console.log("ehhhPH", item.uid, item.key, item.id);
        this.$router.push({
        name: "edit-photos-item",
        params: { id: item.key || item.id }
      });
      }

     
    },
    deleteItem(item) {
      console.log("in edit table component", item, item.key);
      this.deleteItemData = item;
      this.showDeleteDialog = true;
    }
  }
};
</script>
