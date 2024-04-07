import { createPinia } from "pinia";
import { createApp } from "vue";
import { VueCookieNext } from "vue-cookie-next";
import { registerPlugins } from "./plugins";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import i18n from "@/i18n";
import router from "./router";
import "./styles/index.scss";

// Icon setup
import "virtual:svg-icons-register";
import SvgIcon from "@/components/icons/SvgIcon.vue";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import SplitButton from "primevue/splitbutton";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";

const app = createApp(App);
app.component("svg-icon", SvgIcon);

app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("SplitButton", SplitButton);

registerPlugins(app);

app.use(i18n);
app.use(router);
app.use(createPinia());
app.use(VueCookieNext);
app.mount("#app");

VueCookieNext.config({ expire: "7d", path: "/" });
