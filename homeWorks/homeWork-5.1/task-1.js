// Завдання 1: Визначення рівня успішності студента

// Студентам потрібно визначити свій рівень успішності за оцінками, які вони отримали за курс. Напишіть програму, яка допоможе студентам визначити свій рівень успішності на основі середньої оцінки.

// Створіть змінну averageGrade і присвойте їй середню оцінку студента (від 0 до 100).
// За допомогою конструкції if else, визначте та виведіть у консоль рівень успішності студента:
// Якщо середня оцінка менше 60, вивести "Незадовільно".
// Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
// Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
// Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
// Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно".

const averageGrade = 60;

if (averageGrade < 0 || averageGrade > 100) {
	console.log('Неправильне значення. Введіть оцінку від 0 до 100.');
} else if (averageGrade < 60) {
	console.log('Незадовільно');
} else if (averageGrade <= 70) {
	console.log('Задовільно');
} else if (averageGrade <= 80) {
	console.log('Добре');
} else if (averageGrade <= 90) {
	console.log('Дуже добре');
} else {
	console.log('Відмінно');
}
