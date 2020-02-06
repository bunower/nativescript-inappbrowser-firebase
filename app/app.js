import Vue from "nativescript-vue";
import Home from "./components/Home";
const firebase = require("nativescript-plugin-firebase");

firebase.init({}).then(
    () => {
        console.log("firebase.init done");
    },
    error => {
        console.log(`firebase.init error: ${error}`);
    }
);

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
