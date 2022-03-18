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
            <!-- <checkbox-list
                label="Районы на выезд"
                :options="locations"
                v-model="selected"
                :collapsed="true"
                is-nested
            ></checkbox-list> -->
        </template>
        <template #footer>
            <div class="flex gap-4">
                <wb-button type="primary" @click="isEditing = !isEditing">
                    <span v-if="!isEditing">
                        <h-pencil class="inline -mt-0.5"></h-pencil>
                        Редактировать
                    </span>
                    <span v-if="isEditing">
                        <h-cloud-upload class="inline -mt-0.5"></h-cloud-upload>
                        Сохранить
                    </span>
                </wb-button>
                <wb-button
                    type="secondary"
                    v-if="isEditing"
                    @click="isEditing = false"
                >
                    <h-x class="inline -mt-0.5"></h-x>
                    Отмена
                </wb-button>
            </div>
        </template>
    </account-section>
</template>

<script setup>
import { ref, watch } from "vue";
import AccountSection from "./account-section.vue";
import WbButton from "./wb-button.vue";
import WbSelect from "./wb-select.vue";
import CheckboxList from "./checkbox-list.vue";

const isEditing = ref(false);
const selected = ref([]);

const locations = [
    {
        id: 1,
        name: "Ташкент",
        translations: {
            uz: "Toshkent",
            uzl: "Тошкент",
            en: "Tashkent city",
        },
        children: [
            {
                id: 2,
                name: "Мирзо-Улугбекский р-н ",
                translations: {
                    uz: "Mirzo-Ulug'bek tumani",
                    uzl: "Мирзо-Улугбек тумани",
                    en: "Mirzo Ulugbek district",
                },
            },
            {
                id: 3,
                name: "Олмазарский р-н",
                translations: {
                    uz: "Olmazor tumani",
                    uzl: "Олмазор тумани",
                    en: "Olmazor district",
                },
            },
            {
                id: 4,
                name: "Бектемирский район",
                translations: {
                    uz: "Bektemir tumani",
                    uzl: "Бектемир тумани",
                    en: "Bektemir district",
                },
            },
            {
                id: 5,
                name: "Мирабадский район",
                translations: {
                    uz: "Mirobod tumani",
                    uzl: "Миробод тумани",
                    en: "Mirobod district",
                },
            },
            {
                id: 6,
                name: "Сергелийский район",
                translations: {
                    uz: "Sirg'ali tumani",
                    uzl: "Сергели тумани",
                    en: "Sergeli  district",
                },
            },
            {
                id: 7,
                name: " Учтепинский район",
                translations: {
                    uz: "Uchtepa tumani",
                    uzl: "Учтепа тумани",
                    en: "Uchtepa  district",
                },
            },
            {
                id: 8,
                name: "Чиланзарский район",
                translations: {
                    uz: "Chilonzor tumani",
                    uzl: "Чилонзор тумани",
                    en: "Chilanzar  district",
                },
            },
            {
                id: 9,
                name: "Шайхантахурский район",
                translations: {
                    uz: "Shayxontohur tumani",
                    uzl: "Шайхонтоҳур тумани",
                    en: "Shaykhontohur district",
                },
            },
            {
                id: 10,
                name: "Юнусабадский район",
                translations: {
                    uz: "Yunusobod tumani",
                    uzl: "Юнусобод тумани",
                    en: "Yunusabad district",
                },
            },
            {
                id: 11,
                name: "Яккасарайский район",
                translations: {
                    uz: "Yakkasaroy tumani",
                    uzl: "Яккасарой тумани",
                    en: "Yakkasaray  district",
                },
            },
            {
                id: 12,
                name: "Яшнабадский район",
                translations: {
                    uz: "Yashnobod tumani",
                    uzl: "Яшнобод тумани",
                    en: "Yashnabad  district",
                },
            },
        ],
    },
    {
        id: 13,
        name: "Ташкентская область",
        translations: {
            uz: "Toshkent viloyati",
            uzl: "Тошкент вилояти",
            en: null,
        },
        children: [
            {
                id: 14,
                name: "Аккурганский район",
                translations: {
                    uz: "Oqqo'rg'on tumani",
                    uzl: "Оққўрғон тумани",
                    en: "Akkurgan district",
                },
            },
            {
                id: 15,
                name: "Ахангаранский район",
                translations: {
                    uz: "Ohangaron tumani",
                    uzl: "Оҳангарон тумани",
                    en: "Ahangaran district",
                },
            },
            {
                id: 16,
                name: "Бекабадский район",
                translations: {
                    uz: "Bekobod tumani",
                    uzl: "Бекобод тумани",
                    en: "Bekabad district",
                },
            },
            {
                id: 17,
                name: "Бостанлыкский район",
                translations: {
                    uz: "Bo'stonliq tumani",
                    uzl: "Бўстонлиқ тумани",
                    en: "Bustonlik district",
                },
            },
            {
                id: 18,
                name: "Букинский район",
                translations: {
                    uz: "Bo'ka tumani",
                    uzl: "Бўка тумани",
                    en: "Buka district",
                },
            },
            {
                id: 19,
                name: "Кибрайский район",
                translations: {
                    uz: "Qibray tumani",
                    uzl: "Қибрай тумани",
                    en: "Kibray district",
                },
            },
            {
                id: 20,
                name: "Куйичирчикский район",
                translations: {
                    uz: "Quyichirchiq tumani",
                    uzl: "Қуйичирчиқ тумани",
                    en: "Kuyichirchik district",
                },
            },
            {
                id: 21,
                name: "Паркентский район",
                translations: {
                    uz: "Parkent tumani",
                    uzl: "Паркент тумани",
                    en: "Parkent district",
                },
            },
            {
                id: 22,
                name: "Пскентский район",
                translations: {
                    uz: "Piskent tumani",
                    uzl: "Пскент тумани",
                    en: "Pskent district",
                },
            },
            {
                id: 23,
                name: "Уртачирчикский район ",
                translations: {
                    uz: "O'rtachirchiq tumani",
                    uzl: "Ўртачирчиқ тумани",
                    en: "Ortachirchik district",
                },
            },
            {
                id: 24,
                name: "Зангиатинский район",
                translations: {
                    uz: "Zangiota tumani",
                    uzl: "Зангиoтa тумани",
                    en: "Zangiota District",
                },
            },
            {
                id: 25,
                name: "Чиназский район",
                translations: {
                    uz: "Chinoz tumani",
                    uzl: "Чинoз тумани",
                    en: "Chinoz district",
                },
            },
            {
                id: 26,
                name: "Юкоричирчикский район",
                translations: {
                    uz: "Yuqorichirchiq tumani",
                    uzl: "Юқоричирчиқ тумани",
                    en: "Yukorichirchik district",
                },
            },
            {
                id: 27,
                name: "Янгиюльский район",
                translations: {
                    uz: "Yangiyo'l tumani",
                    uzl: "Янгийўл тумани",
                    en: "Yangiyul district",
                },
            },
            {
                id: 28,
                name: "город Алмалык",
                translations: {
                    uz: "Olmaliq shahri",
                    uzl: "Олмалиқ шаҳри",
                    en: "Almalyk city",
                },
            },
            {
                id: 29,
                name: "город Ангрен",
                translations: {
                    uz: "Angren shahri",
                    uzl: "Ангрен шаҳри",
                    en: "Angren city",
                },
            },
            {
                id: 30,
                name: "город Бекабад",
                translations: {
                    uz: "Bekobod shahri",
                    uzl: "Бекoбoд шаҳри",
                    en: "Bekabad city",
                },
            },
            {
                id: 31,
                name: "город Чирчик",
                translations: {
                    uz: "Chirchiq shahri",
                    uzl: "Чирчиқ шаҳри",
                    en: "Chirchik city",
                },
            },
        ],
    },
    {
        id: 32,
        name: "Андижанская область",
        translations: {
            uz: "Andijon viloyati",
            uzl: "Андижон вилояти",
            en: null,
        },
        children: [
            {
                id: 33,
                name: "Алтынкульский район",
                translations: {
                    uz: "Oltinko'l tumani",
                    uzl: "Олтинкўл тумани",
                    en: "Oltinkul district",
                },
            },
            {
                id: 34,
                name: "Андижанский район",
                translations: {
                    uz: "Andijon tumani",
                    uzl: "Андижoн тумани",
                    en: "Andijan district",
                },
            },
            {
                id: 35,
                name: "Асакинский район",
                translations: {
                    uz: "Asaka tumani",
                    uzl: "Асака тумани",
                    en: "Asaka district",
                },
            },
            {
                id: 36,
                name: "Балыкчинский район",
                translations: {
                    uz: "Baliqchi tumani",
                    uzl: "Балиқчи тумани",
                    en: "Balikchi district",
                },
            },
            {
                id: 37,
                name: "Бозский район",
                translations: {
                    uz: "Bo'z tumani",
                    uzl: "Боз тумани ",
                    en: "Boz District",
                },
            },
            {
                id: 38,
                name: "Булакбашинский район",
                translations: {
                    uz: "Buloqboshi tumani",
                    uzl: "Булақбoши тумани",
                    en: "Bulakboshi district",
                },
            },
            {
                id: 39,
                name: "Джалакудукский район",
                translations: {
                    uz: "Jalaquduq tumani",
                    uzl: "Жалақудуқ тумани",
                    en: "Jalakuduk district",
                },
            },
            {
                id: 40,
                name: "Избасканский район",
                translations: {
                    uz: "Izbosgan tumani",
                    uzl: "Избoскан тумани",
                    en: "Izboskan district",
                },
            },
            {
                id: 41,
                name: "Кургантепинский район",
                translations: {
                    uz: "Qo'rg'ontepa tumani",
                    uzl: "Қўрғонтепа тумани",
                    en: "Kurgantepa district",
                },
            },
            {
                id: 42,
                name: "Мархаматский район",
                translations: {
                    uz: "Marhamat tumani",
                    uzl: "Марҳамат тумани",
                    en: "Markhamat district",
                },
            },
            {
                id: 43,
                name: "Пахтаабадский район",
                translations: {
                    uz: "Paxtaobod tumani",
                    uzl: "Пахтаобод тумани",
                    en: "Pakhtaabad district",
                },
            },
            {
                id: 44,
                name: "Улугнорский район",
                translations: {
                    uz: "Ulug'nor tumani",
                    uzl: "Улуғнор тумани",
                    en: "Ulugnor district",
                },
            },
            {
                id: 45,
                name: "Ходжаабадский район",
                translations: {
                    uz: "Xo'jaobod tumani",
                    uzl: "Хўжаобод тумани",
                    en: "Khojaabad district",
                },
            },
            {
                id: 46,
                name: "Шахриханский район",
                translations: {
                    uz: "Shahrixon tumani",
                    uzl: "Шахрихон тумани",
                    en: " Shakhrikhan city",
                },
            },
            {
                id: 47,
                name: "город Андижан",
                translations: {
                    uz: "Andijon shahri",
                    uzl: "Андижон шаҳри",
                    en: "Andijan city",
                },
            },
            {
                id: 48,
                name: "город Ханабад",
                translations: {
                    uz: "Xonobod shahri",
                    uzl: "Хонобод шаҳри",
                    en: "Khanabad city",
                },
            },
        ],
    },
    {
        id: 49,
        name: "Бухарская область",
        translations: {
            uz: "Buxoro viloyati",
            uzl: "Бухоро вилояти",
            en: null,
        },
        chidlren: [
            {
                id: 50,
                name: "Алатский район",
                translations: {
                    uz: "Olot tumani",
                    uzl: "Олот тумани",
                    en: "Alat district",
                },
            },
            {
                id: 51,
                name: "Бухарский район",
                translations: {
                    uz: "Buxoro tumani",
                    uzl: "Бухоро тумани",
                    en: "Bukhara district",
                },
            },
            {
                id: 52,
                name: "Вабкентский район",
                translations: {
                    uz: "Vobkent tumani",
                    uzl: "Вобкент тумани",
                    en: "Вобкент тумани",
                },
            },
            {
                id: 53,
                name: "Гиждуванский район",
                translations: {
                    uz: "G'ijduvon tumani",
                    uzl: "Ғиждувон тумани",
                    en: "Gijduvan district",
                },
            },
            {
                id: 54,
                name: "Жондорский район",
                translations: {
                    uz: "Jondor tumani",
                    uzl: "Жондор тумани",
                    en: "Jondor district",
                },
            },
            {
                id: 55,
                name: "Каганский район",
                translations: {
                    uz: "Kogon tumani",
                    uzl: "Когон тумани",
                    en: "Kagan district",
                },
            },
            {
                id: 56,
                name: "Каракульский район",
                translations: {
                    uz: "Qorako'l tumani",
                    uzl: "Қоракул тумани",
                    en: "Karakul district",
                },
            },
            {
                id: 57,
                name: "Караулбазарский район",
                translations: {
                    uz: "Qoraulbozar tumani",
                    uzl: "Қараулбoзoр тумани",
                    en: "Qaraulbozor district",
                },
            },
            {
                id: 58,
                name: "Пешкунский район",
                translations: {
                    uz: "Peshku tumani",
                    uzl: "Пешку тумани",
                    en: "Peshku district",
                },
            },
            {
                id: 59,
                name: "Ромитанский район",
                translations: {
                    uz: "Romitan tumani",
                    uzl: "Ромитан тумани",
                    en: "Romitan District",
                },
            },
            {
                id: 60,
                name: "Шафирканский район",
                translations: {
                    uz: "Шофиркон тумани",
                    uzl: "Shofirkon tumani",
                    en: "Shofirkon district",
                },
            },
            {
                id: 61,
                name: "город Бухара",
                translations: {
                    uz: "Buxoro shahri",
                    uzl: "Бухоро шаҳри",
                    en: "Bukhara city",
                },
            },
        ],
    },
    {
        id: 62,
        name: "Джизакская область",
        translations: {
            uz: "Jizzax viloyati",
            uzl: "Жиззах вилояти",
            en: null,
        },
        children: [
            {
                id: 63,
                name: "Арнасайский район",
                translations: {
                    uz: "Arnasoy tumani",
                    uzl: "Арнасой тумани",
                    en: "Arnasay district",
                },
            },
            {
                id: 64,
                name: "Бахмальский район",
                translations: {
                    uz: "Baxmal tumani",
                    uzl: "Бахмал тумани",
                    en: "Bakhmal district",
                },
            },
            {
                id: 65,
                name: "Дустликский район",
                translations: {
                    uz: "Do'stlik tumani",
                    uzl: "Дўстлик тумани",
                    en: "Dostlik district",
                },
            },
            {
                id: 66,
                name: "Фаришский район",
                translations: {
                    uz: "Forish tumani",
                    uzl: "Фориш тумани",
                    en: "Forish district",
                },
            },
            {
                id: 67,
                name: "Галляаральский район",
                translations: {
                    uz: "G'allaorol tumani",
                    uzl: "Ғаллаорол тумани",
                    en: "Gallaorol district",
                },
            },
            {
                id: 68,
                name: "Джизакский район",
                translations: {
                    uz: "Jizzax tumani",
                    uzl: "Жиззах тумани",
                    en: "Jizzakh district",
                },
            },
            {
                id: 69,
                name: "Мирзачульский район",
                translations: {
                    uz: "Mirzacho'l tumani",
                    uzl: "Мирзачўл тумани",
                    en: "Mirzachul district",
                },
            },
            {
                id: 70,
                name: "Пахтакорский район",
                translations: {
                    uz: "Paxtakor tumani",
                    uzl: "Пахтакор тумани",
                    en: "Pakhtakor district",
                },
            },
            {
                id: 71,
                name: "Янгиабадский район",
                translations: {
                    uz: "Yangiobod tumani",
                    uzl: "Янгиобод тумани",
                    en: "Yangiabad district",
                },
            },
            {
                id: 72,
                name: "Зааминский район",
                translations: {
                    uz: "Zomin tumani",
                    uzl: "Зомин тумани",
                    en: "Zomin district",
                },
            },
            {
                id: 73,
                name: "Зафарабадский район",
                translations: {
                    uz: "Zafarobod tumani",
                    uzl: "Зафаробод тумани",
                    en: "Zafarabad district",
                },
            },
            {
                id: 74,
                name: "Зарбдарский район",
                translations: {
                    uz: "Zarbdor tumani",
                    uzl: "Зарбдор тумани",
                    en: "Zarbdor district",
                },
            },
            {
                id: 75,
                name: "город Даштабад",
                translations: {
                    uz: "Dashtobod tumani",
                    uzl: "Даштобод тумани",
                    en: "Dashtobod district",
                },
            },
            {
                id: 76,
                name: "город Джизак",
                translations: {
                    uz: "Jizzax shahri",
                    uzl: "Жиззах шаҳри",
                    en: "Jizzakh city",
                },
            },
        ],
    },
    {
        id: 77,
        name: "Кашкадарьинская область",
        translations: {
            uz: "Qashqadaryo viloyati",
            uzl: "Қашқадарё вилояти",
            en: null,
        },
        children: [
            {
                id: 78,
                name: "Дехканабадский район",
                translations: {
                    uz: "Dehqonobod tumani",
                    uzl: "Деҳқонобод тумани",
                    en: "Dehkanabad district",
                },
            },
            {
                id: 79,
                name: "Гузарский район",
                translations: {
                    uz: "G'uzor tumani",
                    uzl: "Ғузор тумани",
                    en: "Guzar district",
                },
            },
            {
                id: 80,
                name: "Камашинский район",
                translations: {
                    uz: "Qamashi tumani",
                    uzl: "Қамаши тумани",
                    en: "Kamashi district",
                },
            },
            {
                id: 81,
                name: "Каршинский район",
                translations: {
                    uz: "Qarshi tumani",
                    uzl: "Қарши тумани",
                    en: "Karshi district",
                },
            },
            {
                id: 82,
                name: "Касанский район",
                translations: {
                    uz: "Koson tumani",
                    uzl: "Косон тумани",
                    en: "Koson district",
                },
            },
            {
                id: 83,
                name: "Касбийский район",
                translations: {
                    uz: "Kasbi tumani",
                    uzl: "Касби тумани",
                    en: "Kasbi district",
                },
            },
            {
                id: 84,
                name: "Китабский район",
                translations: {
                    uz: "Kitob tumani",
                    uzl: "Китоб тумани",
                    en: "Kitab district",
                },
            },
            {
                id: 85,
                name: "Миришкорский район",
                translations: {
                    uz: "Mirishkor tumani",
                    uzl: "Миришкор тумани",
                    en: "Mirishkor district",
                },
            },
            {
                id: 86,
                name: "Мубарекский район",
                translations: {
                    uz: "Muborak tumani",
                    uzl: " Муборак тумани",
                    en: "Mubarek district",
                },
            },
            {
                id: 87,
                name: "Нишанский район",
                translations: {
                    uz: "Nishon tumani",
                    uzl: "Нишон тумани",
                    en: "Nishon district",
                },
            },
            {
                id: 88,
                name: "Чиракчинский район",
                translations: {
                    uz: "Chirchiq tumani",
                    uzl: "Чирчиқ тумани",
                    en: "Chirchiq district",
                },
            },
            {
                id: 89,
                name: "Шахрисабзский район",
                translations: {
                    uz: "Shahrisabz tumani",
                    uzl: "Шаҳрисабз тумани",
                    en: "Shakhrisabz district",
                },
            },
            {
                id: 90,
                name: "Яккабагский район",
                translations: {
                    uz: "Yakkabog' tumani",
                    uzl: "Яккабоғ тумани",
                    en: "Yakkabog district",
                },
            },
            {
                id: 91,
                name: "город Карши",
                translations: {
                    uz: "Qarshi shahri",
                    uzl: "Қарши шаҳри",
                    en: "Karshi city",
                },
            },
        ],
    },
    {
        id: 92,
        name: "Навоийская область",
        translations: {
            uz: "Navoiy viloyati",
            uzl: "Навоий вилояти",
        },
        children: [
            {
                id: 93,
                name: "Канимехский район",
                translations: {
                    uz: "Konimex tumani",
                    uzl: "Конимех тумани",
                    en: "Konimex district",
                },
            },
            {
                id: 94,
                name: "Кызылтепинский район",
                translations: {
                    uz: "Qiziltepa tumani",
                    uzl: "Қизилтепа тумани",
                    en: "Kyzyltepa district",
                },
            },
            {
                id: 95,
                name: "Карманинский район",
                translations: {
                    uz: "Karmana tumani",
                    uzl: "Кармана тумани",
                    en: "Karmana district",
                },
            },
            {
                id: 96,
                name: "Навбахорский район",
                translations: {
                    uz: "Navbahor tumani",
                    uzl: "Навбаҳор тумани",
                    en: "Navbahor district",
                },
            },
            {
                id: 97,
                name: "Нуратинский район",
                translations: {
                    uz: "Nurota tumani",
                    uzl: "Нурота тумани",
                    en: "Nurata district",
                },
            },
            {
                id: 98,
                name: "Зарафшанский район",
                translations: {
                    uz: "Zarafshon tumani",
                    uzl: "Зарафшон тумани",
                    en: "Zarafshan district",
                },
            },
            {
                id: 99,
                name: "Тамдынский район",
                translations: {
                    uz: "Tomdi tumani",
                    uzl: "Томди тумани",
                    en: "Tomdi district",
                },
            },
            {
                id: 100,
                name: "Учкудукский район",
                translations: {
                    uz: "Uchquduq tumani",
                    uzl: "Учқудуқ тумани",
                    en: "Uchkuduk district",
                },
            },
            {
                id: 101,
                name: "Хатырчинский район",
                translations: {
                    uz: "Xatirchi tumani",
                    uzl: "Хатирчи тумани",
                    en: "Khatirchi district",
                },
            },
            {
                id: 102,
                name: "город Навои",
                translations: {
                    uz: "Navoiy shahri",
                    uzl: "Навои шаҳри",
                    en: "Navoi City",
                },
            },
            {
                id: 103,
                name: "город Зарафшан",
                translations: {
                    uz: "Zarafshon shahri",
                    uzl: "Зарафшон шаҳри",
                    en: "Zarafshan city",
                },
            },
        ],
    },
    {
        id: 104,
        name: "Наманганская область",
        translations: {
            uz: "Namangan viloyati",
            uzl: "Наманган вилояти",
        },
        children: [
            {
                id: 105,
                name: "Касансайский район",
                translations: {
                    uz: "Kosonsoy tumani",
                    uzl: "Косонсой тумани",
                    en: "Kasansay district",
                },
            },
            {
                id: 106,
                name: "Мингбулакский район",
                translations: {
                    uz: "Mingbuloq tumani",
                    uzl: "Мингбулоқ тумани",
                    en: "Mingbulaksky district",
                },
            },
            {
                id: 107,
                name: "Наманганский район",
                translations: {
                    uz: "Namangan viloyati",
                    uzl: "Наманган вилояти",
                    en: "Namangan region",
                },
            },
            {
                id: 108,
                name: "Нарынский район",
                translations: {
                    uz: "Norin tumani",
                    uzl: "Норин тумани",
                    en: "Naryn district",
                },
            },
            {
                id: 109,
                name: "Папский район",
                translations: {
                    uz: "Pop tumani",
                    uzl: "Поп тумани",
                    en: "Pop district",
                },
            },
            {
                id: 110,
                name: "Туракурганский район",
                translations: {
                    uz: "To'raqo'rg'on tumani",
                    uzl: "Тўрақўрғон тумани",
                    en: "Turakurgan district",
                },
            },
            {
                id: 111,
                name: "Учкурганский район",
                translations: {
                    uz: "Uchqo'rg'on tumani",
                    uzl: "Учқўрғон тумани",
                    en: "Uchkurgan district",
                },
            },
            {
                id: 112,
                name: "Уйчинский район",
                translations: {
                    uz: "Uychi tumani",
                    uzl: "Уйчи тумани",
                    en: "Uychi district",
                },
            },
            {
                id: 113,
                name: "Чартакский район",
                translations: {
                    uz: "Chortoq tumani",
                    uzl: "Чортоқ тумани",
                    en: "Chartak District",
                },
            },
            {
                id: 114,
                name: "Чустский район",
                translations: {
                    uz: "Chust tumani",
                    uzl: "Чуст тумани",
                    en: "Chust district",
                },
            },
            {
                id: 115,
                name: "Янгикурганский район",
                translations: {
                    uz: "Yangiqo'rg'on tumani",
                    uzl: "Янгиқўрғон тумани",
                    en: "Yangikurgan District",
                },
            },
            {
                id: 116,
                name: "город Наманган",
                translations: {
                    uz: "Namangan shahri",
                    uzl: "Наманган шаҳри",
                    en: "Namangan city",
                },
            },
        ],
    },
    {
        id: 117,
        name: "Самаркандская область",
        translations: {
            uz: "Samarqand viloyati",
            uzl: "Самарқанд вилояти",
        },
        children: [
            {
                id: 118,
                name: "Акдарьинский район",
                translations: {
                    uz: "Oqdaryo tumani",
                    uzl: "Оқдарё тумани",
                    en: "Akdarya district",
                },
            },
            {
                id: 119,
                name: "Булунгурский район",
                translations: {
                    uz: "Bulung'ur tumani",
                    uzl: "Булунғур тумани",
                    en: "Bulungur district",
                },
            },
            {
                id: 120,
                name: "Джамбайский район",
                translations: {
                    uz: "Jomboy tumani",
                    uzl: "Жoмбoй тумани",
                    en: "Dzhambaysky district",
                },
            },
            {
                id: 121,
                name: "Иштыханский район",
                translations: {
                    uz: "Ishtixon tumani",
                    uzl: "Иштихон тумани",
                    en: "Ishtykhan district",
                },
            },
            {
                id: 122,
                name: "Каттакурганский район",
                translations: {
                    uz: "Kattaqo'rg'on tumani",
                    uzl: "Каттақўрғон тумани",
                    en: "Kattakurgan district",
                },
            },
            {
                id: 123,
                name: "Кошрабадский район",
                translations: {
                    uz: "Qo'shrabot tumani",
                    uzl: "Қўшработ тумани",
                    en: "Koshrabad district",
                },
            },
            {
                id: 124,
                name: "Нарпайский район",
                translations: {
                    uz: "Narpay tumani",
                    uzl: "Нарпай тумани",
                    en: "Narpay district",
                },
            },
            {
                id: 125,
                name: "Нурабадский район",
                translations: {
                    uz: "Nurobod tumani",
                    uzl: "Нуробод тумани",
                    en: "Nurabad district",
                },
            },
            {
                id: 126,
                name: "Пайарыкский район",
                translations: {
                    uz: "Payariq tumani",
                    uzl: "Паяриқ тумани",
                    en: "Payaryksky district",
                },
            },
            {
                id: 127,
                name: "Пастдаргомский район",
                translations: {
                    uz: "Pastdarg'om tumani",
                    uzl: "Пастдарғом тумани",
                    en: "Pastdargom district",
                },
            },
            {
                id: 128,
                name: "Пахтачийский район",
                translations: {
                    uz: "Paxtachi tumani",
                    uzl: "Пахтачи тумани",
                    en: "Pakhtachi district",
                },
            },
            {
                id: 129,
                name: "Самаркандский район",
                translations: {
                    uz: "Samarqand viloyati",
                    uzl: "Самарқанд вилояти",
                    en: "Samarkand region",
                },
            },
            {
                id: 130,
                name: "Тайлакский район",
                translations: {
                    uz: "Tayloq tumani",
                    uzl: "Тайлоқ тумани",
                    en: "Taylak district",
                },
            },
            {
                id: 131,
                name: "Ургутский район",
                translations: {
                    uz: "Urgut tumani",
                    uzl: "Ургут тумани",
                    en: "Urgut district",
                },
            },
            {
                id: 132,
                name: "город Каттакурган",
                translations: {
                    uz: "Kattaqo'rg'on shahri",
                    uzl: "Каттақўрғон шаҳри",
                    en: "Kattakurgan city",
                },
            },
            {
                id: 133,
                name: "город Самарканд",
                translations: {
                    uz: "Samarqand shahri",
                    uzl: "Самарқанд шаҳри",
                    en: "Samarkand city",
                },
            },
        ],
    },
    {
        id: 134,
        name: "Сурхандарьинская область",
        translations: {
            uz: "Surxondaryo viloyati",
            uzl: "Сурхондарё вилояти",
        },
        children: [
            {
                id: 135,
                name: "Алтынсайский район",
                translations: {
                    uz: "Oltinsoy tumani",
                    uzl: "Олтинсой тумани",
                    en: "Altynsay district",
                },
            },
            {
                id: 136,
                name: "Ангорский район",
                translations: {
                    uz: "Angora tumani",
                    uzl: "Ангора тумани",
                    en: "Angora district",
                },
            },
            {
                id: 137,
                name: "Байсунский район",
                translations: {
                    uz: "Boysun tumani",
                    uzl: "Бойсун тумани",
                    en: "Baysun district",
                },
            },
            {
                id: 138,
                name: "Денауский район",
                translations: {
                    uz: "Denov tumani",
                    uzl: "Денов тумани",
                    en: "Denau district",
                },
            },
            {
                id: 139,
                name: "Джаркурганский район",
                translations: {
                    uz: "Jarqo'rg'on tumani",
                    uzl: "Жарқўрғон тумани",
                    en: "Dzharkurgan district",
                },
            },
            {
                id: 140,
                name: "Кизирикский район",
                translations: {
                    uz: "Qiziriq tumani",
                    uzl: "Қизириқ тумани",
                    en: "Kizirik district",
                },
            },
            {
                id: 141,
                name: "Кумкурганский район",
                translations: {
                    uz: "Qumqo'rg'on tumani",
                    uzl: "Қумқўрғон тумани",
                    en: "Kumkurgan district",
                },
            },
            {
                id: 142,
                name: "Музрабадский район",
                translations: {
                    uz: "Muzrabot tumani",
                    uzl: "Музработ тумани",
                    en: "Muzrabad district",
                },
            },
            {
                id: 143,
                name: "Сариасийский район",
                translations: {
                    uz: "Sariosiyo tumani",
                    uzl: "Сариосиё тумани",
                    en: "Sariasi district",
                },
            },
            {
                id: 144,
                name: "Термезский район",
                translations: {
                    uz: "Termiz tumani",
                    uzl: "Термиз тумани",
                    en: "Termez district",
                },
            },
            {
                id: 145,
                name: "Узунский район",
                translations: {
                    uz: "Uzun tumani",
                    uzl: "Узун тумани",
                    en: "Uzun district",
                },
            },
            {
                id: 146,
                name: "Шерабадский район",
                translations: {
                    uz: "Sherobod tumani",
                    uzl: "Шеробод тумани",
                    en: "Sherabad district",
                },
            },
            {
                id: 147,
                name: "Шурчинский район",
                translations: {
                    uz: "Sho'rchi tumani",
                    uzl: "Шўрчи тумани",
                    en: "Shurchinsky district",
                },
            },
            {
                id: 148,
                name: "город Термиз",
                translations: {
                    uz: "Termiz shahri",
                    uzl: "Термиз шаҳри",
                    en: "city of Termez",
                },
            },
        ],
    },
    {
        id: 149,
        name: "Сырдарьинская область",
        translations: {
            uz: "Sirdaryo viloyati",
            uzl: "Сирдарё вилояти",
        },
        children: [
            {
                id: 150,
                name: "Акалтынский район",
                translations: {
                    uz: "Oqoltin tumani",
                    uzl: "Оқолтин тумани",
                    en: "Akaltyn district",
                },
            },
            {
                id: 151,
                name: "Баяутский район",
                translations: {
                    uz: "Boyut tumani",
                    uzl: "Боют тумани",
                    en: "Bayautsky district",
                },
            },
            {
                id: 152,
                name: "Гулистанский район",
                translations: {
                    uz: "Guliston tumani",
                    uzl: "Гулистон тумани",
                    en: "Gulistan district",
                },
            },
            {
                id: 153,
                name: "Мирзаабадский район",
                translations: {
                    uz: "Mirzaobod tumani",
                    uzl: "Мирзаобод тумани",
                    en: "Mirzaabad district",
                },
            },
            {
                id: 154,
                name: "Сайхунабадский район",
                translations: {
                    uz: "Sayxunobod tumani",
                    uzl: "Сайхунобод тумани",
                    en: "Saikhunabad district",
                },
            },
            {
                id: 155,
                name: "Сардобинский район",
                translations: {
                    uz: "Sardoba tumani",
                    uzl: "Сардоба тумани",
                    en: "Sardoba district",
                },
            },
            {
                id: 156,
                name: "Сырдарьинский район",
                translations: {
                    uz: "Sirdaryo tumani",
                    uzl: "Сирдарё тумани",
                    en: "Syrdarya district",
                },
            },
            {
                id: 157,
                name: "Хавастский район",
                translations: {
                    uz: "Xovos tumani",
                    uzl: "Ховос тумани",
                    en: "Havast district",
                },
            },
            {
                id: 158,
                name: "город Гулистан",
                translations: {
                    uz: "Guliston shahri",
                    uzl: "Гулистон шаҳри",
                    en: "Gulistan city",
                },
            },
            {
                id: 159,
                name: "город Ширин",
                translations: {
                    uz: "Shirin shahri",
                    uzl: "Ширин шаҳри",
                    en: "Shirin city",
                },
            },
            {
                id: 160,
                name: "город Янгиер",
                translations: {
                    uz: "Yangiyer shahri",
                    uzl: "Янгиер шаҳри",
                    en: "Yangiyer city",
                },
            },
        ],
    },
    {
        id: 161,
        name: "Ферганская область",
        translations: {
            uz: "Farg'ona viloyati",
            uzl: "Фарғона вилояти",
        },
        children: [
            {
                id: 162,
                name: "Алтыарыкский район",
                translations: {
                    uz: "Oltiariq tumani",
                    uzl: "Олтиариқ тумани",
                    en: "Altyaryk district",
                },
            },
            {
                id: 163,
                name: "Багдадский район",
                translations: {
                    uz: "Bog'dod tumani",
                    uzl: "Боғдод тумани",
                    en: "Baghdad district",
                },
            },
            {
                id: 164,
                name: "Бешарыкский район",
                translations: {
                    uz: "Beshariq tumani",
                    uzl: "Бешариқ тумани",
                    en: "Besharyk district",
                },
            },
            {
                id: 165,
                name: "Бувайдинский район",
                translations: {
                    uz: "Buvayda tumani",
                    uzl: "Бувайда тумани",
                    en: "Buvaidinsky district",
                },
            },
            {
                id: 166,
                name: "Дангаринский район",
                translations: {
                    uz: "Dang'ara tumani",
                    uzl: "Данғара тумани",
                    en: "Dangarinsky district",
                },
            },
            {
                id: 167,
                name: "Кувинский район",
                translations: {
                    uz: "Quva tumani",
                    uzl: "Қува тумани",
                    en: "Kuva district",
                },
            },
            {
                id: 168,
                name: "Куштепинский район",
                translations: {
                    uz: "Qushtepa tumani",
                    uzl: "Қуштепа тумани",
                    en: "Kushtepa district",
                },
            },
            {
                id: 169,
                name: "Риштанский район",
                translations: {
                    uz: "Rishton tumani",
                    uzl: "Риштон тумани",
                    en: "Rishtan district",
                },
            },
            {
                id: 170,
                name: "Сохский район",
                translations: {
                    uz: "So‘x tumani",
                    uzl: "Сўх тумани",
                    en: "Sokh district",
                },
            },
            {
                id: 171,
                name: "Ташлакский район",
                translations: {
                    uz: "Toshloq tumani",
                    uzl: "Тошлоқ тумани",
                    en: "Tashlak district",
                },
            },
            {
                id: 172,
                name: "Узбекистанский район",
                translations: {
                    uz: "O'zbekiston viloyati",
                    uzl: "Ўзбекистон вилояти",
                    en: "Uzbekistan region",
                },
            },
            {
                id: 173,
                name: "Учкуприкский район",
                translations: {
                    uz: "Uchko'prik tumani",
                    uzl: "Учкўприк тумани",
                    en: "Uchkuprik district",
                },
            },
            {
                id: 174,
                name: "Ферганский район",
                translations: {
                    uz: "Farg'ona viloyati",
                    uzl: "Фарғона вилояти",
                    en: "Ferghana region",
                },
            },
            {
                id: 175,
                name: "Фуркатский район",
                translations: {
                    uz: "Furqat tumani",
                    uzl: "Фурқат тумани",
                    en: "Furkat district",
                },
            },
            {
                id: 176,
                name: "Язъяванский район",
                translations: {
                    uz: "Yozyovon tumani",
                    uzl: "Ёзёвон тумани",
                    en: "Yazyavan district",
                },
            },
            {
                id: 177,
                name: "город Коканд",
                translations: {
                    uz: "Qo'qon shahri",
                    uzl: "Қўқон шаҳри",
                    en: "Kokand city",
                },
            },
            {
                id: 178,
                name: "город Кувасай",
                translations: {
                    uz: "Quvasoy shahri",
                    uzl: "Қувасой шаҳри",
                    en: "Kuvasay city",
                },
            },
            {
                id: 179,
                name: "город Маргилан",
                translations: {
                    uz: "Marg'ilon shahri",
                    uzl: "Марғилон шаҳри",
                    en: "Margilan city",
                },
            },
            {
                id: 180,
                name: "город Фергана",
                translations: {
                    uz: "Farg'ona shahri",
                    uzl: "Фарғона шаҳри",
                    en: "Ferghana city",
                },
            },
        ],
    },
    {
        id: 181,
        name: "Хорезмская область",
        translations: {
            uz: "Xorazm viloyati",
            uzl: "Хоразм вилояти",
        },
        children: [
            {
                id: 182,
                name: "Боготский район",
                translations: {
                    uz: "Bog'ot tumani",
                    uzl: "Боғот тумани",
                    en: "Bogotsky district",
                },
            },
            {
                id: 183,
                name: "Гурленский район",
                translations: {
                    uz: "Gurlan tumani",
                    uzl: "Гурлан тумани",
                    en: "Gurlensky district",
                },
            },
            {
                id: 184,
                name: "Кушкупирский район",
                translations: {
                    uz: "Qo'shko'pir tumani",
                    uzl: "Қўшкўпир тумани",
                    en: "Kushkupir district",
                },
            },
            {
                id: 185,
                name: "Урганчский район",
                translations: {
                    uz: "Urganch tumani",
                    uzl: "Урганч тумани",
                    en: "Urganch district",
                },
            },
            {
                id: 186,
                name: "Хазораспский район",
                translations: {
                    uz: "Hazorasp tumani",
                    uzl: "Ҳазорасп тумани",
                    en: "Khazorasp district",
                },
            },
            {
                id: 187,
                name: "Ханкинский район",
                translations: {
                    uz: "Xonqa tumani",
                    uzl: "Хонқа тумани",
                    en: "Hankinsky District",
                },
            },
            {
                id: 188,
                name: "Хивинский район",
                translations: {
                    uz: "Xiva tumani",
                    uzl: "Хива тумани",
                    en: "Khiva district",
                },
            },
            {
                id: 189,
                name: "Шаватский район",
                translations: {
                    uz: "Shovot tumani",
                    uzl: "Шовот тумани",
                    en: "Shavat district",
                },
            },
            {
                id: 190,
                name: "Янгиарикский район",
                translations: {
                    uz: "Yangiariq tumani",
                    uzl: "Янгиариқ тумани",
                    en: "Yangiarik district",
                },
            },
            {
                id: 191,
                name: "Янгибозорский район",
                translations: {
                    uz: "Yangibozor tumani",
                    uzl: "Янгибозор тумани",
                    en: "Yangibozor district",
                },
            },
            {
                id: 192,
                name: "город Ургенч",
                translations: {
                    uz: "Urganch shahri",
                    uzl: "Урганч шаҳри",
                    en: "city Urgench",
                },
            },
        ],
    },
    {
        id: 193,
        name: "Республика Каракалпакстан",
        translations: {
            uz: "Qoraqalpog'iston Respublikasi",
            uzl: "Қорақалпоғистон Республикаси",
        },

        children: [
            {
                id: 194,
                name: "Амударьинский район",
                translations: {
                    uz: "Amudaryo tumani",
                    uzl: "Амударё тумани",
                    en: "Amudarya district",
                },
            },
            {
                id: 195,
                name: "Берунийский район",
                translations: {
                    uz: "Beruniy tumani",
                    uzl: "Беруний тумани",
                    en: "Beruni district",
                },
            },
            {
                id: 196,
                name: "Караузякский район",
                translations: {
                    uz: "Qorauzak tumani",
                    uzl: "Қораузак тумани",
                    en: "Karauzak district",
                },
            },
            {
                id: 197,
                name: "Кегейлийский район",
                translations: {
                    uz: "Kegayli tumani",
                    uzl: "Кегайли тумани",
                    en: "Kegeili district",
                },
            },
            {
                id: 198,
                name: "Кунградский район",
                translations: {
                    uz: "Qo'ng'irot tumani",
                    uzl: "Қўнғирот тумани",
                    en: "Kungrad district",
                },
            },
            {
                id: 199,
                name: "Канлыкульский район",
                translations: {
                    uz: "Qonliko'l tumani",
                    uzl: "Қонликўл тумани",
                    en: "Kanlykul district",
                },
            },
            {
                id: 200,
                name: "Муйнакский район",
                translations: {
                    uz: "Mo'ynoq tumani",
                    uzl: "Мўйноқ тумани",
                    en: "Muynak district",
                },
            },
            {
                id: 201,
                name: "Нукусский район",
                translations: {
                    uz: "Nukus tumani",
                    uzl: "Нукус тумани",
                    en: "Nukus district",
                },
            },
            {
                id: 202,
                name: "Тахтакупырский район",
                translations: {
                    uz: "Taxtako'pir tumani",
                    uzl: "Тахтакўпир тумани",
                    en: "Takhtakupyr district",
                },
            },
            {
                id: 203,
                name: "Турткульский район",
                translations: {
                    uz: "To'rtko'l tumani",
                    uzl: "Тўрткўл тумани",
                    en: "Turtkul district",
                },
            },
            {
                id: 204,
                name: "Ходжейлийский район",
                translations: {
                    uz: "Xo'jayli tumani",
                    uzl: "Хўжайли тумани",
                    en: "Khojayli district",
                },
            },
            {
                id: 205,
                name: "Чимбайский район",
                translations: {
                    uz: "Chimboy tumani",
                    uzl: "Чимбой тумани",
                    en: "Chimbay district",
                },
            },
            {
                id: 206,
                name: "Шуманайский район",
                translations: {
                    uz: "Shumanay tumani",
                    uzl: "Шуманай тумани",
                    en: "Shumanay district",
                },
            },
            {
                id: 207,
                name: "Элликкалинский район",
                translations: {
                    uz: "Ellikqal'a tumani",
                    uzl: "Элликқалъа тумани",
                    en: "Ellikkalin district",
                },
            },
            {
                id: 208,
                name: "город Нукус",
                translations: {
                    uz: "Nukus shahri",
                    uzl: "Нукус шаҳри",
                    en: "Nukus city",
                },
            },
            {
                id: 209,
                name: "город Тахиаташ",
                translations: {
                    uz: "Taxiatosh shahri",
                    uzl: "Тахиатош шаҳри",
                    en: "Takhiatash city",
                },
            },
        ],
    },
];
</script>
