const { default: axios } = require('axios');
const AccountControl = require('./controls/AccountControl');
const user = require('./test-data/user');
const BooksStoreControl = require('./controls/BookStoreControl');
const books = require('./test-data/books');

describe('test for bookStore api', () => {
	let userId;
	let token;

	beforeAll(async () => {
		token = await AccountControl.generateToken(user.userName, user.password);
		userId = await AccountControl.getUserById(user.userName, user.password);
		const deleteBooks = await BooksStoreControl.deleteBooks(userId, token);
		expect(deleteBooks.status).toBe(204);
	});

	test('add book number one', async () => {
		const response = await BooksStoreControl.addBook(userId, token, books[0].isbn);
		// console.log(response.data);
		expect(response.status).toBe(201);
		expect(response.data.books[0].isbn).toBe(books[0].isbn);
	});

	test('add book number two', async () => {
		const response = await BooksStoreControl.addBook(userId, token, books[1].isbn);
		// console.log(response.data);
		expect(response.status).toBe(201);
		expect(response.data.books[0].isbn).toBe(books[1].isbn);
	});

	test('add book number three', async () => {
		const response = await BooksStoreControl.addBook(userId, token, books[2].isbn);
		// console.log(response.data);
		expect(response.status).toBe(201);
		expect(response.data.books[0].isbn).toBe(books[2].isbn);
	});

	test('add book number four', async () => {
		const response = await BooksStoreControl.addBook(userId, token, books[3].isbn);
		// console.log(response.data);
		expect(response.status).toBe(201);
		expect(response.data.books[0].isbn).toBe(books[3].isbn);
	});

	test('add book number five', async () => {
		const response = await BooksStoreControl.addBook(userId, token, books[4].isbn);
		// console.log(response.data);
		expect(response.status).toBe(201);
		expect(response.data.books[0].isbn).toBe(books[4].isbn);
	});
});
