"use strict";

import "./live/index.js";
import "./background/index.js";

console.log('%c    ', `font-size:256px; background:url(${window.location.origin + window.location.pathname}./static/console.jpeg) no-repeat; background-size: contain;`);

document.addEventListener("readystatechange", () => {
    const load = document.querySelector("putin-load");
    if (load === undefined) {
        return;
    }
    load.classList.add("ready");
    load.addEventListener(
        (navigator.userAgent.indexOf("WebKit") !== -1) ? "webkitTransitionEnd" : "transitionEnd", () => load.remove()
    );
});
