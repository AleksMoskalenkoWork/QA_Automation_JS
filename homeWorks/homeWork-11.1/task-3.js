// Завдання 3
// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

// Get Todos List
const fetchTodosData = async () => {
	await fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((data) => {
			return console.log('Response Todos List:', data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
};

// fetchTodosData();

// Get Users List
const fetchUsersData = async () => {
	await fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((data) => {
			return console.log('Response Users List:', data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
};

// fetchUsersData();

// Use Promise.all

let urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/users/1'];

let requests = urls.map((url) => fetch(url));

const allDataInArray = async () => {
	const responses = await Promise.all(requests);
	const data = await Promise.all(responses.map((r) => r.json())).catch((error) => {
		console.error('Error:', error);
	});
	return console.log('All Data', data);
};

// allDataInArray();

// Use Promise.race

const firstSucsessFetch = async () => {
	const responses = await Promise.race(requests);
	const data = await responses.json().catch((error) => {
		console.error('Error:', error);
	});
	return console.log('Race Data', data);
};

firstSucsessFetch();
