'use strict'

import {headerHTML} from "../main/header.js";
import {footerHTML} from "../main/footer.js";
import {articleList} from "./articles.js";



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

const newsApp = new Vue({
    el: '#newsApp',
    data: {
        articles: articleList,
    }
});
