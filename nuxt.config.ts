// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: false},

    ssr: true,

    css: ['~/assets/css/main.scss'],

    site: {
        url: 'https://optimalchim.ru/',
        name: 'ОПТИМАЛХИМ',
        defaultLocal: 'ru'
    },

    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            htmlAttrs: {
                lang: 'ru'
            },
            charset: 'utf-8',
            title: 'Оптималхим химические добавки для оптимальной производительности бетона',
            meta: [
                {
                    name: 'description',
                    content: 'Оптималхим - ведущий поставщик химических добавок для бетонов и растворов, помогающих подрядчикам и инженерам достичь наилучших результатов в строительных проектах. Наши высококачественные добавки оптимизируют такие характеристики бетона, как прочность, долговечность и удобоукладываемость, обеспечивая экономию времени и затрат.'
                }
            ],
            viewport: 'width=device-width, initial-scale=1',
            templateParams: {
                separator: '|'
            }
        }
    },

    devServer: {
        host: '127.0.0.1'
    },

    router: {
        options: {
            scrollBehaviorType: 'smooth'
        },
    },
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/seo',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/device',
        'nuxt-swiper',
        "nuxt-build-cache",
        '@vee-validate/nuxt',
        '@formkit/auto-animate/nuxt',
        'yandex-metrika-module-nuxt3',
    ],
    googleFonts: {
        families: {
            Inter: [400, 700],
            Montserrat: [400, 600, 700],
        }
    },
    veeValidate: {
        autoImports: true,
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage',
        },
    },
    yandexMetrika: {
        id: '97326649',
        webvisor: true,
        consoleLog: false,
    },

    device: {
        refreshOnResize: true
    },

    plugins: [
        '~/plugins/vee-validate.js',
        '~/plugins/maska.js',
    ],
    ...(process.env.APP_ENV === 'prod' && {
        svgSprite: {
            iconsPath: false,
        }
    }),
})