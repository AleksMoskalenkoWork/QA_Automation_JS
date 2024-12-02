// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
	{
		name: 'Kate',
		email: 'kate@gmail.com',
		age: 34,
	},
	{
		name: 'Nick',
		email: 'nick@gmail.com',
		age: 46,
	},
	{
		name: 'Alfred',
		email: 'alfred@gmail.com',
		age: 65,
	},
];

for (const { name, email, age } of users) {
	console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
