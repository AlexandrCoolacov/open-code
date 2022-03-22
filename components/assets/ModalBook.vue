<template>
   <div ref="modal_wrapper" class="modal-wrapper">
       <div class="modal-book" >
            <div class="header">
               <slot></slot>
            </div>
            <div class="content">
                <form class="book-form" action="">
                    
                    <input v-model="title" class="input" type="text" placeholder="Введите название" >
                    <input v-model="name" class="input" type="text" placeholder="Введите имя автора">
                    <input v-model="pages" class="input" type="text" placeholder="Введите кол-во страниц">
                    <input v-model="year" class="input" type="text" placeholder="Введите год издания">
                    
                </form>
            </div>
            <div class="footer">
                <button-template @click="submit()">Готово</button-template>
                <button-template @click="closeModal()">Отмена</button-template>
            </div>
       </div>
   </div>
</template>


<script>
import ButtonTemplate from './ButtonTemplate.vue'
export default {
    components: {
        ButtonTemplate
    },
    props: {
        book: {
            type: String,
            default: ''
        }
    },
    
    data() {
        return{
            title: this.book.title || '' ,
            name: this.book.name || '',
            pages: this.book.pages || '' ,
            year: this.book.year  || '' ,
        }
    },

     mounted() {
        const vm = this;
        document.addEventListener( 'click', function (item) {
            if(item.target === vm.$refs.modal_wrapper) {
                vm.closeModal()
            }
        })
    },

    methods: {
        closeModal() {
            this.title =''
            this.name = ''
            this.pages = ''
            this.year = ''
            this.$emit( 'closeModal')
        },

        submit() {
            if (this.title.length > 1 && this.name.length > 1) {
                this.$emit('submit', {
                title: this.title,
                name: this.name,
                pages: this.pages,
                year: this.year,
                id: this.book.id
                })

            }
            
        }
    },
}
</script>
<style lang="scss" scoped>
.book-form{
    position: relative;
     width: 300px;
    margin: 0 auto;
    input{
        margin-bottom: 10px;
        height: 25px;
        width: 100%;
    }
}
    .modal-book{
        background: rgb(200, 211, 209);
        border-radius: 15px;
        position: fixed;
        top: 50px;
        left: calc(50% - 200px);
        width: 400px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .modal-wrapper{
        background: rgba(64,64,64,0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 10;
    }
</style>