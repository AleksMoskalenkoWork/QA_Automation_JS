import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book = new Book('1408', 'Стівен Кинг', 1999);
const book1 = new Book('Сяйво', 'Стівен Кінг', 1977);
const book2 = new Book('Воно', 'Стівен Кінг', 1986);

// book.printInfo();
// book1.printInfo();
// book2.printInfo();

const eBook = new EBook('Зелена миля', 'Стівен Кінг', 1996, 'PDF');

// eBook.printInfo();

const createInstanceFromBook = EBook.createInstanceFromBook(book, 'PDF');

// createInstanceFromBook.printInfo();

const books = [];

books.push(book, book1, book2, eBook, createInstanceFromBook);

let oldestBook = Book.oldestBookYear(books);
console.log('Найдавніша книга:');
oldestBook.printInfo();
