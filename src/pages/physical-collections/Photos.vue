<template>
  <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <h2 class="text-center text-uppercase">Photos</h2>
    <div class="row wrap">
      <div class="col-xs-12 col-md-6 ">
        <div class="q-ma-xl">
          <q-img :src="collectionImage" alt="">
            <div class="absolute-bottom text-subtitle1 text-center">
              {{ thumbnailTitle }}
            </div>
          </q-img>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="q-ma-xl">
          <p class="text-body1">
            More than six and a half thousand images! We have preserved photographs from throughout the history of Rocky Mountain College and its antecedent institutions.
          </p>
          <p class="text-body1">
          A wide range of topics are included. From athletics, student events, and casual student life, to images of notable events and figures from the history of RMC.
          
          </p>
          <div id="view-collection-details-button">
            <q-btn
            label="Browse and search the collection"
            to="photos/view-all"
            
            icon-right="keyboard_arrow_right"
            padding="md">
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data(){return{  collectionTitle: "Photos",
      physicalCollectionsMetadata: this.$store.state
        .physicalCollectionsMetadata,
      collectionImage: "",
      thumbnailTitle: ""
    };
  },
  created() {
    this.physicalCollectionsMetadata.forEach(metadata => {
      if (metadata.name == this.collectionTitle) {
        this.collectionImage = metadata.thumbnail;
        this.thumbnailTitle = metadata.thumbnailTitle;
      }
    });
  }
};
</script>

<style></style>
