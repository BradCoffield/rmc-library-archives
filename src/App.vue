<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  //  methods: {
  //    ...mapActions('store', ['handleAuthStateChanged'])
  //  },
   mounted(){
    //  this.handleAuthStateChanged()
    this.$store.dispatch('handleAuthStateChanged')
   }
};
</script>
<style lang="scss">



</style>
