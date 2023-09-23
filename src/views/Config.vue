<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

  export default {
    data() {
      return {
        prompt: '',
        categories: [
          {name: "Sexual", id: "sexual", active: false, sesibility: 0},
          {name: "Odio", id: "hate", active: false, sesibility: 0},
          {name: "Acoso", id: "harassment", active: false, sesibility: 0},
          {name: "Autolesiones", id: "self-harm", active: false, sesibility: 0},
          {name: "Sexual/menores de edad", id: "sexual/minors", active: false, sesibility: 0},
          {name: "Odio/amenazas", id: "hate/threatening", active: false, sesibility: 0},
          {name: "Violencia/gráfico", id: "violence/graphic", active: false, sesibility: 0},
          {name: "Autolesiones/intento", id: "self-harm/intent", active: false, sesibility: 0},
          {name: "Autolesiones/instrucciones", id: "self-harm/instructions", active: false, sesibility: 0},
          {name: "Acoso/amenazas", id: "harassment/threatening", active: false, sesibility: 0},
          {name: "Violencia", id: "violence", active: false, sesibility: 0}]
      }
    },
    methods: {
      send() {
        console.log(this.categories)
      }
    }
  };
</script>

<template>
  <main class="container">
    <!-- <div>
      <span>Define el contenido que quieres que sea moderado</span>
      <v-textarea class="input" label="Promt" variant="outlined" v-model="prompt"></v-textarea>
    </div> -->
    <div class="categories">
      <div class="category-item"><div class="title">Categorias</div><div class="title slider">Sensibilidad</div></div>
      <div class="category-item" v-for="cat of categories">
        <v-checkbox :label="cat.name" v-model="cat.active"></v-checkbox><v-slider class="slider" v-model="cat.sesibility"></v-slider>
      </div>
      <v-btn @click="send">Enviar</v-btn>
    </div>
  </main>
</template>

<style>
  .container {
    padding: 4rem;
  }
  .input {
    margin-top: 1rem;
  }
  .button {
    
  }
  .category-item {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .slider {
    grid-column: 2 / 4;
  }
  .title {
    text-align: center;
  }
</style>