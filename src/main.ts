import { createApp } from "vue";
import router from "./router";
import "tailwindcss/tailwind.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

import "./style.css";
import App from "./App.vue";

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    },
  })
  .mount("#app");
