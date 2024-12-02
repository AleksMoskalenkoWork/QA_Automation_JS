import { Book } from './Book.js';

// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook

export class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this.fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(value) {
		if (typeof value === '' || typeof value !== 'string') {
			console.log('Значення має містити формат файлу (наприклад PDF, XLSX, DOXS)');
		}
		this._fileFormat = value;
	}

	static createInstanceFromBook(book, fileFormat) {
		return new EBook(book.title, book.author, book.year, fileFormat);
	}

	printInfo() {
		console.log(
			`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`,
		);
	}
}

// const eBook = new EBook('Зелена миля', 'Стівен Кінг', 1996, 'PDF');

// eBook.printInfo();
