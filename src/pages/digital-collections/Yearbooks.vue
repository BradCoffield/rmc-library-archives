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
            Generously digitized by the Internet Archive and hosted by the Montana Memory Project this collection goes back to 1910 and has the vast majority of the yearbooks published in the interim.
          </p>
          <p class="text-body1">
           You are able to flip through each page and really explore the history of the school in a fun way. Check it out!
          </p>
          <div id="view-collection-details-button">
            <a    href="https://mtmemory.org/digital/collection/p103401ccp2_ew1"
                  target="_blank" style="color:inherit">
                <q-btn
                  label="View online yearbooks"
               
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
    return { collectionTitle: "Online Yearbooks",
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
