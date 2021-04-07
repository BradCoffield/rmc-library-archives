<template>
  <q-page>
    <h2 class="text-center text-uppercase">Add to Personal Collections</h2>

    <q-card class=" q-mt-xl">
      <q-form @submit="sendSub" @reset="onReset" class="   q-pa-xl">
        <q-input
          v-model="item.firstname"
          label="First Name"
          required
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.lastname"
          label="Last Name"
          required
          standout="bg-dark text-white"
        ></q-input>

     

    
        <q-input
          v-model="item.number"
          label="Archive Location"
          standout="bg-dark text-white"
        ></q-input>

        <div>
          <q-btn label="Submit" type="submit" color="grey-8" />
          <q-btn
            label="Reset"
            type="reset"
            color="grey-8"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </q-card>
    <success-dialog
      :show="successDialogShow"
      :showClearForm="true"
      @clearForm="this.onReset"
      @closeDialog="this.successDialogShow = false"
    ></success-dialog>
    <error-dialog
      :show="errorDialogShow"
      @closeDialog="this.errorDialogShow = false"
    ></error-dialog>
  </q-page>
</template>
<script>
import { nanoid } from "nanoid";
import SuccessDialog from "components/SuccessDialog.vue";
import ErrorDialog from "components/ErrorDialog.vue";
export default {
  name: "AddPersonalCollection",
  components: { SuccessDialog, ErrorDialog },
  data() {
    return {
      pageTitle: "Personal Collections",
      successDialogShow: false,
      errorDialogShow: false,

      item: {
        firstname: "",
        lastname: "",
        id: "",
        number: ""
      }
    };
  },
  created() {},
  methods: {
    getDate() {
      let date = new Date();
      return date.toISOString();
    },
    sendSub(evt) {
      let here = this;
      evt.preventDefault();
      //we need an id created so have a key for table later
      this.item.id = nanoid();
      this.$firestore
        .collection(this.pageTitle.replace(" ", "_").toLowerCase())
        .doc(this.item.id)
        .set(this.item)
        .then(function() {
          console.log("Document successfully written!");
          here.successDialogShow = true;
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
          here.errorDialogShow = true;
        });
    },

    onReset() {
      this.successDialogShow = false;
      this.item.date = "";
      this.item.contents = "";
      this.item.notes = "";
      this.item.id = "";
      this.item.number = "";
      this.item.school = "";
    }
  }
};
</script>

<style scoped>
.q-input {
  margin: 2rem 0;
}
.q-textarea {
  margin: 2rem 0;
}
</style>
