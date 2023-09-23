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
    
      <div class="data">
        <div class="title1">Twitch</div>
        <div class="data-container">
          <div class="card-data">
            <div class="title">Baneados</div>
            <div class="num">18</div>
            <div class="subtitle">2 Completados</div>
          </div>
          <div class="card-data">
            <div class="title">Contenido filtrado</div>
            <div class="num">132</div>
            <div class="subtitle">28 Completados</div>
          </div>
          <div class="card-data">
            <div class="title">Comentarios borrados</div>
            <div class="num">12</div>
            <div class="subtitle">2 Completados</div>
          </div>
          <div class="card-data">
            <div class="title">Salud</div>
            <div class="num">76%</div>
            <div class="subtitle">5% Completados</div>
          </div>
        </div>
      </div>
   
    <v-card class="card">
      <div class="categories">
        <div class="category-item"><div class="title">Categorias</div><div class="title slider">Sensibilidad</div></div>
        <div class="category-item" v-for="cat of categories">
          <v-checkbox :label="cat.name" v-model="cat.active"></v-checkbox>
          <v-slider class="slider" v-model="cat.sesibility" :disabled="!cat.active" step="0.05" min="0" max="1"></v-slider>
          <v-select label="Select" :items="punishment" item-title="name" item-value="value" variant="outlined" v-model="cat.punishment" :disabled="!cat.active"></v-select>
        </div>
        <v-btn @click="send">Enviar</v-btn>
      </div>
    </v-card>
  </main>
</template>

<style>
  .container {
    
    background: #f2f2f2;
  }
  .card {
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 4rem;
    margin-bottom: 1rem;
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
    position: relative;
  }

  /* .slider::before {
    content: 'alto';
    position: absolute;
    top: -5px;
    font-size: ;
  } */
  .title {
    text-align: center;
  }
  
  .data {

    background-image: linear-gradient(to bottom, #624BFF 0%, #624BFF 75%, #f2f2f2 75%, #f2f2f2 100%);

    margin-bottom: 2rem;
  }
  .data .title1 {
    color: white;
    font-weight: 800;
    font-size: 3rem;
    text-align: center;
  }
  .data-container {
    padding-top: 2rem;
    padding-right: 4rem;
    padding-left: 4rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

  }
  .card-data {
    border-radius: 10px;
    padding: 1rem;
    background: white;
  }
  .card-data .title {
    font-weight: 800;
  }
  .card-data .num {
    font-size: 2rem;
  }
  .card-data .subtitle {
    font-size: 0.75rem;
  }
</style>