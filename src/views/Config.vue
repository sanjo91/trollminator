<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { onUpdated } from 'vue'

export default {
  data() {
    return {
      id: '',
      data : { 
        twitch : { 
          color: '#624BFF', 
          name : 'Twitch',
          banned : 18,
          filterComment : 132,
          deleteComment : 12,
          healthy : '85%'
        }, 
        youtube : { 
          color: '#c4302b', 
          name : 'YouTube',
          banned : 25,
          filterComment : 87,
          deleteComment : 98,
          healthy : '55%'
        } 
      },
      selectedData : { color: '#624BFF', 
          name : 'Twitch',
          banned : 18,
          filterComment : 132,
          deleteComment : 12,
          healthy : '85%' },
      categories: {
        sexual: { name: 'sexual', active: false, ratio: 0, action: '' },
        hate: { name: 'hate', active: false, ratio: 0, action: '' },
        harassment: { name: 'harassment', active: false, ratio: 0, action: '' },
        'self-harm': { name: 'self-harm', active: false, ratio: 0, action: '' },
        'sexual/minors': { name: 'sexual/minors', active: false, ratio: 0, action: '' },
        'hate/threatening': { name: 'hate/threatening', active: false, ratio: 0, action: '' },
        'violence/graphic': { name: 'violence/graphic', active: false, ratio: 0, action: '' },
        'self-harm/intent': { name: 'self-harm/intent', active: false, ratio: 0, action: '' },
        'self-harm/instructions': {
          name: 'self-harm/instructions',
          active: false,
          ratio: 0,
          action: ''
        },
        'harassment/threatening': { name: 'harassment/threatening', active: false, ratio: 0, action: '' },
        violence: { name: 'violence', active: false, ratio: 0, action: '' }
      },
      catName: {
        sexual: 'Sexual',
        hate: 'Odio',
        harassment: 'Acoso',
        'self-harm': 'Autolesiones',
        'sexual/minors': 'Sexual/menores de edad',
        'hate/threatening': 'Odio/amenazas',
        'violence/graphic': 'Violencia/gráfico',
        'self-harm/intent': 'Autolesiones/intento',
        'self-harm/instructions': 'Autolesiones/instrucciones',
        'harassment/threatening': 'Acoso/amenazas',
        violence: 'Violencia'
      },
      actions: [
        // { name: 'Banear permanentemente', value: 'banner_permanent' },
        // { name: 'Borrar comentario', value: 'delete_comment' },
        { name: 'Alertar', value: 'alert' },
        // { name: 'Bannear', value: 'banner' }
      ]
    }
  },
  methods: {
    send() {
      const headers = { 'Content-Type': 'application/json' }

      axios
        .post('user/twitch/config', this.categories, headers)
        .then((response) => {
          console.log('Respuesta de la solicitud POST:', response.data)
        })
        .catch((error) => {
          console.error('Error en la solicitud POST:', error)
        })
      
    },
    get() {
      axios
      .get('user/twitch/config')
      .then((response) => {
        this.categories = response.data // Accede a la propiedad 'results' que contiene el array de datos
        console.log(this.categories)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    }
  },
  mounted() {
    this.get()    
  
  },
  updated() {
    if(this.id !== this.$route.params.id)
    {
      this.id = this.$route.params.id
      this.selectedData = this.data[this.id] || this.data.twitch;
      this.get();
    }
  }
}
</script>

<template>
  <main class="container">
    
      <div class="data" :class="{'background-twitch' : id !== 'youtube', 'background-youtube': id === 'youtube' }">
        <div class="title1">{{ selectedData.name }}</div>
        <div class="data-container">
          <div class="card-data">
            <div class="title">Baneados</div>
            <div class="num">{{selectedData.banned}}</div>
            <div class="subtitle">2 Completados</div>
          </div>
          <div class="card-data">
            <div class="title">Contenido filtrado</div>
            <div class="num">{{selectedData.filterComment}}</div>
            <div class="subtitle">28 Completados</div>
          </div>
          <div class="card-data">
            <div class="title">Comentarios borrados</div>
            <div class="num">{{selectedData.deleteComment}}</div>
            <div class="subtitle">2 Completados</div>
          </div>
          <div class="card-data">
            <div class="title">Salud</div>
            <div class="num">{{selectedData.healthy}}</div>
            <div class="subtitle">5% Completados</div>
          </div>
        </div>
      </div>

    <v-card class="card">
      <div class="categories">
        <div class="category-item">
          <div class="title">Categorias</div>
          <div class="title slider">
            Sensibilidad
            <v-tooltip text="Un nivel alto de sensibilidad actuará ante cualquier comentario en dicha categoría">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" variant="plain">
                  <v-icon icon="mdi-information" size="small"></v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </div>
        <div class="category-item" v-for="(cat, key) of categories">
          <v-checkbox :label="catName[key]" v-model="cat.active"></v-checkbox>
          <v-slider
            class="slider tag"
            v-model="cat.sesibility"
            :disabled="!cat.active"
            step="0.05"
            min="0"
            max="1"
          ></v-slider>
          <v-select
            label="Seleccione una acción"
            :items="actions"
            item-title="name"
            item-value="value"
            variant="outlined"
            v-model="cat.punishment"
            :disabled="!cat.active"
          ></v-select>
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

  .slider.tag::before {
    content: 'bajo';
    position: absolute;
    top: -7px;
    left: -10px;
    font-size: 0.75rem;
    color: grey
  }
  .slider.tag::after {
    content: 'alto';
    position: absolute;
    top: -7px;
    right: -10px;
    font-size: 0.75rem;
    color: grey
  }
  .title {
    text-align: center;
  }
  
  .data {
    margin-bottom: 2rem;
  }
  .background-twitch {
    background-image: linear-gradient(to bottom, #624BFF 0%, #624BFF 75%, #f2f2f2 75%, #f2f2f2 100%);
  }
  .background-youtube {
    background-image: linear-gradient(to bottom, #c4302b 0%, #c4302b 75%, #f2f2f2 75%, #f2f2f2 100%);
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
