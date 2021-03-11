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
            An online collection of digital photos, including some digitized historical photos, that enables easy browsing and download.
          </p>
          <p class="text-body1">
            This is a collection that is consistently expanded with photos from current Rocky events!
          </p>
          <div id="view-collection-details-button">
            <a    href="https://photos.rocky.edu/"
                  target="_blank" style="color:inherit">
                <q-btn
                  label="Browse photos.rocky.edu"
               
                  icon-right="keyboard_arrow_right"
                  padding="md"
                >
            </q-btn>  </a>
          
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return { collectionTitle: "Digital Photos",
      digitalCollectionsMetadata: this.$store.state
        .digitalCollectionsMetadata,
      collectionImage: "",
      thumbnailTitle: ""
    };
  },
  created() {
    this.digitalCollectionsMetadata.forEach(metadata => {
      if (metadata.name == this.collectionTitle) {
        this.collectionImage = metadata.thumbnail;
        this.thumbnailTitle = metadata.thumbnailTitle;
      }
    });
  }
};
</script>

<style></style>
