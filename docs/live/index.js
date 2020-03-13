export class PutinLive extends HTMLElement {
    static define() {
        window.customElements.define("putin-live", PutinLive, {
            extends: "div",
        });
    }

    constructor() {
        super();
    }
}

PutinLive.define();
