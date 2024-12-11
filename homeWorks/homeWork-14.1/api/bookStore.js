const bookStore = {
	getBooks: 'BookStore/v1/Books',
	addBooks: 'BookStore/v1/Books',
	getBook: 'BookStore/v1/Book',
	deleteBook: 'BookStore/v1/Book',
	deleteBooks: `/BookStore/v1/Books?UserId=`,
	updateBook: `/BookStore/v1/Books/`,
};

module.exports = bookStore;
