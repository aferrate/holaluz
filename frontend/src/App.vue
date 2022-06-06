<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Búsqueda</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-cups />
      </div>
    </div>
  </div>
</template>

<script>
  import FormularioCups from '@/components/FormularioCups.vue'

  export default {
    name: 'app',
    components: {
      FormularioCups,
    },
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }
</style>