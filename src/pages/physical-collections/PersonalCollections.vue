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
            Personal and professional papers and other materials related to a variety of important figures in
the history of RMC. Including collections from Arthur DeRosier, Lawrence Small, Ernest T.
Eaton and Lewis &amp; Mary Eaton.        </p>
          <div id="view-collection-details-button">
            <q-btn
              label="Browse and search the collection"
              to="personal-collections/view-all"
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
      collectionTitle: "Personal Collections",
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
