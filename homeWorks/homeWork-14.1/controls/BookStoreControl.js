const bookStore = require('../api/bookStore');
const BaseControl = require('./BaseControl');

class BooksStoreControl extends BaseControl {
	async addBook(userId, token, bookId) {
		return await this.axiosInstance.post(
			`${bookStore.addBooks}`,
			{
				userId: userId,
				collectionOfIsbns: [
					{
						isbn: bookId,
					},
				],
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	async getBooks() {
		return await this.axiosInstance.get(`${bookStore.getBooks}`);
	}

	async getBook() {
		return await this.axiosInstance.get(`${bookStore.getBook}`);
	}

	async deleteBooks(userId, token) {
		return await this.axiosInstance.delete(`${bookStore.deleteBooks}` + `${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async updateBook(userId, isbn, token) {
		return await this.axiosInstance.put(
			`${bookStore.updateBook}` + `${isbn}`,
			{ userId: userId, isbn: isbn },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}

	async deleteBook() {}
}

module.exports = new BooksStoreControl();
