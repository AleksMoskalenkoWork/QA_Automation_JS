// Завдання 3
// Створіть об'єкт car1 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// year: число, представляє рік випуску автомобіля.
// Створіть об'єкт car2 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// owner: число, представляє рік випуску автомобіля.
// Створіть об'єкт car3. Використайте оператор spread щоб додати всі властивості що є в car1 та car2 до об’єкту car3.
// Виведіть об'єкт car3 в консоль.

const car1 = {
	brand: 'ford',
	model: 'f150',
	year: 2000,
};

const car2 = {
	brand: 'ford',
	model: 'mustang',
	//   owner: 'Aleks Moskalenko',
	owner: 2020,
};

const car3 = { ...car1, ...car2 };

console.log(car3);
