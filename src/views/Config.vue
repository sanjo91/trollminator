<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

  export default {
    data() {
      return {
        prompt: '',
        categories: [
          {name: "Sexual", id: "sexual", active: false, sesibility: 0, punishment: ''},
          {name: "Odio", id: "hate", active: false, sesibility: 0, punishment: ''},
          {name: "Acoso", id: "harassment", active: false, sesibility: 0, punishment: ''},
          {name: "Autolesiones", id: "self-harm", active: false, sesibility: 0, punishment: ''},
          {name: "Sexual/menores de edad", id: "sexual/minors", active: false, sesibility: 0, punishment: ''},
          {name: "Odio/amenazas", id: "hate/threatening", active: false, sesibility: 0, punishment: ''},
          {name: "Violencia/gráfico", id: "violence/graphic", active: false, sesibility: 0, punishment: ''},
          {name: "Autolesiones/intento", id: "self-harm/intent", active: false, sesibility: 0, punishment: ''},
          {name: "Autolesiones/instrucciones", id: "self-harm/instructions", active: false, sesibility: 0, punishment: ''},
          {name: "Acoso/amenazas", id: "harassment/threatening", active: false, sesibility: 0, punishment: ''},
          {name: "Violencia", id: "violence", active: false, sesibility: 0, punishment: ''}
        ],
        punishment: [
          { name: 'Banear permanentemente', value: 'banner_permanent'},
          { name: 'Borrar comentario', value: 'delete_comment'},
          { name: 'Alertar', value: 'alert'},
          { name: 'Bannear', value: 'banner'},
        ]
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
        <v-checkbox :label="cat.name" v-model="cat.active"></v-checkbox>
        <v-slider class="slider" v-model="cat.sesibility" :disabled="!cat.active"></v-slider>
        <v-select label="Select" :items="punishment" item-title="name" item-value="value" variant="outlined" v-model="cat.punishment" :disabled="!cat.active"></v-select>
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
  .category-item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  .slider {
    grid-column: 2 / 4;
  }
  .title {
    text-align: center;
  }
</style>