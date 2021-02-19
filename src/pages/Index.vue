<template>
  <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <!-- <h2 class="text-center text-uppercase">Preserving our history</h2> -->
    Well, some sort of content here and invitation into the collections.
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
        <div class="callout-block">
          <p class="text-body2">
            The Heritage Archives are located in the DeRosier Educational
            Resource Center and may be accessed by appointment:
            <em>Monday - Friday: 8:30 a.m. - 4:30 p.m.</em>
          </p>
          <p>
            <a href="mailto:library@rocky.edu">library@rocky.edu</a> |
            406-657-1087
          </p>
        </div>
      </div>
    </div>
    <h2 class="text-left text-uppercase">Collections</h2>
    <div class="row  wrap">
      <div class="col-12">
        <h3 class="text-uppercase">Physical</h3>
      </div>
      <div class="col-md-3 col-xs-12 col-sm-6" >
        <div class="q-pa-md ">
          <q-img
            :src="'https://via.placeholder.com/350x200'"
            alt=""
            img-style="height:200px;"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Photos
            </div>
          </q-img>
        </div>
      </div>
      <div class="col-md-3 col-xs-12 col-sm-6">
        <div class="q-pa-md  ">
          <q-img
            :src="'https://via.placeholder.com/350x200'"
            alt=""
            img-style="height:200px"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Historic Collections
            </div>
          </q-img>
        </div>
      </div>
      <div class="col-md-3 col-xs-12 col-sm-6">
        <div class=" q-pa-md ">
          <q-img
            :src="'https://via.placeholder.com/350x200'"
            alt=""
            img-style="height:200px"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              College Publications
            </div>
          </q-img>
        </div>
      </div>
      <div class="col-md-3 col-xs-12 col-sm-6">
        <div class="q-pa-md  ">
          <q-img
            :src="'https://via.placeholder.com/350x200'"
            alt=""
            img-style="height:200px"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Personal Collections  
            </div>
          </q-img>
        </div>
      </div>
      <div class="col-12">
        <h3 class="text-uppercase">Digital</h3>
      </div>
      <div class="col-md-3 col-xs-12 col-sm-6">
        <div class=" q-pa-md ">
          <q-img
            :src="'https://via.placeholder.com/350x200'"
            alt=""
            img-style="height:200px"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Yearbooks
            </div>
          </q-img>
        </div>
      </div>
      <div class="col-md-3 col-xs-12 col-sm-6">
        <div class=" q-pa-md ">
          <q-img
            :src="'https://via.placeholder.com/350x200'"
            alt=""
            img-style="height:200px"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              Rocky.edu Homepages
            </div>
          </q-img>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { axios } from "boot/axios";
export default {
  name: "PageIndex",
  created() {
    console.log("hiiiiiiiiiiiii");
  }
};
</script>
