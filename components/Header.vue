<script setup>
const menu = useNav()

const contacts = [
    {title: 'По вопросам и предложениям', link: 'mailto:info@optimalchim.ru', text: 'info@optimalchim.ru'},
    {title: 'Для консультаций', link: 'tel:+79003292396', text: '+7 (900) 329-23-96'},
]

const menuOpen = ref(false);

const toggleMenu = (is_burger = false) => {
    console.log(menuOpen.value, is_burger)
    if(menuOpen.value || is_burger) {
        menuOpen.value = !menuOpen.value;
        document.body.classList.toggle("dis-scroll");
    }
};
</script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <NuxtLink to="/" class="header__left" title="ООО ОПТИМАЛХИМ">
                    <div class="logo">
                        <svg-icon name="logo" class="logo__icon"/>
                        <div class="logo__content">
                            <span class="logo__content-title">ОПТИМАЛХИМ</span>
                            <span class="logo__content-subtitle">ДОБАВКИ ДЛЯ БЕТОНОВ И СТРОИТЕЛЬНЫХ РАСТВОРОВ</span>
                        </div>
                    </div>
                </NuxtLink>
                <div class="header__right">
                    <div class="header__contact" v-for="(item, i) in contacts" :key="i">
                        <span>{{item.title}}</span>
                        <a :href="item.link" class="link link--accent link--700" :title="item.title">{{item.text}}</a>
                    </div>
                    <button class="header__burger btn burger"
                            @click="toggleMenu(true)"
                    >
                        <svg-icon :name="menuOpen ? 'close' : 'burger'" class="icon--burger"/>
                    </button>
                </div>
            </div>
            <div class="header__menu menu">
                <nav class="header__nav nav">
                    <ul class="nav__list">
                        <li class="nav__item" v-for="(item, i) in menu" :key="i">
                            <NuxtLink :to="item.link" class="nav__link">{{ item.title }}</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <a href="tel:+79003292396" class="link link--flex" title="Позвонить">
                                <svg-icon name="phone" class="icon icon--nav-phone"/>
                                <span class="link--accent">позвонить нам</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header__menu-mobile" :class="menuOpen ? 'header__menu-mobile-active' : ''">
                <nav class="header__nav nav">
                    <ul class="nav__list-mobile">
                        <li class="nav__item" v-for="(item, i) in menu" :key="i">
                            <NuxtLink :to="item.link" class="nav__link" @click="toggleMenu(false)">{{ item.title }}</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <a href="tel:+79003292396" class="link link--flex" title="Позвонить" style="justify-content:start">
                                <svg-icon name="phone" class="icon icon--nav-phone"/>
                                <span class="link--accent">позвонить нам</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="header__contact-mobile" v-for="(item, i) in contacts" :key="i">
                    <span>{{item.title}}</span>
                    <a :href="item.link" class="link link--accent link--700" :title="item.title">{{item.text}}</a>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
</script>