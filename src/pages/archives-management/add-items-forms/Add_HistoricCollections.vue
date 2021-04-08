<template>
  <q-page>
    <h2 class="text-center text-uppercase">Add to Historic Collections</h2>

    <q-card class=" q-mt-xl">
      <q-form @submit="sendSub" @reset="onReset" class="   q-pa-xl">
        <q-input
          v-model="item.contents"
          label="Contents"
          required
          standout="bg-dark text-white"
        ></q-input>

        <q-input
          v-model="item.name"
          label="Name"
          standout="bg-dark text-white"
        ></q-input>

        <q-input
          v-model="item.date"
          label="Date"
          standout="bg-dark text-white"
        ></q-input>

 
        <q-input
          v-model="item.subject"
          label="Subject"
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
// import postArchivesAPI from "assets/postArchivesAPI.js";
export default {
  name: "AddHistoricCollection",
  components: { SuccessDialog, ErrorDialog },
  data() {
    return {
      pageTitle: "Historic Collections",
      successDialogShow: false,
      errorDialogShow: false,

      item: {
        date: "",
        contents: "",
 
        id: "",
        number: "",
        subject: "",
        name: ""
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
