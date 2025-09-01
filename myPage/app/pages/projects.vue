<script lang="ts" setup>
const {
    data: projects,
    error,
    status,
} = await useFetch("/api/projects", { lazy: true });

const goToPreview = (link: string) => {
    window.open(link, "_blank");
};

const goToRepo = (link: string) => {
    window.open(link, "_blank");
};
</script>

<template>
    <section>
        <SectionBanner
            iconName="heroicons-solid:beaker"
            bannerName="My Projects"
        />
    </section>

    <div>
        <article v-if="status === 'pending'" aria-busy="true"></article>
        <!-- <article class="error" v-else-if="error">
            {{ error.statusMessage }}
        </article> -->
        <div v-else>
            <article
                style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                "
                v-for="project in projects"
                :key="project.id"
            >
                <div>
                    <p>
                        <b>{{ project.title }}</b>
                    </p>
                    <div v-html="project.description"></div>
                </div>
                <div style="display: flex; flex-direction: row; gap: 20px">
                    <button
                        v-if="project.preview"
                        style="height: 100px; width: 200px"
                        @click="goToPreview(project.preview)"
                    >
                        <Icon
                            name="heroicons-solid:desktop-computer"
                            size="50px"
                            style="color: azure"
                        />
                    </button>
                    <button
                        v-if="project.github"
                        style="height: 100px; width: 200px"
                        @click="goToRepo(project.github)"
                    >
                        <Icon
                            name="grommet-icons:github"
                            size="50px"
                            style="color: azure"
                        />
                    </button>
                </div>
            </article>
        </div>
    </div>
</template>
