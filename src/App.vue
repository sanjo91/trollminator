<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      open: ['Platforms'],
      platforms: [
        ['Tiwtch', 'tiwtch', 'mdi-twitch'],
        ['YouTube', 'youtube', 'mdi-youtube']
      ]
    }
  },
  methods: {
    navigate(name: string, value: string) {
      const route = { name }
      if (value) {
        route.params = { id: value }
      }
      this.$router.push(route)
    }
  }
}
</script>

<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail>
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              v-for="([title, value, icon], i) in platforms"
              :key="i"
              :title="title"
              :prepend-icon="icon"
              :value="title"
              @click="navigate('PLATFORM', value)"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main style="height: 100vh"> <RouterView /></v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<style scoped></style>
