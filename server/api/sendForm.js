export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    let text = ''

    text = '<b>Заявки с сайта</b>\n\n'
    text += `<b>Номер телефона</b>: ${body?.phone}\n`
    text += `<b>Обращение по</b>: ${body?.name}`

    const sendData = {
        text,
        link_preview_options: {is_disabled: true},
        parse_mode: 'HTML',
        chat_id: -1002159574871
    }

    const base_url = `https://api.telegram.org/bot7131317123:AAEFfrH3aGSMMvukcWoUwK_8gg62t_SRh7w/sendMessage`


    const data = await $fetch(base_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    })

    return {success: true}
})
