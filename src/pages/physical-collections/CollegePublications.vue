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
            As you might expect, the Archives collects physical yearbooks from
            Rocky Mountain College and it&#39;s antecedent institutions. Also in
            our College Publications collection are materials that are the
            result of student efforts like literary journals, newspapers and
            dramatic production programs.
          </p>
          <p class="text-body1">
            In addition to these types of materials the Archives is also
            responsible for collecting and maintaining important records and
            artifacts that are created throughout the routine workings of the
            college. These include course catalogs, faculty meeting minutes, and
            accreditation process output.
          </p>
          <div id="view-collection-details-button">
            <q-btn
              label="Browse and search the collection"
              to="college-publications/view-all"
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
      collectionTitle: "College Publications",
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
