<template>
  <div class="q-pa-md row items-start q-gutter-md" style="z-index: 2">
    <q-card class="my-card" flat bordered>
      <!-- <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" /> project image -->

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />

        <q-space />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ProjectProps } from 'src/types/project-cards';
('');
const props = defineProps<ProjectProps>();
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
