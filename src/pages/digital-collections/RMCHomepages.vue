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
            <a    href="https://photos.rocky.edu/"
                  target="_blank" style="color:inherit">
                <q-btn
                  label="Explore recent homepages"
               
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
    return { collectionTitle: "Rocky.edu Homepages",
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
