<template>
  <q-layout class="contact-info">
    <h1 class="title">
      Olá! eu sou <span class="title-name">Júlia Machado</span>
    </h1>
    <h2 class="subtitle">Desenvolvedora Front End</h2>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactInfo',
});
</script>

<style lang="scss">
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    color: #fff;
    text-align: center;
    font-size: 5rem;
    font-weight: 600;
    .title-name {
      color: #8234e9;
    }
  }

  .subtitle {
    color: #fff;
    font-size: 2.2rem;
    font-weight: 400;
  }
}
</style>
