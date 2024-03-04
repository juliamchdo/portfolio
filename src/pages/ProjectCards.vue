<template>
  <div class="container" id="projects">
    <h2 class="title">Projetos</h2>
    <div class="card q-pa-md row items-start q-gutter-md" style="z-index: 2">
      <q-card class="my-card" flat bordered v-for="(project, i) in projectItems" :key="i">
        <q-img :src="`${project.image}`" />
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ project.title }}</div>
          <div class="text-caption text-grey">
            {{ project.legend }}
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn :href="project.github" target="_blank" flat color="primary" label="Github" />
          <q-btn v-if="project.site" :href="project.site" target="_blank" flat color="secondary" label="Ir para site" />

          <q-space />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectItems } from 'src/types/project-cards';

const projectItems: ProjectItems[] = [
  {
    title: 'Holambra',
    legend: 'Landing page com o intuito de praticar Reactive Forms do Angular.',
    github: 'https://github.com/juliamchdo/holambra',
    site: 'https://holambra.vercel.app/',
    image: 'src/assets/images/holambra.jpeg',
    tags: [
      { text: 'Angular', color: '#FF7043' },
      { text: 'Typescript', color: '#26C6DA' },
      { text: 'Scss', color: '#EC407A' },
      { text: 'HTML', color: '#FFA726' },
    ]
  },
  {
    title: 'Dra. Natália',
    legend: 'Landing page para divulgação de uma clínica médica.',
    github: 'https://github.com/juliamchdo/dra-natalia',
    site: 'https://dra-natalia-bittencourt.netlify.app/',
    image: 'src/assets/images/dra-natalia.jpeg',
    tags: [
      { text: 'React', color: '#42A5F5' },
      { text: 'Next.js', color: '#78909C' },
      { text: 'Typescript', color: '#26C6DA' },
      { text: 'Scss', color: '#EC407A' },
      { text: 'HTML', color: '#FFA726' },
    ]
  },
  {
    title: 'Aladdin',
    legend: 'Gerenciador de tarefas desenvolvido para uma disciplina da faculdade.',
    github: 'https://github.com/juliamchdo/aladdin-web',
    site: 'https://aladdin-task-manager.netlify.app/',
    image: 'src/assets/images/aladdin.jpeg',
    tags: [
      { text: 'React', color: '#42A5F5' },
      { text: 'Typescript', color: '#26C6DA' },
      { text: 'Tailwind', color: '#29B6F6' },
      { text: 'Axios', color: '#26C6DA' },
      { text: 'Chackra UI', color: '#29B6F6' },
      { text: 'Radix', color: '#AB47BC' },
      { text: 'Scss', color: '#EC407A' },
      { text: 'HTML', color: '#FFA726' },
      { text: 'Prisma', color: '#78909C' },
      { text: 'PostgreSQL', color: '#FFCA28' },
      { text: 'Fastify', color: '#607D8B' },
    ]
  },
  {
    title: 'FinanceLAB',
    legend: 'Aplicativo para gerenciamneto de valores de entrada e saída.',
    github: 'https://github.com/juliamchdo/finance-lab-mobile',
    image: '',
    tags: [
      { text: 'React', color: '#42A5F5' },
      { text: 'Typescript', color: '#26C6DA' },
      { text: 'Axios', color: '#26C6DA' },
    ],
  },
]
</script>

<style lang="scss" scoped>
  .q-img {
    height: 150px !important;
  }
.card {
  display: flex;
  justify-content: center;

  .my-card {
    width: 100%;
    max-width: 350px;
    max-height: 290px;
    border: 1px solid #8234e9;
    background-color: #3f3f41;


    .text-caption {
      font-size: 1.2rem;
    }
  }
}
</style>
