<template>
  <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <!-- <h2 class="text-center text-uppercase">Preserving our history</h2> -->

    <h2 class="text-left text-uppercase">OVERVIEW</h2>
    <div class="row">
      <div class="col-md-8">
        <p class="text-body1">
          The Heritage Archives were established by interested alumni, staff,
          faculty, and students of Rocky Mountain College to acquire, preserve,
          and illustrate the history and development of Rocky Mountain College,
          Billings Polytechnic Institute, Intermountain Union College, Montana
          Wesleyan College, the College of Montana, and Montana Collegiate
          Institute.
        </p>
        <p class="text-body1 q-mb-lg">
          The Archives collection is comprised of materials whose primary
          purpose is for research by alumni, students, and the public. Material
          will generally relate to the history of Rocky Mountain College and
          will include manuscripts, records, photographic materials, pamphlets,
          programs, school-related publications, publications of alumni
          yearbooks, and records of organizations and offices on campus.
        </p>
   
      </div>

      <div class="col-md-4">
        <!-- <h3 class=" q-mb-md text-h5">Access &amp; Policies</h3> -->
        <div class="callout-block sans-serif">
          <p class=" ">
            The Heritage Archives are located in the DeRosier Educational
            Resource Center and may be accessed by appointment:
            Monday - Friday: 8:30 a.m. - 4:30 p.m.
          </p>
          <p>
            <a href="mailto:library@rocky.edu">library@rocky.edu</a> |
            406-657-1087
          </p>
        </div>
      </div>
    </div>
    <h2 class="text-left text-uppercase" style="margin-bottom:5px;">Collections</h2>
    <div class="row  wrap">
      <div class="col-12">
        <h3 class="text-uppercase">Physical</h3>
      </div>

      <template v-for="link in physicalCollectionsMetadata">
        <div class="col-md-3 col-xs-12 col-sm-6" :key="link.name">
          <div class="q-pa-md ">
            <router-link :to="link.route">
              <q-img :src="'https://via.placeholder.com/350x200'" alt="" >
                <div class="absolute-bottom text-subtitle1 text-center">
                  {{ link.name }}
                </div>
              </q-img>
            </router-link>
          </div>
        </div>
        </template>

      
      </div>
       <div class="row  wrap">
      <div class="col-12">
        <h3 class="text-uppercase">Digital</h3>
      </div>
     <template v-for="link in digitalCollectionsMetadata">
        <div class="col-md-3 col-xs-12 col-sm-6" :key="link.name">
          <div class="q-pa-md ">
            <router-link :to="link.route">
              <q-img :src="'https://via.placeholder.com/350x200'" alt="" >
                <div class="absolute-bottom text-subtitle1 text-center">
                  {{ link.name }}
                </div>
              </q-img>
            </router-link>
          </div>
        </div>
        </template>
       </div>
  </q-page>
</template>

<script>
// import { axios } from "boot/axios";
export default {
  name: "PageIndex",
  created() {
    console.log("hiiiiiiiiiiiii");
  },
  data() {
    return {
      physicalCollectionsMetadata: this.$store.state.physicalCollectionsMetadata,
      digitalCollectionsMetadata: this.$store.state.digitalCollectionsMetadata
    };
  }
};
</script>
