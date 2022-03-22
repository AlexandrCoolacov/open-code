<template>
    <div class="main">
        <BookShelf 
        :books="books"
        @select = "selectBook"
        />
        
        <BookInfo 
        :book="current"
        @delete= "deleteBook"
        />
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import BookShelf from './left-side/BookShelf.vue'
import BookInfo from './right-side/BookInfo.vue'
export default ({
    components: {
        BookShelf,
        BookInfo
    },

    data() {
        return{
            current: null
        }
    },

    computed: {
        ...mapGetters({
            books: 'books/getBooks'
        })
    },

     methods: {
        selectBook(id) {
            this.current = this.books.find(book => book.id === id)
        },

        deleteBook(id) {
            this.current = null
            this.$store.commit('books/deleteBook', id)
        }
    },

    
})
</script>

<style lang="scss" scoped>
 .main {
     display: flex;
     flex-direction: row;
     justify-content: space-between;

 }
</style>
