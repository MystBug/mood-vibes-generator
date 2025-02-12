<template>
    <div :style="{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem 0 2rem 0'
    }">
        <SelectButton v-model="currentMood" :options="moodList" optionLabel="name" dataKey="id" aria-labelledby="custom" />
    </div>
    <MoodCard />
</template>

<script setup>
import MoodCard from './MoodCard.vue';
import { useAppStore } from '~/stores/App'

const appStore = useAppStore()
const { currentMood, moodList } = storeToRefs(appStore)
</script>

