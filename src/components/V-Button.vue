<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      stack
      padding="1rem"
      color="secondary"
      :href="props.link"
      :icon="props.icon"
      type="submit"
      target="_blank"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  link: String,
});
</script>
