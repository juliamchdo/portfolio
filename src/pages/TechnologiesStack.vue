<template>
  <div class="container" id="technologies">
    <h2 class="title">Tecnologias</h2>

    <div class="nav-buttons">
      <VButton
        v-for="(button, i) in navButtons"
        :key="i"
        type="flat"
        :label="button.label"
        @click="handleNavButtons(button.id)"
      />
    </div>

    <div class="tech-group">
      <div class="technologies" v-for="(tech, i) in technologies" :key="i">
        <VButton
          v-if="stack.type == 'all' || stack.type == tech.group"
          type="teal"
          :label="tech.name"
          :icon="tech.icon"
          :alt-image="tech.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VButton from 'src/components/V-Button.vue';
import { NavButtons, Technologies } from 'src/types/technologies-stack';
import { reactive } from 'vue';
import html from 'src/assets/icons/html.png';
import css from 'src/assets/icons/css.png';
import sass from 'src/assets/icons/sass.png';
import javascript from 'src/assets/icons/javascript.png';
import typescript from 'src/assets/icons/typescript.png';
import vue from 'src/assets/icons/vue.png';
import react from 'src/assets/icons/react.png';
import angular from 'src/assets/icons/angular.png';
import bootstrap from 'src/assets/icons/bootstrap.png';
import tailwind from 'src/assets/icons/tailwind.png';
import storybook from 'src/assets/icons/storybook.png';
import figma from 'src/assets/icons/figma.png';
import axios from 'src/assets/icons/axios.png';
import node from 'src/assets/icons/node.png';
import postgresql from 'src/assets/icons/postgresql.png';
import dbeaver from 'src/assets/icons/dbeaver.png';
import prisma from 'src/assets/icons/prisma.png';
import git from 'src/assets/icons/git.png';
import cypress from 'src/assets/icons/cypress.png';
import jest from 'src/assets/icons/jest.png';

let stack = reactive({
  type: 'all',
});

const navButtons: NavButtons[] = [
  { label: 'Todas', id: 'all' },
  { label: 'Front-End', id: 'front-end' },
  { label: 'Back-End', id: 'back-end' },
  { label: 'Database', id: 'database' },
  { label: 'Versionamento', id: 'version-control' },
  { label: 'Testes', id: 'tests' },
];

const technologies: Technologies[] = [
  { name: 'HTML', icon: html, group: 'front-end' },
  { name: 'CSS', icon: css, group: 'front-end' },
  { name: 'Sass', icon: sass, group: 'front-end' },
  { name: 'Javascript', icon: javascript, group: 'front-end' },
  { name: 'Typescript', icon: typescript, group: 'front-end' },
  { name: 'Vue.js', icon: vue, group: 'front-end' },
  { name: 'React', icon: react, group: 'front-end' },
  { name: 'Angular', icon: angular, group: 'front-end' },
  { name: 'Bootstrap', icon: bootstrap, group: 'front-end' },
  { name: 'TailwindCss', icon: tailwind, group: 'front-end' },
  { name: 'Storybook', icon: storybook, group: 'front-end' },
  { name: 'Figma', icon: figma, group: 'front-end' },
  { name: 'Axios', icon: axios, group: 'back-end' },
  { name: 'Node.js', icon: node, group: 'back-end' },
  { name: 'PostgreSQL', icon: postgresql, group: 'database' },
  { name: 'DBeaver', icon: dbeaver, group: 'database' },
  { name: 'Prisma', icon: prisma, group: 'back-end' },
  { name: 'Git', icon: git, group: 'version-control' },
  { name: 'Cypress', icon: cypress, group: 'tests' },
  { name: 'Jest', icon: jest, group: 'tests' },
];

const handleNavButtons = (id: string) => {
  stack.type = id;
};
</script>

<style lang="scss" scoped>
.tech-group {
  width: 80%;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}
.tech-group,
.nav-buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
