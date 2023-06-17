import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css";
import componets from "./components/UI";

const app = createApp(App);

componets.forEach((component) => {
   app.component(component.name, component);
});

app.mount("#app");
