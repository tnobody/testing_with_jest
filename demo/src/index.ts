import { bind } from "hyperhtml";
import { AppComponent } from "./components/app.component";

bind(document.body)`${new AppComponent}`

window.addEventListener('popstate', e => {
    console.log('popstate', e);
})