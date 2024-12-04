const { default: axios, get } = require('axios');

describe('all users list', () => {
	test('Get all users list', async () => {
		const compareList = [
			'Leanne Graham',
			'Ervin Howell',
			'Clementine Bauch',
			'Patricia Lebsack',
			'Chelsey Dietrich',
			'Mrs. Dennis Schulist',
			'Kurtis Weissnat',
			'Nicholas Runolfsdottir V',
			'Glenna Reichert',
			'Clementina DuBuque',
		];
		const usersList = await axios.get('https://jsonplaceholder.typicode.com/users');

		axios.interceptors.response.use((usersList) => {
			expect(usersList.status).toEqual(200);
			expect(usersList.data.map((x) => x.id).length).toEqual(10);
		});

		expect(
			JSON.stringify(usersList.data.map((x) => x.name).sort((a, b) => a.localeCompare(b))) ===
				JSON.stringify(compareList.sort((a, b) => a.localeCompare(b))),
		);

		// console.log(usersList.data.map((x) => x.name).sort((a, b) => a.localeCompare(b)));

		// console.log(JSON.stringify(usersList.data.map((x) => x.name)) === JSON.stringify(compareList));
	});
});
