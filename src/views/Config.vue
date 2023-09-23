<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'

export default {
  data() {
    return {
      prompt: '',
      data: undefined,
      categories: {
        sexual: { active: false, ratio: 0, action: '' },
        hate: { active: false, ratio: 0, action: '' },
        harassment: { active: false, ratio: 0, action: '' },
        'self-harm': { active: false, ratio: 0, action: '' },
        'sexual/minors': { active: false, ratio: 0, action: '' },
        'hate/threatening': { active: false, ratio: 0, action: '' },
        'violence/graphic': { active: false, ratio: 0, action: '' },
        'self-harm/intent': { active: false, ratio: 0, action: '' },
        'self-harm/instructions': { active: false, ratio: 0, action: '' },
        'harassment/threatening': { active: false, ratio: 0, action: '' },
        violence: { active: false, ratio: 0, action: '' }
      },
      actions: [
        { name: 'Banear permanentemente', value: 'banner_permanent' },
        { name: 'Borrar comentario', value: 'delete_comment' },
        { name: 'Alertar', value: 'alert' },
        { name: 'Bannear', value: 'banner' }
      ]
    }
  },
  methods: {
    send() {
      console.log(this.categories)
      /*
      axios
        .post('URL_DE_TU_API_AQUI', this.categories)
        .then((response) => {
          console.log('Respuesta de la solicitud POST:', response.data)
        })
        .catch((error) => {
          console.error('Error en la solicitud POST:', error)
        })
        */
    }
  },
  mounted() {
    /*
    axios
      .get('https://rickandmortyapi.com/api/character/?page=19')
      .then((response) => {
        this.data = response.data.results // Accede a la propiedad 'results' que contiene el array de datos
        console.log(this.data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    */
  }
}
</script>

<template>
  <main class="container">
    <!-- <div>
      <span>Define el contenido que quieres que sea moderado</span>
      <v-textarea class="input" label="Promt" variant="outlined" v-model="prompt"></v-textarea>
    </div> -->
    <div class="categories">
      <div class="category-item">
        <div class="title">Categorias</div>
        <div class="title slider">Sensibilidad</div>
      </div>
      <div class="category-item" v-for="(cat, key) of categories">
        <v-checkbox :label="key" v-model="cat.active"></v-checkbox>
        <v-slider class="slider" v-model="cat.ratio" :disabled="!cat.active"></v-slider>
        <v-select
          label="Select"
          :items="actions"
          item-title="name"
          item-value="value"
          variant="outlined"
          v-model="cat.action"
          :disabled="!cat.active"
        ></v-select>
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
