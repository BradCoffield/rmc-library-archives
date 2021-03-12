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
            
            The Heritage Archives are located in the DeRosier Educational
            Resource Center and maintained by library staff. We are available to assist you in locating materials of interest for your research. Archives materials are not permitted to be checked out like typical library materials. You may wish to consult the archives policies for <router-link to="archives-policy">more details</router-link>.

            <p class="text-body1">
              The archives may be accessed by appointment: Monday - Friday:
              8:30 a.m. - 4:30 p.m.
            
      
            To make an appointment please email us at 
            <a href="mailto:library@rocky.edu">library@rocky.edu</a> or call 
            406-657-1087.
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
