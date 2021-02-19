<template>
   <q-toolbar id="secondary-toolbar" class="gt-sm">
      <q-space /> 

      <!-- <q-btn flat label="Phsysical Collections" class="q-mr-sm q-ml-sm lt-md">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup to="/collections/physical/photos-new">
              <q-item-section>Photos</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incoxxxgnito tab</q-item-section>
            </q-item>sss
          </q-list>
        </q-menu>
      </q-btn> -->

      <q-btn flat label="Physical Collections" class="q-mr-sm q-ml-sm gt-sm">
        <q-menu>
          <q-list style="min-width: 100px">
     <q-item clickable v-close-popup to="/collections/physical/photos-new">
              <q-item-section>Photos</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat label="Digital Collections" class="q-mr-sm q-ml-sm gt-sm">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat label="Additional Information" class="q-mr-sm q-ml-sm gt-sm">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat label="Contact Us" class="q-mr-sm q-ml-sm gt-sm">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-space />
    </q-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>