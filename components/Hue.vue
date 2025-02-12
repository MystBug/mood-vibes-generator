<template>
    <div class="hue-frame" :style="{
        width: '100%',
        padding: '1rem',
        paddingBottom: '25%',
        background: $attrs.color,
    }">
        <iframe 
            style="border-radius:12px;"
            :src="$attrs.musicLink"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
    </div>
</template>