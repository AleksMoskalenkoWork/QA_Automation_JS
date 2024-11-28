// Завдання 1

// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше

const handleEven = () => {
  console.log('number is even');
};

const handleOdd = () => {
  console.log('number is odd');
};

const handleNum = (number, isEvenCB, isOddCB) => {
  if (number % 2 === 0) {
    isEvenCB();
  } else {
    isOddCB();
  }
};

handleNum(5, handleEven, handleOdd);
