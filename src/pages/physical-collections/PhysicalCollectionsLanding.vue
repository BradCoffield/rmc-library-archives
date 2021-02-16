<template>
  <div>
    this is physical collections landing
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("title:", this.$store.state.pageTitle);
    // this.$store.commit("SET_PAGE_TITLE", "new title");
    console.log("title:", this.$store.state.pageTitle);
  },
 
};
</script>

<style></style>
