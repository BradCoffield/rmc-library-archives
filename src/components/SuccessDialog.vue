<template>
  <q-dialog v-model="show" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="done_outline" color="dark" text-color="white" />
        <span class="q-ml-sm">Success!!</span>
      </q-card-section>

      <q-card-actions align="right">
        <template v-if="showClearForm">
          <q-btn
            flat
            label="Create Another"
            color="secondary"
            v-close-popup
            @click="clearForm"
          />
        </template>
        <q-btn flat label="Active Subs" color="secondary" v-close-popup to="/active-submissions" />
        <q-btn flat label="Go Home" color="secondary" v-close-popup to="/" />
        
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  
  props: {
    show: {
      type: Boolean,
      required: false
    }, 
    showClearForm: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
    
    };
  },
  methods: {
    clearForm() {
      this.$emit("clearForm");
    },
    closeDialog(){
        this.$emit("closeDialog")
    }
  }
};
</script>

<style></style>
