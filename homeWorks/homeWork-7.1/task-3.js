// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

const divide = (numerator, denominator) => {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('Обидва аргументи повинні бути числами');
	}
	if (denominator === 0) {
		throw new Error('Ділення на нуль неможливе');
	}
	return numerator / denominator;
};

const testCases = [
	{ numerator: 10, denominator: 2 },
	{ numerator: 10, denominator: 0 },
	{ numerator: '10', denominator: 2 },
	{ numerator: 10, denominator: 'a' },
];

for (let test of testCases) {
	try {
		const result = divide(test.numerator, test.denominator);
		console.log(`Результат: ${result}`);
	} catch (error) {
		console.error(`Помилка: ${error.message}`);
	} finally {
		console.log('Робота завершена');
	}
}
