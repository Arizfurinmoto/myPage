<template>
    <nav class="container">
        <ul>
            <li>
                <NuxtLink to="/">
                    <strong>About me</strong>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink :to="{ name: 'cv' }">
                    Quick Overview
                </NuxtLink>
            </li>
        </ul>
        <ul>
            <li>
                <NuxtLink :to="{ name: 'projects' }">Projects</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="{ name: 'contact' }">Contact</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
