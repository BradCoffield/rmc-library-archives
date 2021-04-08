<template>
  <q-page>
    <h2 class="text-center text-uppercase">Edit Photos Item</h2>

    <q-card class=" q-mt-xl">
      <q-form @submit="sendSub" @reset="onReset" class="   q-pa-xl">
         <q-input
          v-model="item.filename"
          label="File Name"
          required
          standout="bg-dark text-white"
        ></q-input>    <q-input
          v-model="item.date"
          label="Date"
          required
          standout="bg-dark text-white"
        ></q-input>
   
        <q-input
          v-model="item.institution"
          label="Institution"
          required
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.notes"
          label="Notes"
          required
          standout="bg-dark text-white"
        ></q-input>

        <q-input
          v-model="item.filelocation"
          label="Archive Location"
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.subject1"
          label="Subject One"
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.subject2"
          label="Subject Two"
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.subject3"
          label="Subject Three"
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.subject4"
          label="Subject Four"
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.subject5"
          label="Subject Five"
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.subject6"
          label="Subject Six"
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.subject7"
          label="Subject Seven"
          standout="bg-dark text-white"
        ></q-input>
        <q-input
          v-model="item.subject8"
          label="Subject Eight"
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
import SuccessDialog from "components/SuccessDialog.vue";
import ErrorDialog from "components/ErrorDialog.vue";
export default {
  name: "EditFormPhotos",
  components: { SuccessDialog, ErrorDialog },
  data() {
    return {
      pageTitle: "Photos",
      successDialogShow: false,
      errorDialogShow: false,

      item: {
        date: "",
        filelocation: "",
        filename: "",
        id: "",
        institution: "",
        notes: "",
        subject1: "",
        subject2: "",
        subject3: "",
        subject4: "",
        subject5: "",
        subject6: "",
        subject7: "",
        subject8: ""
      }
    };
  },
  created() {
 
    console.log(this.$route.params.id);
    this.$firestore
      .collection("photos")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          let thang = doc.data();
          this.item.date
        this.item.filelocation = thang.filelocation
        this.item.filename = thang.filename
        this.item.id = thang.id
        this.item.institution = thang.institution
        this.item.notes = thang.notes
        this.item.subject1 = thang.subject1
        this.item.subject2 = thang.subject2
        this.item.subject3 = thang.subject3
        this.item.subject4 = thang.subject4
        this.item.subject5 = thang.subject5
        this.item.subject6 = thang.subject6
        this.item.subject7 = thang.subject7
        this.item.subject8 = thang.subject8
        } else {
          alert("No such document!");
        }
      });
  },
  methods: {
    getDate() {
      let date = new Date();
      return date.toISOString();
    },
    sendSub(evt) {
      let here = this;
      evt.preventDefault();

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
