<template>
    <Slider v-model="value" :step="20" class="w-56" />

</template>

<script setup>
import { ref } from 'vue';

const value = ref(20);
</script>