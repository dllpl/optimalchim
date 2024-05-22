<script setup>
const currentYear = new Date().getFullYear()
const nav = useNav()
</script>
<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__container">
                <div class="footer__left">
                    <NuxtLink to="/" title="ООО ОПТИМАЛХИМ">
                        <div class="logo">
                            <svg-icon name="logo" class="logo__icon"/>
                            <div class="logo__content">
                                <span class="logo__content-title logo__content-title--light">ОПТИМАЛХИМ</span>
                                <span class="logo__content-subtitle">ДОБАВКИ ДЛЯ БЕТОНОВ И СТРОИТЕЛЬНЫХ РАСТВОРОВ</span>
                            </div>
                        </div>
                    </NuxtLink>
                    <div class="footer__company">Общество с ограниченной ответственностью "ОПТИМАЛХИМ"</div>
                </div>
                <div class="footer__right">
                    <ul class="footer__column">
                        <li class="footer_item"
                            v-for="(item, i) in nav" :key="i"
                        >
                            <NuxtLink :to="item.link" class="nav__link nav__link--light">{{ item.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="footer__sep">
            <div class="footer__container">
                <div class="footer__cop">
                    <div class="footer__cop-left">©️ {{currentYear}} Все права защищены.</div>
                    <div class="footer__cop-right">
                        <a href="https://webseed.ru" title="Заказать разработку сайта в Челнах и Казани" target="_blank" class="dev link--accent">
                            <span>Разработка и продвижение сайтов webseed.ru</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
</script>