<template>
  <q-layout class="contact-info">
    <h1 class="header-title">
      Olá! eu sou <span class="title-name">Júlia Machado</span>
    </h1>
    <h2 class="subtitle">Desenvolvedora Front End</h2>
    <div class="buttons">
      <VButtonVue
        v-for="(button, i) in buttonProps"
        :key="i"
        :icon="button.icon"
        :link="button.link"
        type="stack"
      />
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import VButtonVue from './V-Button.vue';

const buttonProps = [
  { icon: 'fa-brands fa-github', link: 'https://github.com/juliamchdo' },
  {
    icon: 'fa-brands fa-linkedin-in',
    link: 'https://www.linkedin.com/in/juliamchdo/',
  },
  { icon: 'fa-solid fa-envelope', link: 'mailto:juliamachado.dev@gmail.com' },
];
</script>

<style lang="scss">
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-title {
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
.buttons {
  display: flex;
  flex-direction: row;
  z-index: 9;
}
</style>
