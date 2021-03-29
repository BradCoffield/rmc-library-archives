<template>
  <q-page>
    <div>
      <q-card class="q-pa-md bg-dark q-mb-xl q-mt-xl text-primary header-card">
        <h2>Please Login</h2></q-card
      >
      <div v-if="!this.$store.state.user">
        <div id="firebaseui-auth-container"></div>
      </div>
      <div v-else>
        You are logged in as {{ this.$store.state.user.displayName }}
      </div>
    </div>
  </q-page>
</template>

<script>
import firebase from "firebase/app";
import "firebaseui/dist/firebaseui.css";
// import firebaseui from 'firebaseui'
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      
    };
  },

  mounted() {
    const firebaseui = require("firebaseui");
    var ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.$fireAuth);
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      
      callbacks: {
        signInSuccessWithAuthResult(authResult) {
          this.$router.push("/");
          console.log("signInSuccessWithAuthResult");
          // console.log(authResult);
          
          console.log("here")
          return false;
        },
        uiShown: function() {
          console.log("uiShown");
        }
      }
      // Other config options...
    });
  },
  methods: {
    signOut() {
      console.log("signOut");
      this.$fireAuth.signOut();
    }
  }
};
</script>
