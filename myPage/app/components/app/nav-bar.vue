<template>
    <nav class="container">
        <ul>
            <li>
                <NuxtLink to="/">
                    <strong>My App</strong>
                </NuxtLink>
            </li>
        </ul>
        <ul>
            <li>
                <NuxtLink :to="{ name: 'about' }">About </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
