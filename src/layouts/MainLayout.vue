<template>
  <q-layout class="raleway">
    <VParticles />
    <VHeader />
    <AboutMe />
    <TecnologiesStack />
  </q-layout>
</template>

<script setup>
import VHeader from 'src/components/V-Header.vue';
import VParticles from 'src/components/V-Particles.vue';
import AboutMe from 'src/pages/AboutMe.vue';
import TecnologiesStack from 'src/pages/TecnologiesStack.vue';
</script>
