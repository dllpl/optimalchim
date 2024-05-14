<script setup>
const currentYear = new Date().getFullYear()
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
                        <li class="footer_item">
                            <NuxtLink to="/" class="nav__link nav__link--light">Главная</NuxtLink>
                        </li>
                        <li class="footer_item">
                            <NuxtLink href="#" class="nav__link nav__link--light">О компании</NuxtLink>
                        </li>
                        <li class="footer_item">
                            <NuxtLink href="#" class="nav__link nav__link--light">Продукция</NuxtLink>
                        </li>
                        <li class="footer_item">
                            <NuxtLink href="#" class="nav__link nav__link--light">Преимущества</NuxtLink>
                        </li>
                    </ul>
                    <ul class="footer__column">
                        <li class="footer_item">
                            <NuxtLink href="#" class="nav__link nav__link--light">Поддержка</NuxtLink>
                        </li>
                        <li class="footer_item">
                            <NuxtLink href="#" class="nav__link nav__link--light">География поставок</NuxtLink>
                        </li>
                        <li class="footer_item">
                            <NuxtLink href="#" class="nav__link nav__link--light">Контакты</NuxtLink>
                        </li>
                        <li class="footer_item">
                            <a href="tel:+79003292396" class="link link--flex" title="Позвонить">
                                <svg-icon name="phone" class="icon icon--nav-phone"/>
                                <span class="link--accent">Позвонить</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="footer__sep">
            <div class="footer__container">
                <div class="footer__cop">
                    <div class="footer__cop-left">©️ {{currentYear}} ООО "ОПТИМАЛХИМ"</div>
                    <div class="footer__cop-right">
                        Сайт разработан студией <a href="https://webseed.ru" title="Заказать разработку сайта в Челнах и Казани" target="_blank" class="link--accent">webseed.ru</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
</script>