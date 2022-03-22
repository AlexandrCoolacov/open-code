<template>
    <div class="carcas">
        <modal-book
        v-if="isModalVisible"
        @closeModal="closeModal"
        @submit="createBook"
        >
            Добавить книгу
        </modal-book>
        
        <div class="frame">
            <div class="bookshelf">
                <book-template
                    v-for="book in books"
                    :key="book.id"
                    class="book"
                    @click="$emit('select', book.id)"
                >
                    <template #side>
                        <span>{{book.name}}</span>
                        <br>
                        <span>{{book.title}}</span>
                    </template>

                    <template #front>
                        {{book.name}}
                        <br>
                        {{book.title}}
                    </template>

                </book-template>
            </div>
        </div>

        <div class="buttonsBook">
            <button-template  @click="isModalVisible= true">
                Новая книга
            </button-template>

            <button-template @click="sortedBy('name')">  
                Сортировка по автору
            </button-template>

            <button-template @click="sortedBy('title')"> 
                Сортировка по названию
            </button-template>

            <button-template @click="cancelSort('id')">  
                Сбросить сортировку
            </button-template>
        </div>
    </div>
</template>

<script>
import ModalBook from '@/components/assets/ModalBook.vue'
import ButtonTemplate from '@/components/assets/ButtonTemplate.vue'
import BookTemplate from '@/components/left-side/BookTemplate.vue'

export default {
    components: {
        ButtonTemplate,
        ModalBook,
        BookTemplate
    },
    
    props:{
        books: {
            type: Array,
            required: true
        },
        disabled: {
            type:Boolean,
            default: false
        }
    },

    data() {
        return{
            isModalVisible: false
        }
    },

    methods: {
        
        createBook(data) {
            if (data.title !== '' && data.name !== '') {
                this.$store.commit('books/createBook' , {
                    title:data.title,
                    name: data.name,
                    pages: data.pages,
                    year: data.year,
                })
                this.isModalVisible = false
            }
        },

        closeModal() {
            this.isModalVisible = false
        },

        sortedBy(sortKey){
            this.$store.commit('books/sortedBy', sortKey)

        },

        cancelSort(sortKey) {
            this.$store.commit('books/cancelSort', sortKey)
        }
    },
}
</script>

<style lang="scss" scoped>
.carcas{
    display: flex;
    flex-direction: row;
}



.bookshelf {
    height: 200px;
    width: 200px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .frame{
        display: flex;
        flex-direction: column;
    }
}
</style>