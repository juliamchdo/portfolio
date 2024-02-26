<template>
  <q-layout class="header-container">
    <nav>
      <ul class="navigation">
        <li class="navigation-item" v-for="(item, i) in navItems" :key="i">
          <VButton
            type="flat"
            :label="item.label"
            @click="scrollToView(item)"
          />
        </li>
      </ul>
    </nav>
    <div class="contact-info">
      <h1 class="header-title">
        Olá! eu sou <span class="title-name">Júlia Machado</span>
      </h1>
      <h2 class="subtitle">Desenvolvedora Front End</h2>
      <div class="buttons">
        <VButton
          v-for="(button, i) in buttonProps"
          :key="i"
          :icon="button.icon"
          :link="button.link"
          type="stack"
        />
      </div>
    </div>
    <iframe
      class="scroll-animation"
      src="https://lottie.host/embed/9637ba47-3cbc-40bd-801f-5b24b77142f5/4Pk9BnPGtZ.json"
    ></iframe>
  </q-layout>
</template>

<script setup lang="ts">
import VButton from './V-Button.vue';
import { ButtonProps, NavItems } from '../types/header';
const buttonProps: ButtonProps[] = [
  { icon: 'fa-brands fa-github', link: 'https://github.com/juliamchdo' },
  {
    icon: 'fa-brands fa-linkedin-in',
    link: 'https://www.linkedin.com/in/juliamchdo/',
  },
  { icon: 'fa-solid fa-envelope', link: 'mailto:juliamachado.dev@gmail.com' },
];

const navItems: NavItems[] = [
  { label: 'Sobre mim', id: 'about-me' },
  { label: 'Tecnologias', id: 'technologies' },
  { label: 'Projetos', id: 'projects' },
  { label: 'Contato', id: 'contact' },
];

const scrollToView = (navItem: NavItems) => {
  const section = document.querySelector(`#${navItem.id}`);
  section?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style lang="scss">
.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8rem;

  .navigation {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
    .navigation-item {
      font-size: 1.8rem;
      z-index: 2;
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

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

  .scroll-animation {
    width: 6.8rem;
    height: 6.8rem;
    border: none;
    margin-bottom: 2rem;
  }
}
.buttons {
  display: flex;
  flex-direction: row;
  z-index: 9;
}
</style>
