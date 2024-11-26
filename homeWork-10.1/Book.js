// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)

export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(value) {
    if (typeof value === '' || typeof value !== 'string') {
      console.log('Значення має містити текст і не повино бути пустим');
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value === '' || typeof value !== 'string') {
      console.log('Значення має містити текст і не повино бути пустим');
    }
    this._author = value;
  }

  set year(value) {
    if (typeof value !== 'number' || value < 0) {
      console.log('Значення має містити рік випуску книги');
    }
    this._year = value;
  }

  static oldestBookYear(books) {
    debugger;
    return books.reduce((previousValue, currentValue) =>
      previousValue.year < currentValue.year ? currentValue : previousValue
    );
  }

  printInfo() {
    console.log(
      `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`
    );
  }
}

// const book = new Book('1408', 'Стівен Кинг', 1999);
// const book1 = new Book('Сяйво', 'Стівен Кінг', 1977);
// const book2 = new Book('Воно', 'Стівен Кінг', 1986);

// book.printInfo();
// book1.printInfo();
// book2.printInfo();
