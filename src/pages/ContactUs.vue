<template>
  <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <h2 class="text-center text-uppercase">          {{collectionTitle}}</h2>
    <div class="row wrap">
      <div class="col-xs-12 col-md-6 ">
        <div class="q-ma-xl">
          <q-img :src="'https://www.rocky.edu/sites/default/files/library-building-outside-02.jpg'" alt="">
            <div class="absolute-bottom text-subtitle1 text-center">
              RMC Library
            </div>
          </q-img>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="q-ma-xl">
          <p class="text-body1">
            This is a bit of information about the collection. Deserunt ut nulla aliqua qui eiusmod deserunt tempor dolore amet
            ipsum dolore. Laboris sunt eiusmod labore ipsum esse. Laboris mollit
            eiusmod commodo et non dolore officia officia aute sint.
          </p>
          <p class="text-body1">
            Deserunt ut nulla aliqua qui eiusmod deserunt tempor dolore amet
            ipsum dolore. Laboris sunt eiusmod labore ipsum esse. Laboris mollit
            eiusmod commodo et non dolore officia officia aute sint.
          </p>
    
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data(){return{  collectionTitle: "Contact Us"}}

};
</script>

<style></style>
