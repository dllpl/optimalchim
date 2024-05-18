export default defineEventHandler(async (event) => {

    const body = await readBody(event)


    //TODO send to telegram

    console.log(body)

})
