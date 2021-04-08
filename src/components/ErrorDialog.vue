<template>
    <q-dialog v-model="show" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="error_outline" color="dark" text-color="white" />
          <span class="q-ml-sm">There has been an error.</span>
        </q-card-section>

        <q-card-actions align="right">
   

          <q-btn flat label="Close" color="secondary" v-close-popup />
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
    }
  },
  data() {
    return {
    
    };
  },
  methods: {
  
    closeDialog(){
        this.$emit("closeDialog")
    }
  }
};
</script>

<style>

</style>