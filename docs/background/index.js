export class PutinBackground extends HTMLElement {
    static define() {
        window.customElements.define("putin-background", PutinBackground, {
            extends: "picture",
        });
    }

    constructor() {
        console.log("Ready?");
        super();
        console.log(document.readyState);
        if (document.readyState === "complete") {
            return this.setReady();
        }
        document.addEventListener('DOMContentLoaded', () => this.setReady());
    }

    setReady() {
        this.classList.add("ready");
    }
}

PutinBackground.define();
