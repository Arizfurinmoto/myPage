<script lang="ts" setup>
const {
    data: tasks,
    error,
    status,
} = await useFetch("/api/tasks", { lazy: true });
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
            <article v-for="task in tasks" :key="task.id">
                {{ task.title }}
            </article>
        </div>
    </div>
</template>
