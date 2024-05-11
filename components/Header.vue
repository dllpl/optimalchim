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
                    <div class="header__email">
                        <span>По вопросам и предложениям</span>
                        <a href="mailto:info@optimalchim.ru" class="link link--accent link--700" title="Почта">info@optimalchim.ru</a>
                    </div>
                    <div class="header__phone">
                        <span>Для консультаций</span>
                        <a href="tel:+79003292396" class="link link--accent link--700" title="Телефон">+7 (900) 329-23-96</a>
                    </div>
                </div>
            </div>
            <div class="header__menu menu">
                <nav class="header__nav nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <NuxtLink to="/" class="nav__link">Главная</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link">О компании</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link">Продукция</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link">Преимущества</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link">Поддержка</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link">География поставок</NuxtLink>
                        </li>
                        <li class="nav__item">
                            <NuxtLink href="#" class="nav__link">Контакты</NuxtLink>
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
        </div>
    </header>
</template>
<script setup lang="ts">
</script>