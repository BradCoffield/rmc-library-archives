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
            This is a bit of information about the collection. Deserunt ut nulla
            aliqua qui eiusmod deserunt tempor dolore amet ipsum dolore. Laboris
            sunt eiusmod labore ipsum esse. Laboris mollit eiusmod commodo et
            non dolore officia officia aute sint.
          </p>
          <p class="text-body1">
            Deserunt ut nulla aliqua qui eiusmod deserunt tempor dolore amet
            ipsum dolore. Laboris sunt eiusmod labore ipsum esse. Laboris mollit
            eiusmod commodo et non dolore officia officia aute sint.
          </p>
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
