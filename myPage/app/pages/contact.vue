<script setup lang="ts">
import bannerImg from "~/assets/img/2.jpg";

const goToGithub = () => {
    window.open("https://github.com/Arizfurinmoto", "_blank");
};

const goToLinkein = () => {
    window.open("https://www.linkedin.com/in/szymon-godo%C5%84-a972a2213/", "_blank");
};
</script>

<template>
    <div class="page">
        <AppBaner :imgPath="bannerImg" />
        <section>
            <p style="text-align: center">Contact & info</p>
        </section>

        <section>
            <div class="grid">
                <div style="display: flex; justify-content: center">
                    <button
                        class="outline contrast"
                        style="width: 200px; height: 200px"
                        @click="goToGithub"
                    >
                        <Icon
                            name="grommet-icons:github"
                            size="80px"
                            style="color: azure"
                        />
                    </button>
                </div>
                <div style="display: flex; justify-content: center">
                    <button
                        class="outline contrast"
                        style="width: 200px; height: 200px"
                        @click="goToLinkein"
                    >
                        <Icon
                            name="grommet-icons:linkedin"
                            size="80px"
                            style="color: azure"
                        />
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
