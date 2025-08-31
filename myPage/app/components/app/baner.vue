<script setup lang="ts">
defineProps<{
    imgPath: string;
}>();
</script>

<template>
    <div class="banner_container">
        <div class="line" />
        <div class="box">
            <img :src=imgPath alt="Szymon" />
            <!-- <img src="~/assets/img/4-rb.png" alt="Szymon" /> -->
        </div>
        <div class="line" />
    </div>
    <h1 style="text-align: center;">Szymon Godoń</h1>
</template>
