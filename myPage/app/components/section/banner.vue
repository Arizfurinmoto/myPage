<script setup lang="ts">
defineProps<{
    iconName: string;
    bannerName: string;
}>();
</script>

<template>
    <div class="cv_section_banner">
        <div class="line" />
        <Icon :name="iconName" size="70px" style="color: azure" />
        <div class="line" />
    </div>
    <h2 style="text-align: center;">{{bannerName}}</h2>
</template>
