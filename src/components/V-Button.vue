<template>
  <div class="buttons q-pa-md q-gutter-sm">
    <q-btn
      v-if="props.type === 'stack'"
      stack
      padding="1rem"
      color="secondary"
      :href="props.link"
      :icon="props.icon"
      type="submit"
      target="_blank"
    />

    <q-btn
      v-if="props.type === 'flat'"
      class="flat"
      flat
      :label="props.label"
    />

    <button v-if="props.type === 'teal'" class="teal-button">
      <img class="icon-image" :src="imgSource" />
      <p>{{ props.label }}</p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ButtonProps } from 'src/types/v-button';

const props = defineProps<ButtonProps>();
const imgSource: string = 'src/assets/icons/' + props.icon + '.png';
</script>

<style lang="scss" scoped>
.buttons {
  z-index: 2;
  font-weight: 600;
  .flat {
    color: #8234e9;
    font-weight: 700;
  }

  .teal-button {
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2rem;
    background-color: #3f3f41;
    color: white;
    font-size: 1.4rem;
    border: 1px solid transparent;
    border-radius: 1rem;
    p {
      margin-bottom: 0;
    }
    .icon-image {
      width: 48px;
      height: 48px;
    }
  }

  .teal-button:hover {
    transition: all 0.5s;
    background-color: #8234e9;
  }
}
</style>
