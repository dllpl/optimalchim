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
            spaceBetween: 30,
        },
    }
}
</script>

<template>
    <section class="products" id="products">
        <div class="products__container container">
            <div class="products__top">
                <div>
                    <h2 class="products__title title title--section">Наша продукция</h2>
                    <span>Оптималхим предлагает широкий спектр химических добавок для различных областей применения. Объем 1-3 литра.</span>
                </div>
                <div class="products__nav">
                    <button class="btn products__btn prev-product">
                        <svg-icon name="arrow" class="icon icon--arrow icon--arrow-small"/>
                    </button>
                    <button class="btn products__btn next-product">
                        <svg-icon name="arrow" class="icon icon--arrow icon--arrow-right icon--arrow-small"/>
                    </button>
                </div>
            </div>
            <div>
                <Swiper class="products__list" v-bind="SwiperConfig">
                    <SwiperSlide>
                        <div class="products__item">
                            <img src="/img/products/monokrit.png" alt="Платификатор для летнего бетонирования МОНОКРИТ"
                                 class="products__item-img" loading="lazy">
                            <div class="products__item-text">
                                <div class="products__item-title">МОНОКРИТ</div>
                                <div>
                                    <h3 class="products__item-subtitle">
                                        Платификаторы для летнего бетонирования.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="products__item">
                            <img src="/img/products/reofrost.png" alt="Добавка для зимнего бетонирования РЕОФРОСТ"
                                 class="products__item-img" loading="lazy">
                            <div class="products__item-text">
                                <div class="products__item-title">РЕОФРОСТ</div>
                                <div>
                                    <h3 class="products__item-subtitle">
                                        Добавки для зимнего бетонирования.
                                    </h3>
                                    <h3 class="products__item-subtitle">
                                        Комплексные суперпластификаторы для зимнего бетонирования.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="products__item">
                            <img src="/img/products/air.png" alt="Добавка для строительных растворов АИР"
                                 class="products__item-img" loading="lazy">
                            <div class="products__item-text">
                                <div class="products__item-title">АИР</div>
                                <h3 class="products__item-subtitle">Добавки для строительных растворов</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="products__item">
                            <img src="/img/products/reostab.png" alt="Добавка, регулирующие сроки схватывания РЕОСТАБ"
                                 class="products__item-img" loading="lazy">
                            <div class="products__item-text">
                                <div class="products__item-title">РЕОСТАБ</div>
                                <h3 class="products__item-subtitle">Добавки, регулирующие сроки схватывания</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="products__item">
                            <img src="/img/products/gidrofob.png"
                                 alt="Гидрофобизирующий состав для обработки каменных поверхностей"
                                 class="products__item-img" loading="lazy">
                            <div class="products__item-text">
                                <div class="products__item-title">ГИДРОФОБ</div>
                                <h3 class="products__item-subtitle">Гидрофобизирующий состав для обработки каменных
                                    поверхностей</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
</script>