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
          <div class="tags">
            <VTag v-for="(tag, i ) in project.tags" :key="i" :text="tag.text" :color="tag.color"/>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn :href="project.github" target="_blank" flat color="deep-purple" label="Github" />
          <q-btn v-if="project.site" :href="project.site" target="_blank" flat color="white" label="Ir para site" />

          <q-space />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectItems } from 'src/types/project-cards';
import  VTag from 'src/components/V-Tag.vue'
import mks from 'src/assets/images/mks.png'

const projectItems: ProjectItems[] = [
  {
    title: 'Holambra',
    legend: 'Landing page com o intuito de praticar Reactive Forms do Angular.',
    github: 'https://github.com/juliamchdo/holambra',
    site: 'https://holambra.vercel.app/',
    image: 'src/assets/images/holambra.jpeg',
    tags: [
      { text: 'Angular', color: 'red' },
      { text: 'Typescript', color: 'light-blue' },
      { text: 'Scss', color: 'pink' },
      { text: 'HTML', color: 'yellow' },
    ]
  },
  {
    title: 'Dra. Natália',
    legend: 'Landing page para divulgação de uma clínica médica.',
    github: 'https://github.com/juliamchdo/dra-natalia',
    site: 'https://dra-natalia-bittencourt.netlify.app/',
    image: 'src/assets/images/dra-natalia.jpeg',
    tags: [
      { text: 'React', color: 'blue' },
      { text: 'Next.js', color: 'black' },
      { text: 'Typescript', color: 'light-blue' },
      { text: 'Scss', color: 'pink' },
      { text: 'HTML', color: 'yellow' },
    ]
  },
  {
    title: 'Aladdin',
    legend: 'Gerenciador de tarefas desenvolvido para uma disciplina da faculdade.',
    github: 'https://github.com/juliamchdo/aladdin-web',
    site: 'https://aladdin-task-manager.netlify.app/',
    image: 'src/assets/images/aladdin.jpeg',
    tags: [
      { text: 'React', color: 'blue' },
      { text: 'Typescript', color: 'light-blue' },
      { text: 'Tailwind', color: 'cyan' },
      { text: 'Axios', color: 'blue' },
      { text: 'Scss', color: 'pink' },
      { text: 'HTML', color: 'yellow' },
      { text: 'Prisma', color: 'purple' },
      { text: 'PostgreSQL', color: 'orange' },
      { text: 'Fastify', color: 'purple' },
    ]
  },
  {
    title: 'MKS Sistemas',
    legend: 'Desafio Front End para consumir uma API de lista de produtos, estilo e-commerce.',
    github: 'https://github.com/juliamchdo/product-challenge',
    site: 'https://mks-product-challenge.netlify.app/',
    image: mks,
    tags: [
      { text: 'React', color: 'blue' },
      { text: 'Typescript', color: 'light-blue' },
      { text: 'Axios', color: 'blue' },
      { text: 'Styled components', color: 'pink' },
    ],
  },
  {
    title: 'BeerShop',
    legend: 'Com muito carinho, esse foi o primeiro site que desenvolvi, logo que comecei a estudar programação.',
    github: 'https://github.com/juliamchdo/cervejaria',
    site: 'https://juliamchdo.github.io/cervejaria/',
    image: 'src/assets/images/beer.png',
    tags: [
      { text: 'HTML', color: 'yellow' },
      { text: 'CSS', color: 'light-blue' },
    ],
  },
]
</script>

<style lang="scss" scoped>
.q-img {
  height: 150px !important;
}

.q-card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card {
  display: flex;
  justify-content: center;

  .my-card {
    width: 100%;
    max-width: 350px;
    height: 350px;
    border: 1px solid #3f3f41;
    background-color: #3f3f41;

    .tags{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      gap: .5rem;
      margin-top: 1rem;
    }

    .text-caption {
      font-size: 1.4rem;
    }
  }
}
</style>
