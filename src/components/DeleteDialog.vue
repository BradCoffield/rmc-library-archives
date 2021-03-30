<template>
  <div>
    <!-- Dialogs -->
    <!-- Delete Item Confirmation -->
    <q-dialog v-model="show" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="red" text-color="white" />
          <span class="q-ml-sm"
            >Are you sure you want to delete this item?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="secondary" v-close-popup />
          <q-btn
            flat
            label="Delete"
            color="white"
            class="bg-red"
            v-close-popup
            @click="actuallyDelteItem()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Item Deletion Err/Succ -->
    <q-dialog v-model="deleteSuccess" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="done_outline" color="dark" text-color="white" />
          <span class="q-ml-sm">Item successfully deleted.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="secondary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="deleteFailure" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="" color="dark" text-color="white" />
          <span class="q-ml-sm">Error deleting item.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="secondary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: false
    },
 
  },
  data() {
    return {
      deleteSuccess: false,
      deleteFailure: false,
       ref: this.$firestore.collection("submissions")
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    actuallyDelteItem() {
      let here = this
      this.ref
        .doc(this.item.key)
        .delete()
        .then(function() {
          // console.log("uid", firebase.auth().user.uid);
          console.log("Document successfully deleted!");
          here.deleteSuccess = true;
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
          here.deleteFailure = true;
        });
    }
  }
};
</script>

<style></style>
