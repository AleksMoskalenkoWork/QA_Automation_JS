const { default: axios, get } = require('axios');

describe('Get todos list', () => {
	test('Todos list', async () => {
		const todosList = await axios.get('https://jsonplaceholder.typicode.com/todos');
		// console.log(todosList.data.map((x) => x.completed).filter((item) => item === false).length);
		const completed = todosList.data.map((x) => x.completed).filter((item) => item === true);
		const notCompleted = todosList.data.map((x) => x.completed).filter((item) => item === false);
		expect(todosList.status).toEqual(200);
		expect(todosList.data.length).toEqual(200);
		expect(completed.length).toEqual(90);
		expect(notCompleted.length).toEqual(110);
	});
});
