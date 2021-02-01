<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
  </q-page>
</template>

<script>
import { axios } from "boot/axios";
export default {
  name: "PageIndex",
  created() {
    console.log("hiiiiiiiiiiiii");

    axios.get("http://localhost:8000/db").then(resp => {
      console.log(resp.data);
    });

    (async () => {
      let res = await axios.get("http://localhost:8000/db");

      let data = res.data;
      console.log("11", data);
    })();
  }
};
</script>
