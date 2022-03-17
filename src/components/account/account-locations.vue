<template>
    <account-section>
        <template #header>
            <h2 class="text-2xl text-primary font-medium">Районы и адреса</h2>
            <p class="text-gray-500">
                Выберите ваши адреса что бы постоянно не вводить в процессе
                размещения заказа
            </p>
        </template>
        <template #default>
            <checkbox-list :collapsed="true"> </checkbox-list>
        </template>
        <template #footer>
            <div class="flex gap-4">
                <wb-button
                    type="primary"
                    v-if="!isEditing"
                    @click="isEditing = true"
                >
                    <svg
                        class="w-5 h-5 inline -mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                    </svg>
                    Редактировать
                </wb-button>

                <wb-button
                    type="primary"
                    v-if="isEditing"
                    @click="isEditing = false"
                >
                    <svg
                        class="w-5 h-5 inline -mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                    </svg>
                    Сохранить
                </wb-button>
                <wb-button
                    type="secondary"
                    v-if="isEditing"
                    @click="isEditing = false"
                >
                    <svg
                        class="w-5 h-5 inline -mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    Отмена
                </wb-button>
            </div>
        </template>
    </account-section>
</template>

<script setup>
import { ref } from "vue";
import AccountSection from "./account-section.vue";
import WbButton from "./wb-button.vue";
import WbSelect from "./wb-select.vue";

const isEditing = ref(false);
const locations = [
    {
        name: "Ташкент",
        translations: {
            uz: "Toshkent",
            uzl: "Тошкент",
            en: "Tashkent city",
        },
        children: [
            {
                name: "Мирзо-Улугбекский р-н ",
                translations: {
                    uz: "Mirzo-Ulug'bek tumani",
                    uzl: "Мирзо-Улугбек тумани",
                    en: "Mirzo Ulugbek district",
                },
                parent: 6,
            },
            {
                name: "Олмазарский р-н",
                translations: {
                    uz: "Olmazor tumani",
                    uzl: "Олмазор тумани",
                    en: "Olmazor district",
                },
                parent: 6,
            },
            {
                name: "Бектемирский район",
                translations: {
                    uz: "Bektemir tumani",
                    uzl: "Бектемир тумани",
                    en: "Bektemir district",
                },
                parent: 6,
            },
            {
                name: "Мирабадский район",
                translations: {
                    uz: "Mirobod tumani",
                    uzl: "Миробод тумани",
                    en: "Mirobod district",
                },
                parent: 6,
            },
            {
                name: "Сергелийский район",
                translations: {
                    uz: "Sirg'ali tumani",
                    uzl: "Сергели тумани",
                    en: "Sergeli  district",
                },
                parent: 6,
            },
            {
                name: " Учтепинский район",
                translations: {
                    uz: "Uchtepa tumani",
                    uzl: "Учтепа тумани",
                    en: "Uchtepa  district",
                },
                parent: 6,
            },
            {
                name: "Чиланзарский район",
                translations: {
                    uz: "Chilonzor tumani",
                    uzl: "Чилонзор тумани",
                    en: "Chilanzar  district",
                },
                parent: 6,
            },
            {
                name: "Шайхантахурский район",
                translations: {
                    uz: "Shayxontohur tumani",
                    uzl: "Шайхонтоҳур тумани",
                    en: "Shaykhontohur district",
                },
                parent: 6,
            },
            {
                name: "Юнусабадский район",
                translations: {
                    uz: "Yunusobod tumani",
                    uzl: "Юнусобод тумани",
                    en: "Yunusabad district",
                },
                parent: 6,
            },
            {
                name: "Яккасарайский район",
                translations: {
                    uz: "Yakkasaroy tumani",
                    uzl: "Яккасарой тумани",
                    en: "Yakkasaray  district",
                },
                parent: 6,
            },
            {
                name: "Яшнабадский район",
                translations: {
                    uz: "Yashnobod tumani",
                    uzl: "Яшнобод тумани",
                    en: "Yashnabad  district",
                },
                parent: 6,
            },
        ],
    },
    {
        name: "Ташкентская область",
        translations: {
            uz: "Toshkent viloyati",
            uzl: "Тошкент вилояти",
            en: null,
        },
        children: [
            {
                name: "Аккурганский район",
                translations: {
                    uz: "Oqqo'rg'on tumani",
                    uzl: "Оққўрғон тумани",
                    en: "Akkurgan district",
                },
                parent: 7,
            },
            {
                name: "Ахангаранский район",
                translations: {
                    uz: "Ohangaron tumani",
                    uzl: "Оҳангарон тумани",
                    en: "Ahangaran district",
                },
                parent: 7,
            },
            {
                name: "Бекабадский район",
                translations: {
                    uz: "Bekobod tumani",
                    uzl: "Бекобод тумани",
                    en: "Bekabad district",
                },
                parent: 7,
            },
            {
                name: "Бостанлыкский район",
                translations: {
                    uz: "Bo'stonliq tumani",
                    uzl: "Бўстонлиқ тумани",
                    en: "Bustonlik district",
                },
                parent: 7,
            },
            {
                name: "Букинский район",
                translations: {
                    uz: "Bo'ka tumani",
                    uzl: "Бўка тумани",
                    en: "Buka district",
                },
                parent: 7,
            },
            {
                name: "Кибрайский район",
                translations: {
                    uz: "Qibray tumani",
                    uzl: "Қибрай тумани",
                    en: "Kibray district",
                },
                parent: 7,
            },
            {
                name: "Куйичирчикский район",
                translations: {
                    uz: "Quyichirchiq tumani",
                    uzl: "Қуйичирчиқ тумани",
                    en: "Kuyichirchik district",
                },
                parent: 7,
            },
            {
                name: "Паркентский район",
                translations: {
                    uz: "Parkent tumani",
                    uzl: "Паркент тумани",
                    en: "Parkent district",
                },
                parent: 7,
            },
            {
                name: "Пскентский район",
                translations: {
                    uz: "Piskent tumani",
                    uzl: "Пскент тумани",
                    en: "Pskent district",
                },
                parent: 7,
            },
            {
                name: "Уртачирчикский район ",
                translations: {
                    uz: "O'rtachirchiq tumani",
                    uzl: "Ўртачирчиқ тумани",
                    en: "Ortachirchik district",
                },
                parent: 7,
            },
            {
                name: "Зангиатинский район",
                translations: {
                    uz: "Zangiota tumani",
                    uzl: "Зангиoтa тумани",
                    en: "Zangiota District",
                },
                parent: 7,
            },
            {
                name: "Чиназский район",
                translations: {
                    uz: "Chinoz tumani",
                    uzl: "Чинoз тумани",
                    en: "Chinoz district",
                },
                parent: 7,
            },
            {
                name: "Юкоричирчикский район",
                translations: {
                    uz: "Yuqorichirchiq tumani",
                    uzl: "Юқоричирчиқ тумани",
                    en: "Yukorichirchik district",
                },
                parent: 7,
            },
            {
                name: "Янгиюльский район",
                translations: {
                    uz: "Yangiyo'l tumani",
                    uzl: "Янгийўл тумани",
                    en: "Yangiyul district",
                },
                parent: 7,
            },
            {
                name: "город Алмалык",
                translations: {
                    uz: "Olmaliq shahri",
                    uzl: "Олмалиқ шаҳри",
                    en: "Almalyk city",
                },
                parent: 7,
            },
            {
                name: "город Ангрен",
                translations: {
                    uz: "Angren shahri",
                    uzl: "Ангрен шаҳри",
                    en: "Angren city",
                },
                parent: 7,
            },
            {
                name: "город Бекабад",
                translations: {
                    uz: "Bekobod shahri",
                    uzl: "Бекoбoд шаҳри",
                    en: "Bekabad city",
                },
                parent: 7,
            },
            {
                name: "город Чирчик",
                translations: {
                    uz: "Chirchiq shahri",
                    uzl: "Чирчиқ шаҳри",
                    en: "Chirchik city",
                },
                parent: 7,
            },
        ],
    },
    {
        name: "Андижанская область",
        translations: {
            uz: "Andijon viloyati",
            uzl: "Андижон вилояти",
            en: null,
        },
        children: [
            {
                name: "Алтынкульский район",
                translations: {
                    uz: "Oltinko'l tumani",
                    uzl: "Олтинкўл тумани",
                    en: "Oltinkul district",
                },
                parent: 9,
            },
            {
                name: "Андижанский район",
                translations: {
                    uz: "Andijon tumani",
                    uzl: "Андижoн тумани",
                    en: "Andijan district",
                },
                parent: 9,
            },
            {
                name: "Асакинский район",
                translations: {
                    uz: "Asaka tumani",
                    uzl: "Асака тумани",
                    en: "Asaka district",
                },
                parent: 9,
            },
            {
                name: "Балыкчинский район",
                translations: {
                    uz: "Baliqchi tumani",
                    uzl: "Балиқчи тумани",
                    en: "Balikchi district",
                },
                parent: 9,
            },
            {
                name: "Бозский район",
                translations: {
                    uz: "Bo'z tumani",
                    uzl: "Боз тумани ",
                    en: "Boz District",
                },
                parent: 9,
            },
            {
                name: "Булакбашинский район",
                translations: {
                    uz: "Buloqboshi tumani",
                    uzl: "Булақбoши тумани",
                    en: "Bulakboshi district",
                },
                parent: 9,
            },
            {
                name: "Джалакудукский район",
                translations: {
                    uz: "Jalaquduq tumani",
                    uzl: "Жалақудуқ тумани",
                    en: "Jalakuduk district",
                },
                parent: 9,
            },
            {
                name: "Избасканский район",
                translations: {
                    uz: "Izbosgan tumani",
                    uzl: "Избoскан тумани",
                    en: "Izboskan district",
                },
                parent: 9,
            },
            {
                name: "Кургантепинский район",
                translations: {
                    uz: "Qo'rg'ontepa tumani",
                    uzl: "Қўрғонтепа тумани",
                    en: "Kurgantepa district",
                },
                parent: 9,
            },
            {
                name: "Мархаматский район",
                translations: {
                    uz: "Marhamat tumani",
                    uzl: "Марҳамат тумани",
                    en: "Markhamat district",
                },
                parent: 9,
            },
            {
                name: "Пахтаабадский район",
                translations: {
                    uz: "Paxtaobod tumani",
                    uzl: "Пахтаобод тумани",
                    en: "Pakhtaabad district",
                },
                parent: 9,
            },
            {
                name: "Улугнорский район",
                translations: {
                    uz: "Ulug'nor tumani",
                    uzl: "Улуғнор тумани",
                    en: "Ulugnor district",
                },
                parent: 9,
            },
            {
                name: "Ходжаабадский район",
                translations: {
                    uz: "Xo'jaobod tumani",
                    uzl: "Хўжаобод тумани",
                    en: "Khojaabad district",
                },
                parent: 9,
            },
            {
                name: "Шахриханский район",
                translations: {
                    uz: "Shahrixon tumani",
                    uzl: "Шахрихон тумани",
                    en: " Shakhrikhan city",
                },
                parent: 9,
            },
            {
                name: "город Андижан",
                translations: {
                    uz: "Andijon shahri",
                    uzl: "Андижон шаҳри",
                    en: "Andijan city",
                },
                parent: 9,
            },
            {
                name: "город Ханабад",
                translations: {
                    uz: "Xonobod shahri",
                    uzl: "Хонобод шаҳри",
                    en: "Khanabad city",
                },
                parent: 9,
            },
        ],
    },
    {
        name: "Бухарская область",
        translations: {
            uz: "Buxoro viloyati",
            uzl: "Бухоро вилояти",
            en: null,
        },
        chidlren: [
            {
                name: "Алатский район",
                translations: {
                    uz: "Olot tumani",
                    uzl: "Олот тумани",
                    en: "Alat district",
                },
                parent: 10,
            },
            {
                name: "Бухарский район",
                translations: {
                    uz: "Buxoro tumani",
                    uzl: "Бухоро тумани",
                    en: "Bukhara district",
                },
                parent: 10,
            },
            {
                name: "Вабкентский район",
                translations: {
                    uz: "Vobkent tumani",
                    uzl: "Вобкент тумани",
                    en: "Вобкент тумани",
                },
                parent: 10,
            },
            {
                name: "Гиждуванский район",
                translations: {
                    uz: "G'ijduvon tumani",
                    uzl: "Ғиждувон тумани",
                    en: "Gijduvan district",
                },
                parent: 10,
            },
            {
                name: "Жондорский район",
                translations: {
                    uz: "Jondor tumani",
                    uzl: "Жондор тумани",
                    en: "Jondor district",
                },
                parent: 10,
            },
            {
                name: "Каганский район",
                translations: {
                    uz: "Kogon tumani",
                    uzl: "Когон тумани",
                    en: "Kagan district",
                },
                parent: 10,
            },
            {
                name: "Каракульский район",
                translations: {
                    uz: "Qorako'l tumani",
                    uzl: "Қоракул тумани",
                    en: "Karakul district",
                },
                parent: 10,
            },
            {
                name: "Караулбазарский район",
                translations: {
                    uz: "Qoraulbozar tumani",
                    uzl: "Қараулбoзoр тумани",
                    en: "Qaraulbozor district",
                },
                parent: 10,
            },
            {
                name: "Пешкунский район",
                translations: {
                    uz: "Peshku tumani",
                    uzl: "Пешку тумани",
                    en: "Peshku district",
                },
                parent: 10,
            },
            {
                name: "Ромитанский район",
                translations: {
                    uz: "Romitan tumani",
                    uzl: "Ромитан тумани",
                    en: "Romitan District",
                },
                parent: 10,
            },
            {
                name: "Шафирканский район",
                translations: {
                    uz: "Шофиркон тумани",
                    uzl: "Shofirkon tumani",
                    en: "Shofirkon district",
                },
                parent: 10,
            },
            {
                name: "город Бухара",
                translations: {
                    uz: "Buxoro shahri",
                    uzl: "Бухоро шаҳри",
                    en: "Bukhara city",
                },
                parent: 10,
            },
        ],
    },
    {
        name: "Джизакская область",
        translations: {
            uz: "Jizzax viloyati",
            uzl: "Жиззах вилояти",
            en: null,
        },
        children: [
            {
                name: "Арнасайский район",
                translations: {
                    uz: "Arnasoy tumani",
                    uzl: "Арнасой тумани",
                    en: "Arnasay district",
                },
                parent: 11,
            },
            {
                name: "Бахмальский район",
                translations: {
                    uz: "Baxmal tumani",
                    uzl: "Бахмал тумани",
                    en: "Bakhmal district",
                },
                parent: 11,
            },
            {
                name: "Дустликский район",
                translations: {
                    uz: "Do'stlik tumani",
                    uzl: "Дўстлик тумани",
                    en: "Dostlik district",
                },
                parent: 11,
            },
            {
                name: "Фаришский район",
                translations: {
                    uz: "Forish tumani",
                    uzl: "Фориш тумани",
                    en: "Forish district",
                },
                parent: 11,
            },
            {
                name: "Галляаральский район",
                translations: {
                    uz: "G'allaorol tumani",
                    uzl: "Ғаллаорол тумани",
                    en: "Gallaorol district",
                },
                parent: 11,
            },
            {
                name: "Джизакский район",
                translations: {
                    uz: "Jizzax tumani",
                    uzl: "Жиззах тумани",
                    en: "Jizzakh district",
                },
                parent: 11,
            },
            {
                name: "Мирзачульский район",
                translations: {
                    uz: "Mirzacho'l tumani",
                    uzl: "Мирзачўл тумани",
                    en: "Mirzachul district",
                },
                parent: 11,
            },
            {
                name: "Пахтакорский район",
                translations: {
                    uz: "Paxtakor tumani",
                    uzl: "Пахтакор тумани",
                    en: "Pakhtakor district",
                },
                parent: 11,
            },
            {
                name: "Янгиабадский район",
                translations: {
                    uz: "Yangiobod tumani",
                    uzl: "Янгиобод тумани",
                    en: "Yangiabad district",
                },
                parent: 11,
            },
            {
                name: "Зааминский район",
                translations: {
                    uz: "Zomin tumani",
                    uzl: "Зомин тумани",
                    en: "Zomin district",
                },
                parent: 11,
            },
            {
                name: "Зафарабадский район",
                translations: {
                    uz: "Zafarobod tumani",
                    uzl: "Зафаробод тумани",
                    en: "Zafarabad district",
                },
                parent: 11,
            },
            {
                name: "Зарбдарский район",
                translations: {
                    uz: "Zarbdor tumani",
                    uzl: "Зарбдор тумани",
                    en: "Zarbdor district",
                },
                parent: 11,
            },
            {
                name: "город Даштабад",
                translations: {
                    uz: "Dashtobod tumani",
                    uzl: "Даштобод тумани",
                    en: "Dashtobod district",
                },
                parent: 11,
            },
            {
                name: "город Джизак",
                translations: {
                    uz: "Jizzax shahri",
                    uzl: "Жиззах шаҳри",
                    en: "Jizzakh city",
                },
                parent: 11,
            },
        ],
    },
    {
        name: "Дехканабадский район",
        translations: {
            uz: "Dehqonobod tumani",
            uzl: "Деҳқонобод тумани",
            en: "Dehkanabad district",
        },
        parent: 12,
    },
    {
        name: "Гузарский район",
        translations: {
            uz: "G'uzor tumani",
            uzl: "Ғузор тумани",
            en: "Guzar district",
        },
        parent: 12,
    },
    {
        name: "Камашинский район",
        translations: {
            uz: "Qamashi tumani",
            uzl: "Қамаши тумани",
            en: "Kamashi district",
        },
        parent: 12,
    },
    {
        name: "Каршинский район",
        translations: {
            uz: "Qarshi tumani",
            uzl: "Қарши тумани",
            en: "Karshi district",
        },
        parent: 12,
    },
    {
        name: "Касанский район",
        translations: {
            uz: "Koson tumani",
            uzl: "Косон тумани",
            en: "Koson district",
        },
        parent: 12,
    },
    {
        name: "Касбийский район",
        translations: {
            uz: "Kasbi tumani",
            uzl: "Касби тумани",
            en: "Kasbi district",
        },
        parent: 12,
    },
    {
        name: "Китабский район",
        translations: {
            uz: "Kitob tumani",
            uzl: "Китоб тумани",
            en: "Kitab district",
        },
        parent: 12,
    },
    {
        name: "Миришкорский район",
        translations: {
            uz: "Mirishkor tumani",
            uzl: "Миришкор тумани",
            en: "Mirishkor district",
        },
        parent: 12,
    },
    {
        name: "Мубарекский район",
        translations: {
            uz: "Muborak tumani",
            uzl: " Муборак тумани",
            en: "Mubarek district",
        },
        parent: 12,
    },
    {
        name: "Нишанский район",
        translations: {
            uz: "Nishon tumani",
            uzl: "Нишон тумани",
            en: "Nishon district",
        },
        parent: 12,
    },
    {
        name: "Чиракчинский район",
        translations: {
            uz: "Chirchiq tumani",
            uzl: "Чирчиқ тумани",
            en: "Chirchiq district",
        },
        parent: 12,
    },
    {
        name: "Шахрисабзский район",
        translations: {
            uz: "Shahrisabz tumani",
            uzl: "Шаҳрисабз тумани",
            en: "Shakhrisabz district",
        },
        parent: 12,
    },
    {
        name: "Яккабагский район",
        translations: {
            uz: "Yakkabog' tumani",
            uzl: "Яккабоғ тумани",
            en: "Yakkabog district",
        },
        parent: 12,
    },
    {
        name: "город Карши",
        translations: {
            uz: "Qarshi shahri",
            uzl: "Қарши шаҳри",
            en: "Karshi city",
        },
        parent: 12,
    },
    {
        name: "Канимехский район",
        translations: {
            uz: "Konimex tumani",
            uzl: "Конимех тумани",
            en: "Konimex district",
        },
        parent: 14,
    },
    {
        name: "Кызылтепинский район",
        translations: {
            uz: "Qiziltepa tumani",
            uzl: "Қизилтепа тумани",
            en: "Kyzyltepa district",
        },
        parent: 14,
    },
    {
        name: "Карманинский район",
        translations: {
            uz: "Karmana tumani",
            uzl: "Кармана тумани",
            en: "Karmana district",
        },
        parent: 14,
    },
    {
        name: "Навбахорский район",
        translations: {
            uz: "Navbahor tumani",
            uzl: "Навбаҳор тумани",
            en: "Navbahor district",
        },
        parent: 14,
    },
    {
        name: "Нуратинский район",
        translations: {
            uz: "Nurota tumani",
            uzl: "Нурота тумани",
            en: "Nurata district",
        },
        parent: 14,
    },
    {
        name: "Зарафшанский район",
        translations: {
            uz: "Zarafshon tumani",
            uzl: "Зарафшон тумани",
            en: "Zarafshan district",
        },
        parent: 14,
    },
    {
        name: "Тамдынский район",
        translations: {
            uz: "Tomdi tumani",
            uzl: "Томди тумани",
            en: "Tomdi district",
        },
        parent: 14,
    },
    {
        name: "Учкудукский район",
        translations: {
            uz: "Uchquduq tumani",
            uzl: "Учқудуқ тумани",
            en: "Uchkuduk district",
        },
        parent: 14,
    },
    {
        name: "Хатырчинский район",
        translations: {
            uz: "Xatirchi tumani",
            uzl: "Хатирчи тумани",
            en: "Khatirchi district",
        },
        parent: 14,
    },
    {
        name: "город Навои",
        translations: {
            uz: "Navoiy shahri",
            uzl: "Навои шаҳри",
            en: "Navoi City",
        },
        parent: 14,
    },
    {
        name: "город Зарафшан",
        translations: {
            uz: "Zarafshon shahri",
            uzl: "Зарафшон шаҳри",
            en: "Zarafshan city",
        },
        parent: 14,
    },
    {
        name: "Касансайский район",
        translations: {
            uz: "Kosonsoy tumani",
            uzl: "Косонсой тумани",
            en: "Kasansay district",
        },
        parent: 15,
    },
    {
        name: "Мингбулакский район",
        translations: {
            uz: "Mingbuloq tumani",
            uzl: "Мингбулоқ тумани",
            en: "Mingbulaksky district",
        },
        parent: 15,
    },
    {
        name: "Наманганский район",
        translations: {
            uz: "Namangan viloyati",
            uzl: "Наманган вилояти",
            en: "Namangan region",
        },
        parent: 15,
    },
    {
        name: "Нарынский район",
        translations: {
            uz: "Norin tumani",
            uzl: "Норин тумани",
            en: "Naryn district",
        },
        parent: 15,
    },
    {
        name: "Папский район",
        translations: {
            uz: "Pop tumani",
            uzl: "Поп тумани",
            en: "Pop district",
        },
        parent: 15,
    },
    {
        name: "Туракурганский район",
        translations: {
            uz: "To'raqo'rg'on tumani",
            uzl: "Тўрақўрғон тумани",
            en: "Turakurgan district",
        },
        parent: 15,
    },
    {
        name: "Учкурганский район",
        translations: {
            uz: "Uchqo'rg'on tumani",
            uzl: "Учқўрғон тумани",
            en: "Uchkurgan district",
        },
        parent: 15,
    },
    {
        name: "Уйчинский район",
        translations: {
            uz: "Uychi tumani",
            uzl: "Уйчи тумани",
            en: "Uychi district",
        },
        parent: 15,
    },
    {
        name: "Чартакский район",
        translations: {
            uz: "Chortoq tumani",
            uzl: "Чортоқ тумани",
            en: "Chartak District",
        },
        parent: 15,
    },
    {
        name: "Чустский район",
        translations: {
            uz: "Chust tumani",
            uzl: "Чуст тумани",
            en: "Chust district",
        },
        parent: 15,
    },
    {
        name: "Янгикурганский район",
        translations: {
            uz: "Yangiqo'rg'on tumani",
            uzl: "Янгиқўрғон тумани",
            en: "Yangikurgan District",
        },
        parent: 15,
    },
    {
        name: "город Наманган",
        translations: {
            uz: "Namangan shahri",
            uzl: "Наманган шаҳри",
            en: "Namangan city",
        },
        parent: 15,
    },
    {
        name: "Акдарьинский район",
        translations: {
            uz: "Oqdaryo tumani",
            uzl: "Оқдарё тумани",
            en: "Akdarya district",
        },
        parent: 16,
    },
    {
        name: "Булунгурский район",
        translations: {
            uz: "Bulung'ur tumani",
            uzl: "Булунғур тумани",
            en: "Bulungur district",
        },
        parent: 16,
    },
    {
        name: "Джамбайский район",
        translations: {
            uz: "Jomboy tumani",
            uzl: "Жoмбoй тумани",
            en: "Dzhambaysky district",
        },
        parent: 16,
    },
    {
        name: "Иштыханский район",
        translations: {
            uz: "Ishtixon tumani",
            uzl: "Иштихон тумани",
            en: "Ishtykhan district",
        },
        parent: 16,
    },
    {
        name: "Каттакурганский район",
        translations: {
            uz: "Kattaqo'rg'on tumani",
            uzl: "Каттақўрғон тумани",
            en: "Kattakurgan district",
        },
        parent: 16,
    },
    {
        name: "Кошрабадский район",
        translations: {
            uz: "Qo'shrabot tumani",
            uzl: "Қўшработ тумани",
            en: "Koshrabad district",
        },
        parent: 16,
    },
    {
        name: "Нарпайский район",
        translations: {
            uz: "Narpay tumani",
            uzl: "Нарпай тумани",
            en: "Narpay district",
        },
        parent: 16,
    },
    {
        name: "Нурабадский район",
        translations: {
            uz: "Nurobod tumani",
            uzl: "Нуробод тумани",
            en: "Nurabad district",
        },
        parent: 16,
    },
    {
        name: "Пайарыкский район",
        translations: {
            uz: "Payariq tumani",
            uzl: "Паяриқ тумани",
            en: "Payaryksky district",
        },
        parent: 16,
    },
    {
        name: "Пастдаргомский район",
        translations: {
            uz: "Pastdarg'om tumani",
            uzl: "Пастдарғом тумани",
            en: "Pastdargom district",
        },
        parent: 16,
    },
    {
        name: "Пахтачийский район",
        translations: {
            uz: "Paxtachi tumani",
            uzl: "Пахтачи тумани",
            en: "Pakhtachi district",
        },
        parent: 16,
    },
    {
        name: "Самаркандский район",
        translations: {
            uz: "Samarqand viloyati",
            uzl: "Самарқанд вилояти",
            en: "Samarkand region",
        },
        parent: 16,
    },
    {
        name: "Тайлакский район",
        translations: {
            uz: "Tayloq tumani",
            uzl: "Тайлоқ тумани",
            en: "Taylak district",
        },
        parent: 16,
    },
    {
        name: "Ургутский район",
        translations: {
            uz: "Urgut tumani",
            uzl: "Ургут тумани",
            en: "Urgut district",
        },
        parent: 16,
    },
    {
        name: "город Каттакурган",
        translations: {
            uz: "Kattaqo'rg'on shahri",
            uzl: "Каттақўрғон шаҳри",
            en: "Kattakurgan city",
        },
        parent: 16,
    },
    {
        name: "город Самарканд",
        translations: {
            uz: "Samarqand shahri",
            uzl: "Самарқанд шаҳри",
            en: "Samarkand city",
        },
        parent: 16,
    },
    {
        name: "Алтынсайский район",
        translations: {
            uz: "Oltinsoy tumani",
            uzl: "Олтинсой тумани",
            en: "Altynsay district",
        },
        parent: 17,
    },
    {
        name: "Ангорский район",
        translations: {
            uz: "Angora tumani",
            uzl: "Ангора тумани",
            en: "Angora district",
        },
        parent: 17,
    },
    {
        name: "Байсунский район",
        translations: {
            uz: "Boysun tumani",
            uzl: "Бойсун тумани",
            en: "Baysun district",
        },
        parent: 17,
    },
    {
        name: "Денауский район",
        translations: {
            uz: "Denov tumani",
            uzl: "Денов тумани",
            en: "Denau district",
        },
        parent: 17,
    },
    {
        name: "Джаркурганский район",
        translations: {
            uz: "Jarqo'rg'on tumani",
            uzl: "Жарқўрғон тумани",
            en: "Dzharkurgan district",
        },
        parent: 17,
    },
    {
        name: "Кизирикский район",
        translations: {
            uz: "Qiziriq tumani",
            uzl: "Қизириқ тумани",
            en: "Kizirik district",
        },
        parent: 17,
    },
    {
        name: "Кумкурганский район",
        translations: {
            uz: "Qumqo'rg'on tumani",
            uzl: "Қумқўрғон тумани",
            en: "Kumkurgan district",
        },
        parent: 17,
    },
    {
        name: "Музрабадский район",
        translations: {
            uz: "Muzrabot tumani",
            uzl: "Музработ тумани",
            en: "Muzrabad district",
        },
        parent: 17,
    },
    {
        name: "Сариасийский район",
        translations: {
            uz: "Sariosiyo tumani",
            uzl: "Сариосиё тумани",
            en: "Sariasi district",
        },
        parent: 17,
    },
    {
        name: "Термезский район",
        translations: {
            uz: "Termiz tumani",
            uzl: "Термиз тумани",
            en: "Termez district",
        },
        parent: 17,
    },
    {
        name: "Узунский район",
        translations: {
            uz: "Uzun tumani",
            uzl: "Узун тумани",
            en: "Uzun district",
        },
        parent: 17,
    },
    {
        name: "Шерабадский район",
        translations: {
            uz: "Sherobod tumani",
            uzl: "Шеробод тумани",
            en: "Sherabad district",
        },
        parent: 17,
    },
    {
        name: "Шурчинский район",
        translations: {
            uz: "Sho'rchi tumani",
            uzl: "Шўрчи тумани",
            en: "Shurchinsky district",
        },
        parent: 17,
    },
    {
        name: "город Термиз",
        translations: {
            uz: "Termiz shahri",
            uzl: "Термиз шаҳри",
            en: "city of Termez",
        },
        parent: 17,
    },
    {
        name: "Акалтынский район",
        translations: {
            uz: "Oqoltin tumani",
            uzl: "Оқолтин тумани",
            en: "Akaltyn district",
        },
        parent: 18,
    },
    {
        name: "Баяутский район",
        translations: {
            uz: "Boyut tumani",
            uzl: "Боют тумани",
            en: "Bayautsky district",
        },
        parent: 18,
    },
    {
        name: "Гулистанский район",
        translations: {
            uz: "Guliston tumani",
            uzl: "Гулистон тумани",
            en: "Gulistan district",
        },
        parent: 18,
    },
    {
        name: "Мирзаабадский район",
        translations: {
            uz: "Mirzaobod tumani",
            uzl: "Мирзаобод тумани",
            en: "Mirzaabad district",
        },
        parent: 18,
    },
    {
        name: "Сайхунабадский район",
        translations: {
            uz: "Sayxunobod tumani",
            uzl: "Сайхунобод тумани",
            en: "Saikhunabad district",
        },
        parent: 18,
    },
    {
        name: "Сардобинский район",
        translations: {
            uz: "Sardoba tumani",
            uzl: "Сардоба тумани",
            en: "Sardoba district",
        },
        parent: 18,
    },
    {
        name: "Сырдарьинский район",
        translations: {
            uz: "Sirdaryo tumani",
            uzl: "Сирдарё тумани",
            en: "Syrdarya district",
        },
        parent: 18,
    },
    {
        name: "Хавастский район",
        translations: {
            uz: "Xovos tumani",
            uzl: "Ховос тумани",
            en: "Havast district",
        },
        parent: 18,
    },
    {
        name: "город Гулистан",
        translations: {
            uz: "Guliston shahri",
            uzl: "Гулистон шаҳри",
            en: "Gulistan city",
        },
        parent: 18,
    },
    {
        name: "город Ширин",
        translations: {
            uz: "Shirin shahri",
            uzl: "Ширин шаҳри",
            en: "Shirin city",
        },
        parent: 18,
    },
    {
        name: "город Янгиер",
        translations: {
            uz: "Yangiyer shahri",
            uzl: "Янгиер шаҳри",
            en: "Yangiyer city",
        },
        parent: 18,
    },
    {
        name: "Алтыарыкский район",
        translations: {
            uz: "Oltiariq tumani",
            uzl: "Олтиариқ тумани",
            en: "Altyaryk district",
        },
        parent: 19,
    },
    {
        name: "Багдадский район",
        translations: {
            uz: "Bog'dod tumani",
            uzl: "Боғдод тумани",
            en: "Baghdad district",
        },
        parent: 19,
    },
    {
        name: "Бешарыкский район",
        translations: {
            uz: "Beshariq tumani",
            uzl: "Бешариқ тумани",
            en: "Besharyk district",
        },
        parent: 19,
    },
    {
        name: "Бувайдинский район",
        translations: {
            uz: "Buvayda tumani",
            uzl: "Бувайда тумани",
            en: "Buvaidinsky district",
        },
        parent: 19,
    },
    {
        name: "Дангаринский район",
        translations: {
            uz: "Dang'ara tumani",
            uzl: "Данғара тумани",
            en: "Dangarinsky district",
        },
        parent: 19,
    },
    {
        name: "Кувинский район",
        translations: {
            uz: "Quva tumani",
            uzl: "Қува тумани",
            en: "Kuva district",
        },
        parent: 19,
    },
    {
        name: "Куштепинский район",
        translations: {
            uz: "Qushtepa tumani",
            uzl: "Қуштепа тумани",
            en: "Kushtepa district",
        },
        parent: 19,
    },
    {
        name: "Риштанский район",
        translations: {
            uz: "Rishton tumani",
            uzl: "Риштон тумани",
            en: "Rishtan district",
        },
        parent: 19,
    },
    {
        name: "Сохский район",
        translations: {
            uz: "So‘x tumani",
            uzl: "Сўх тумани",
            en: "Sokh district",
        },
        parent: 19,
    },
    {
        name: "Ташлакский район",
        translations: {
            uz: "Toshloq tumani",
            uzl: "Тошлоқ тумани",
            en: "Tashlak district",
        },
        parent: 19,
    },
    {
        name: "Узбекистанский район",
        translations: {
            uz: "O'zbekiston viloyati",
            uzl: "Ўзбекистон вилояти",
            en: "Uzbekistan region",
        },
        parent: 19,
    },
    {
        name: "Учкуприкский район",
        translations: {
            uz: "Uchko'prik tumani",
            uzl: "Учкўприк тумани",
            en: "Uchkuprik district",
        },
        parent: 19,
    },
    {
        name: "Ферганский район",
        translations: {
            uz: "Farg'ona viloyati",
            uzl: "Фарғона вилояти",
            en: "Ferghana region",
        },
        parent: 19,
    },
    {
        name: "Фуркатский район",
        translations: {
            uz: "Furqat tumani",
            uzl: "Фурқат тумани",
            en: "Furkat district",
        },
        parent: 19,
    },
    {
        name: "Язъяванский район",
        translations: {
            uz: "Yozyovon tumani",
            uzl: "Ёзёвон тумани",
            en: "Yazyavan district",
        },
        parent: 19,
    },
    {
        name: "город Коканд",
        translations: {
            uz: "Qo'qon shahri",
            uzl: "Қўқон шаҳри",
            en: "Kokand city",
        },
        parent: 19,
    },
    {
        name: "город Кувасай",
        translations: {
            uz: "Quvasoy shahri",
            uzl: "Қувасой шаҳри",
            en: "Kuvasay city",
        },
        parent: 19,
    },
    {
        name: "город Маргилан",
        translations: {
            uz: "Marg'ilon shahri",
            uzl: "Марғилон шаҳри",
            en: "Margilan city",
        },
        parent: 19,
    },
    {
        name: "город Фергана",
        translations: {
            uz: "Farg'ona shahri",
            uzl: "Фарғона шаҳри",
            en: "Ferghana city",
        },
        parent: 19,
    },
    {
        name: "Боготский район",
        translations: {
            uz: "Bog'ot tumani",
            uzl: "Боғот тумани",
            en: "Bogotsky district",
        },
        parent: 20,
    },
    {
        name: "Гурленский район",
        translations: {
            uz: "Gurlan tumani",
            uzl: "Гурлан тумани",
            en: "Gurlensky district",
        },
        parent: 20,
    },
    {
        name: "Кушкупирский район",
        translations: {
            uz: "Qo'shko'pir tumani",
            uzl: "Қўшкўпир тумани",
            en: "Kushkupir district",
        },
        parent: 20,
    },
    {
        name: "Урганчский район",
        translations: {
            uz: "Urganch tumani",
            uzl: "Урганч тумани",
            en: "Urganch district",
        },
        parent: 20,
    },
    {
        name: "Хазораспский район",
        translations: {
            uz: "Hazorasp tumani",
            uzl: "Ҳазорасп тумани",
            en: "Khazorasp district",
        },
        parent: 20,
    },
    {
        name: "Ханкинский район",
        translations: {
            uz: "Xonqa tumani",
            uzl: "Хонқа тумани",
            en: "Hankinsky District",
        },
        parent: 20,
    },
    {
        name: "Хивинский район",
        translations: {
            uz: "Xiva tumani",
            uzl: "Хива тумани",
            en: "Khiva district",
        },
        parent: 20,
    },
    {
        name: "Шаватский район",
        translations: {
            uz: "Shovot tumani",
            uzl: "Шовот тумани",
            en: "Shavat district",
        },
        parent: 20,
    },
    {
        name: "Янгиарикский район",
        translations: {
            uz: "Yangiariq tumani",
            uzl: "Янгиариқ тумани",
            en: "Yangiarik district",
        },
        parent: 20,
    },
    {
        name: "Янгибозорский район",
        translations: {
            uz: "Yangibozor tumani",
            uzl: "Янгибозор тумани",
            en: "Yangibozor district",
        },
        parent: 20,
    },
    {
        name: "город Ургенч",
        translations: {
            uz: "Urganch shahri",
            uzl: "Урганч шаҳри",
            en: "city Urgench",
        },
        parent: 20,
    },
    {
        name: "Амударьинский район",
        translations: {
            uz: "Amudaryo tumani",
            uzl: "Амударё тумани",
            en: "Amudarya district",
        },
        parent: 21,
    },
    {
        name: "Берунийский район",
        translations: {
            uz: "Beruniy tumani",
            uzl: "Беруний тумани",
            en: "Beruni district",
        },
        parent: 21,
    },
    {
        name: "Караузякский район",
        translations: {
            uz: "Qorauzak tumani",
            uzl: "Қораузак тумани",
            en: "Karauzak district",
        },
        parent: 21,
    },
    {
        name: "Кегейлийский район",
        translations: {
            uz: "Kegayli tumani",
            uzl: "Кегайли тумани",
            en: "Kegeili district",
        },
        parent: 21,
    },
    {
        name: "Кунградский район",
        translations: {
            uz: "Qo'ng'irot tumani",
            uzl: "Қўнғирот тумани",
            en: "Kungrad district",
        },
        parent: 21,
    },
    {
        name: "Канлыкульский район",
        translations: {
            uz: "Qonliko'l tumani",
            uzl: "Қонликўл тумани",
            en: "Kanlykul district",
        },
        parent: 21,
    },
    {
        name: "Муйнакский район",
        translations: {
            uz: "Mo'ynoq tumani",
            uzl: "Мўйноқ тумани",
            en: "Muynak district",
        },
        parent: 21,
    },
    {
        name: "Нукусский район",
        translations: {
            uz: "Nukus tumani",
            uzl: "Нукус тумани",
            en: "Nukus district",
        },
        parent: 21,
    },
    {
        name: "Тахтакупырский район",
        translations: {
            uz: "Taxtako'pir tumani",
            uzl: "Тахтакўпир тумани",
            en: "Takhtakupyr district",
        },
        parent: 21,
    },
    {
        name: "Турткульский район",
        translations: {
            uz: "To'rtko'l tumani",
            uzl: "Тўрткўл тумани",
            en: "Turtkul district",
        },
        parent: 21,
    },
    {
        name: "Ходжейлийский район",
        translations: {
            uz: "Xo'jayli tumani",
            uzl: "Хўжайли тумани",
            en: "Khojayli district",
        },
        parent: 21,
    },
    {
        name: "Чимбайский район",
        translations: {
            uz: "Chimboy tumani",
            uzl: "Чимбой тумани",
            en: "Chimbay district",
        },
        parent: 21,
    },
    {
        name: "Шуманайский район",
        translations: {
            uz: "Shumanay tumani",
            uzl: "Шуманай тумани",
            en: "Shumanay district",
        },
        parent: 21,
    },
    {
        name: "Элликкалинский район",
        translations: {
            uz: "Ellikqal'a tumani",
            uzl: "Элликқалъа тумани",
            en: "Ellikkalin district",
        },
        parent: 21,
    },
    {
        name: "город Нукус",
        translations: {
            uz: "Nukus shahri",
            uzl: "Нукус шаҳри",
            en: "Nukus city",
        },
        parent: 21,
    },
    {
        name: "город Тахиаташ",
        translations: {
            uz: "Taxiatosh shahri",
            uzl: "Тахиатош шаҳри",
            en: "Takhiatash city",
        },
        parent: 21,
    },
];
console.log(locations);
</script>
