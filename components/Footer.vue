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
                    <ul class="nav__column">
                        <li class="nav__item">
                            <NuxtLink to="/" class="nav__link nav__link--light">Главная</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link nav__link--light">О компании</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link nav__link--light">Продукция</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link nav__link--light">Преимущества</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link nav__link--light">Поддержка</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link nav__link--light">География поставок</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link nav__link--light">Контакты</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <a href="tel:+79003292396" class="link link--flex" title="Позвонить">
                                <span class="link--accent">Позвонить</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
</script>