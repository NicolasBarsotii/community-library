import bookRepositories from "../repositeries/book.repositories.js"

async function createBookSevice(newBook, userId) {
    const createBook = await bookRepositories.createBookRepository(newBook, userId)
    if(!createBook) throw new Error ("Error creating book")
    return createBook}

    async function findAllBooksService() {
        const books = await bookRepositories.findAllBooksRepository()
        return books
    }

    async function findBookByIdService(bookId) {
        const book = await bookRepositories.findBookByIdRepository(bookId)
        if (!book) throw new Error ('Book not found')
            return book;
    }

    async function updateBookService(updateBook, bookId, userId) {
        const book = await bookRepositories.findBookByIdRepository(bookId)
        if(!book) throw new Error ('Book not found')
        if (book.userId !== userId) throw new Error ('Unauthozired')
        const response = await bookRepositories.updateBookRepository(
            updateBook,
            bookId
        )
        return response;
    }

    async function deleteBookService(bookId, userId){
        const book = await bookRepositories.findBookByIdRepository(bookId)
        if (!book) throw new Error('Book not Found')
        if (book.userId !== userId) throw new Error ('unauthorized')
        const response = await bookRepositories.deleteBookRepository(bookId)
        return response
    }

    async function searchBookService(search) {
        if (!search) return await bookRepositories.findAllBooksRepository();
        const books = await bookRepositories.searchBooksRepository(search);
        return books
    }

    export default{
        createBookSevice,
        findAllBooksService,
        findBookByIdService,
        updateBookService,
        deleteBookService,
        searchBookService
    }