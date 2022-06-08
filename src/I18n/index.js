import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        home: {
            title: 'Work in Uzbekistan'
        }
    },
    ru: {
        home: {
            title: 'Работа в Узбекистане'
        }
    },
    uz: {
        home: {
            title: "O'zbekistonda ishlash"
        }
    }
}


const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
})

export default i18n;
