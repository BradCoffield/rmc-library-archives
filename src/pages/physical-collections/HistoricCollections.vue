<template>
  <q-page class="q-pa-lg" id="primary-page-wrap" style="">
    <h2 class="text-center text-uppercase">{{ collectionTitle }}</h2>
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
         The Archives Historic Collections includes materials on the now distant workings and history of
Rocky Mountain College&#39;s antecedent institutions including Intermountain Union College,
Wesleyan College and the College of Montana. It also includes historical documents of Rocky
Mountain College including program development, athletics and community outreach.        </p>
       
          <div id="view-collection-details-button">
            <q-btn
              label="Browse and search the collection"
              to="historic-collections/view-all"
              icon-right="keyboard_arrow_right"
              padding="md"
            >
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      collectionTitle: "Historic Collections",
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
