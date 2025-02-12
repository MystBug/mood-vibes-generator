
<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <Hue :color="currentMood.color" :musicLink="currentMood.musicLink"/>
        </template>
        <template #title>{{ currentMood.name }}</template>
        <template #subtitle>{{ currentMood.vibe }}</template>
        <template #content>
            <p class="m-0">
                {{ currentMood.activity }}
            </p>
        </template>
        <!-- <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template> -->
    </Card>
</template>

<script setup>
import { useAppStore } from '~/stores/App'

const appStore = useAppStore()
const { currentMood } = storeToRefs(appStore)
</script>
