'use strict'

import {headerHTML} from "../main/header.js";
import {footerHTML} from "../main/footer.js";
import {articleList} from "./articles.js";

// let id;
// try{
//     id = localStorage.getItem('articleId')
// } catch (error){
//     id = 0;
//     localStorage.setItem('articleId', '0')
// }


const headerApp = new Vue({
    el: '#header',
    data: {
        headerContent: headerHTML
    },
});

const footerApp = new Vue({
    el: '#footer',
    data: {
        footerContent: footerHTML,
    },
});

const newsApp = new Vue({
    el: '#newsApp',
    data: {
        articles: articleList,
        currentId: Number(localStorage.getItem('articleId')),
        currentArticle: articleList[articleList.length - 1],
        tags: [...new Set(articleList.map(item => item.tag))],
    },
    methods: {
        findArticle(id) {
            this.currentArticle = articleList.find(a => a.id === Number(id));
        },
        findId() {
            return id;
        },
        showAll(){
            this.articles = articleList;
        },
        showByTag(tag){
            this.articles = Array.from(articleList.filter(a => a.tag === tag));
        }
    },
    mounted() {
        let id;
        id = localStorage.getItem('articleId');
        if (id === null) {
            id = 0;
            localStorage.setItem('articleId', '0');
        }
        this.currentArticle = articleList[id];
    }
});

