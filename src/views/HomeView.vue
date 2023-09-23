<template>
  <router-link to="/platform/twitch">
    <div class="home-container">
      <!-- Logo centrado -->
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <img src="@/assets/icons/Vector.svg" alt="Logo Trollminator" class="logo" />
        </v-col>
      </v-row>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToApp() {
      // Agrega aquí la lógica para redirigir a tu aplicación si es necesario
    }
  }
}
</script>

<style scoped>
/* Estilos personalizados */
.home-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #f2f2f2, #dcdcdc); /* Cambia los colores de fondo aquí */
}

.logo {
  max-width: 100%;
  height: auto;
  z-index: 1; /* Asegura que el logo esté sobre el fondo */
}

/* Puedes personalizar aún más los estilos según tus preferencias */
</style>
