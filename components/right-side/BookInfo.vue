<template>
    <div v-if="book">
        <modal-book
        v-if="isModalVisible"
        class="modalBook"
        :book="book"
        @closeModal="closeModal"
        @submit="changeInfo"
        >
            Редактировать данные
        </modal-book>

        <div class="book-info">
            <span>Название книги:{{book.title}}</span>
            <span>Автор:{{book.name}}</span>
            <span>Количество страниц:{{book.pages}}</span>
            <span>Год издания:{{book.year}}</span>
        </div>

        <button-template @click="$emit('delete', book.id)">
            Удалить книгу
        </button-template>
    
        <button-template @click="isModalVisible = true">
            Редактировать
        </button-template>
    </div>
</template>


<script>

import ButtonTemplate from '@/components/assets/ButtonTemplate.vue'
import ModalBook from '@/components/assets/ModalBook.vue'

export default {
    components: {
        ButtonTemplate,
        ModalBook
    },
    props: {
        book: {
            type: Object,
            default: null,
            required: true,
        },
    },

    data() {
        return{
            isModalVisible: false
        }
    },

    methods: {
   
        changeInfo(data) {
            if (data.title !== '' && data.name !== '') {
                this.$store.commit('books/updateBook' , {
                    title:data.title,
                    name: data.name,
                    pages: data.pages,
                    year: data.year,
                    id : data.id
                })
                this.isModalVisible = false
            }
        },
    
        closeModal() {
            this.isModalVisible = false
        }
    }

   
}
</script>

<style lang="scss" scoped>
    .book-info{
        border: 5px solid burlywood;
        position: relative;
        display: flex;
        flex-direction: column;
        span{
            font-size: 40px;
        }

    }
   

    
   

    
</style>