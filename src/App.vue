<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

  export default {
    data() {
      return {
      open: ['Platforms'],
      platforms: [
        ['Tiwtch', 'mdi-twitch'],
        ['Discord', 'mdi-discord'],
      ]
    };
    }
  };
</script>

<template>
  <v-app>
    <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-cog" title="Configurar promt" value="config"></v-list-item>
          
          <v-list-group value="platforms">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-laptop"
                title="Plataformas"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="([title, icon], i) in platforms"
              :key="i"
              :title="title"
              :prepend-icon="icon"
              :value="title"
            ></v-list-item>
          </v-list-group>
          <v-list-item prepend-icon="mdi-plus" title="Añadir plataforma" value="add"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh"> <RouterView /></v-main>
    </v-layout>
  </v-card>
  </v-app>
  
 
</template>

<style scoped>
</style>
