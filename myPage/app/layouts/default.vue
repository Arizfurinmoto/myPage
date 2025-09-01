<script setup lang="ts">
import { AppNavBar } from "#components";
</script>

<template>
    <div>
        <AppNavBar />
        <main class="container">
            <slot />
        </main>
        <AppFooter/>
    </div>
</template>

<style lang="css" src="~/assets/styles/main.css"></style>
