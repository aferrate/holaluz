<template>
  <div id="formulario-cups">
    <form @submit.prevent="enviarFormulario">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Cups</label>
              <input 
                v-model="cups.cups"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': procesando && cupsInvalido }"
                @focus="resetEstado"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <button class="btn btn-primary">Check</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div v-if="error && procesando" class="alert alert-danger" role="alert">
              Debes rellenar todos los campos!
            </div>
          </div>
        </div>
      </div>
    </form>
    {{mensaje}}
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'formulario-cups',
    data() {
      return {
        mensaje: "",
        procesando: false,
        correcto: false,
        error: false,
        cups: {
          cups: '',
        },
      }
    },
    methods: {
      enviarFormulario() {
        this.procesando = true;
        this.resetEstado();
        
        // Comprobamos la presencia de errores
        if (this.cupsInvalido) {
          this.error = true;
          return;
        }

        this.error = false;
        this.correcto = true;
        this.procesando = false;

        axios
          .post('http://localhost:3000/offers/getoffer', {
            cups : this.cups.cups
          }).then(response => (this.mensaje = response.data.message))
          .catch(error => (this.mensaje = error.message))

        // Restablecemos el valor de la variables
        this.cups = {
          cups: '',
        }
      },
      resetEstado() {
        this.correcto = false;
        this.error = false;
        this.mensaje = "";
      }
    },
    computed: {
      cupsInvalido() {
        return this.cups.cups.length < 1;
      },
    },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
</style>