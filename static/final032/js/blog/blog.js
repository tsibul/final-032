'use strict'

import {headerHTML} from "../main/header.js";
import {footerHTML} from "../main/footer.js";

const headerApp = new Vue({
    el: '#header',
    data: {
        headerContent: headerHTML
    },
});

const footerApp = new Vue({
    el: '#footer',
    data: {
        footerContent: footerHTML
    },
});
