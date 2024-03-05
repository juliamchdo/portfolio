<template>
    <footer class="footer">
        <div class="medias">
            <VButton v-for="(button, i) in buttonProps" :key="i" :icon="button.icon" color="white"  :link="button.link" type="flat" />
        </div>
        <p>Desenvolvido por Júlia Machado</p>
    </footer>
</template>

<script setup lang="ts">
import VButton from './V-Button.vue';
import { ButtonProps } from '../types/header';
const buttonProps: ButtonProps[] = [
    { icon: 'fa-brands fa-github', link: 'https://github.com/juliamchdo' },
    {
        icon: 'fa-brands fa-linkedin-in',
        link: 'https://www.linkedin.com/in/juliamchdo/',
    },
    { icon: 'fa-solid fa-envelope', link: 'mailto:juliamachado.dev@gmail.com' },
];
</script>

<style lang="scss" scoped>

.buttons .flat{
    color: white !important;
}

.q-pa-md {
    padding: 0 !important;
}

.footer{
    width: 100%;
    background-color: #8234e9;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    .medias{
        display: flex;
    }

    p{
        font-size: 1.2rem;
        margin: 0;
    }
}

@media screen and (max-width: 430px) {
    .footer{
        height: 8rem;
        flex-direction: column;
        gap: 1rem;
    }
}

@media screen and (min-width: 431px) {
    .footer{
        height: 5rem;
        gap: 14rem;
    }
}
</style>