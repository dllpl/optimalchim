<template>
  <NuxtLayout>
    <Header/>
    <NuxtLoadingIndicator/>
    <NuxtPage/>
    <Footer/>
  </NuxtLayout>
</template>
<script setup lang="ts">

useSchemaOrg([
  defineOrganization({
    name: 'ОПТИМАЛХИМ - поставщик химических добавок для бетонов и строительных растворов',
    logo: '/products/air.png',
    url: 'https://optimalhim.ru',
    sameAs: [
      'https://t.me/Vital2323',
    ],
    address: {
      streetAddress: 'Казань',
      addressLocality: 'Набережные Челны',
      addressRegion: 'Республика Татарстан',
      addressCountry: 'Россия',
    }
  }),
  defineWebSite({
    name: 'ОПТИМАЛХИМ - поставщик химических добавок для бетонов и строительных растворов',
    description: 'Оптималхим - поставщик химических добавок для бетонов и растворов, помогающих подрядчикам и инженерам достичь наилучших результатов в строительных проектах. Наши высококачественные добавки оптимизируют такие характеристики бетона, как прочность, долговечность и удобоукладываемость, обеспечивая экономию времени и затрат.',
    inLanguage: ['ru-RU'],
  })
])

useSeoMeta({
  ogType: 'website',
  ogImage: '/products/air.png',
  ogImageType: 'image/png',
  ogImageHeight: 916,
  ogImageWidth: 544,
  ogLocale: 'ru_RU',
})

</script>