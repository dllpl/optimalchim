<script setup>
const dialogOpen = () => {
    disableScroll()
    const dialog = document.querySelector('dialog')
    dialog.showModal()
}
const dialogClose = () => {
    enableScroll()
    const dialog = document.querySelector('dialog')
    dialog.close()
}

const disableScroll = () => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
}

const enableScroll = () => {
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
}

const data = ref({
    name: null,
    phone: null
})


</script>
<template>
    <button class="btn btn--feedback" @click="dialogOpen">
        <svg-icon name="chat" class="icon icon--chat"></svg-icon>
    </button>
    <dialog class="dialog">
        <button class="btn btn--dialog-close" @click="dialogClose">
            <svg-icon name="close" class="icon icon--close"></svg-icon>
        </button>
        <div class="dialog__container">
            <h2 class="dialog__title">Заказать добавку</h2>
            <div class="dialog__content">
                <ElementsForm/>
            </div>
        </div>
    </dialog>
</template>