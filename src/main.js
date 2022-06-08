import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import CGrid from "@/components/c-grid";
import CDropdown from "@/components/c-dropdown";
import CDropdownItem from "@/components/c-dropdown-item";
import './assets/styles/tailwind.css';
import './assets/fonts/Aeroport/stylesheet.css';

import * as HeroIcons from '@/components/icons/hero';
import * as UI from '@/components/ui';
import i18n from './I18n';
import pusher from './pusher';



const app = createApp(App);


for (const component in HeroIcons) {
    app.component(component, HeroIcons[component].default);
}

for (const component in UI) {
    app.component(component, UI[component].default);
}

app.component('c-grid', CGrid)
    .component('c-dropdown', CDropdown)
    .component('c-dropdown-item', CDropdownItem)
    .use(i18n)
    .use(router)
    .use(pusher)
    .mount('#app')
