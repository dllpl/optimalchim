<template>
    <section class="contacts" id="contacts">
        <div class="contacts__container container">
            <div class="contacts__title">
                <h2 class="title title--section">Контакты</h2>
            </div>
            <div class="contacts__content">
                <div class="contacts__content-left">
                    <h3 class="link link--accent">ООО "ОПТИМАЛХИМ"</h3>
                    <ul>
                        <li><strong>ОГРН </strong>1231600045600</li>
                        <li><strong>ИНН </strong>1674005751</li>
                        <li><strong>КПП </strong>167401001</li>
                        <li><strong>ОКПО </strong>51733744</li>
                        <br>
                        <li><strong>Генеральный директор: </strong><br>Игнатьев Виталий Сергеевич</li>
                        <li><strong>Адрес: </strong><br>Республика Татарстан, г. Казань</li>
                    </ul>
                    <div class="contacts__links" style="margin-top: 15px">
                        <div>
                            <a href="tel:+79047668200" class="link link--accent link--700" title="Позвонить"
                               target="_blank">
                                +79047668200
                            </a>
                        </div>
                        <div class="link--flex">
                            <a href="tel:+79047668200" class="link" title="Позвонить" target="_blank">
                                <div class="circle circle--light">
                                    <svg-icon name="phone" class="icon icon--hero-phone"/>
                                </div>
                            </a>
                            <a href="https://t.me/Vital2323" class="link" title="Написать в Telegram" target="_blank">
                                <div class="circle circle--light">
                                    <svg-icon name="telegram" class="icon icon--telegram"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="contacts__content-right">
                    <h2>Купить добавку</h2>
                    <ElementsForm/>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contacts"
}
</script>

<style scoped>

</style>