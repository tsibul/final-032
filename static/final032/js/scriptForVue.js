const funcs = new Vue({
    el: '#revrse',
    methods: {
        rever() {
            if (!this.$el.style.transform) {
                this.$el.style.transform = 'scale(-1, 1)';
            } else {
                this.$el.style.transform = '';
            }
        }
    }
});

const fncs = new Vue({
    el: '#elem',
    methods: {
        ddTo(){
            const li = document.createElement('li');
            li.classList.add('btn', 'btn__color');
            li.textContent = 'Новый элемент';
            this.$el.nextElementSibling.appendChild(li);
        }
    }
});

const fff = new Vue({
    el: '#ul',
    methods: {
        delLi (element){
            element.target.remove();
        }
    }
});

