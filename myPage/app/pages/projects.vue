<script lang="ts" setup>
const {
    data: projects,
    error,
    status,
} = await useFetch("/api/projects", { lazy: true });
</script>

<template>
    <section>
        <h1>My projects</h1>
    </section>

    <div>
        <article v-if="status === 'pending'" aria-busy="true"></article>
        <article class="error" v-else-if="error">
            {{ error.statusMessage }}
        </article>
        <div v-else>
            <article v-for="project in projects" :key="project.id">
                {{ project.title }}
            </article>
        </div>
    </div>
</template>
