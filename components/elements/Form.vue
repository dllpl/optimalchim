<script setup>

const emits = defineEmits(['submit'])

const formSend = ref(null)
const data = ref({
    name: null,
    phone: null
})
const sendForm = async () => {

    if (!nameValidate.value || !phoneValidate.value) {
        return false
    }

    await useFetch('/api/sendForm', {
        method: 'POST',
        body: data.value,
    })
    formSend.value = true
    setTimeout(() => {
        formSend.value = false
        data.value = {
            name: null,
            phone: null
        }
        emits('submit')
    }, 3000)
}

const maskaOptions = {
    cyrillic_and_upper_case: {
        preProcess: val => {
            val = val.replace(/[^а-яё ,-]/ig, '')
            return val.charAt(0).toUpperCase() + val.slice(1)
        },
    },
    phone: {
        mask: '+7 (9##) ###-##-##',
    },
}

const phoneValidate = computed(() => {
    const phone = data.value.phone

    if (!phone || phone.length !== 18) {
        return false
    }
    return true
})

const nameValidate = computed(() => {
    const name = data.value.name

    if (!name || name.length < 3 || name.length > 15) {
        return false
    }
    return true
})

</script>
<template>
    <form @submit.prevent="sendForm">
        <div v-if="!formSend" class="form form--column" >
            <label class="form__label" for="name">
                <div class="form__text">Имя</div>
                <div class="form__input-wrapper">
                    <div v-if="!nameValidate"
                         class="form__error">
                        Имя должно быть от 3 до 15 символов
                    </div>
                    <input
                            v-model="data.name"
                            name="name" type="text"
                            placeholder="Введите своё имя"
                            class="input"
                            v-maska:[maskaOptions.cyrillic_and_upper_case]
                    >
                </div>
            </label>
            <label class="form__label" for="name">
                <div class="form__text">Телефон</div>
                <div class="form__input-wrapper">
                    <div v-if="!phoneValidate"
                         class="form__error">
                        Введите 11 цифр
                    </div>
                    <input v-model="data.phone"
                           name="phone"
                           type="text"
                           placeholder="+7 (___) ___-__-__"
                           class="input"
                           v-maska:[maskaOptions.phone]
                    >
                </div>
            </label>
            <button class="btn btn--form" type="submit">Отправить</button>
        </div>
        <div v-else class="form form--send">
            <div class="form--send-msg">
              Форма успешно отправлена. Мы свяжемся с Вами!
            </div>
        </div>
    </form>
</template>