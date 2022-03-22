export const state = () => ({
    books: [
        
        {
            name: 'М.Булгаков',
            title: 'Мастер и Маргарита',
            pages: 300,
            year: '1940',
            id: 1
        },
        {
            name: 'Н.Гоголь',
            title: 'Мертвые души',
            pages: 200,
            year: '1842',
            id: 2
        },
        {
            name: 'М.Булгаков',
            title: 'Собачье сердце',
            pages: 250,
            year: '1925',
            id: 3
        },
        {
            name: 'Ильф и Петров',
            title: 'Двенадцать стульев',
            pages: 270,
            year: '1928',
            id: 4
        },
        {
            name: 'Ильф и Петров',
            title: 'Золотой теленок',
            pages: 270,
            year: '1931',
            id: 5
        },
        {
            name: 'Л.Толстой',
            title: 'Война и мир',
            pages: 500,
            year: '1868',
            id: 6
        },
        {
            name: 'И.Тургенев',
            title: 'Отцы и дети',
            pages: 400,
            year: '1861',
            id: 7
        },
    ]
  })

 export const getters = {
     getBooks : s => s.books
 }

 export const mutations = {
    deleteBook(state, id) {
        state.books = state.books.filter(book => book.id !== id)
    },
    updateBook(state, {title,name,pages,year,id} ) {
        const book = state.books.find(el => {
            return el.id === id
        })

        book.title = title
        book.name = name
        book.pages = pages
        book.year = year
    },
    createBook(state, {title,name,pages,year} ) {
        const book = {
            title,
            name,
            pages,
            year,
            id: state.books.length +1
        }

        state.books.push(book)
    },

    sortedBy(state, sortKey) {
        const books = state.books
            books.sort((a, b) => {
            let compare = 0;
            if (a[sortKey] > b[sortKey]) {
                compare = 1;
            } else if (b[sortKey] > a[sortKey]) {
                compare = -1;
            }
            return compare;
        });
        state.books = books;
    },
    cancelSort(state, sortKey) {
        state.books.sort( (a,b) => +a[sortKey] - +b[sortKey])
    }
 }