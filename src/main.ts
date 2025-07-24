import { createApp } from "vue";

import App from "./App.vue";
import { LightEditorPlugin } from "./plugins";
// import "./main.css";
const app = createApp(App);
app.use(LightEditorPlugin);

app.mount("#app");
