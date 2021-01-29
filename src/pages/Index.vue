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
    // const url = new URL("http://localhost:8000/db")
    //  fetch(url)
    //     .then(res => res.json())
    //     .then(function(body) {
    //       console.log(body, "eh!");
    //     });

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
