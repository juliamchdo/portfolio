<template>
    <div class="tag" >
        <q-badge :color="props.color" :label="props.text" />
    </div>
</template>

<script setup lang="ts">
import { TagProps } from 'src/types/v-tags';
const props = defineProps<TagProps>();
</script>

<style lang="scss" scoped>
.q-badge{
    font-weight: 600;
}
</style>