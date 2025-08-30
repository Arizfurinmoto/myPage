<script setup lang="ts">
import { AppNavBar } from '#components';

</script>

<template>
  <div>
   <AppNavBar />
<main class="container">
  <slot />
</main>
  </div>
</template>

<style>
.error {
  color: red;
}
</style>