<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-card class="q-pa-md bg-dark q-mb-xl q-mt-xl text-primary header-card">
        <h2>{{ pageTitle }}</h2>
        <!-- <span> Total items: {{ data.length }}</span> -->
        
      </q-card>
      <q-card>
            <img src="RMC-Digitized-Yearbooks-1.png" style="max-width:550px" class="q-ma-xl" alt=""> <p>Hey, here's some text.</p>
        </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
 name: "yearbooks",
  components: {},
  data() {
    return {
        pageTitle: "Yearbooks"
    }
}}
</script>

<style>

</style>