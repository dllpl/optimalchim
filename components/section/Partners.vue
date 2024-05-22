<script setup>
const SwiperConfig = {
    modules: [
        SwiperAutoplay,
        SwiperNavigation,
    ],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        prevEl: '.prev-product',
        nextEl: '.next-product',
    },
    breakpoints: {
        '767': {
            slidesPerView: 3,
            spaceBetween: 100,
        },
        //   '1440': {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //   },
    }
}
</script>

<template>
    <section class="section section--partners" id="partners">
        <div class="partners__container container">
            <div class="partners__title">
                <h2 class="title title--section">Партнеры</h2>
            </div>
            <div class="partners__content">
                <Swiper class="partners__list" v-bind="SwiperConfig">
                    <SwiperSlide>
                        <div class="partners__item">
                            <img src="/img/partners/webseed.webp" alt="" class="partners__item-img">
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="partners__item">
                            <img src="/img/partners/fasie.webp" alt="" class="partners__item-img">
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>