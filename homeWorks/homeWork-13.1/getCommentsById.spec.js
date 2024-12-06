const { default: axios, get } = require('axios');

describe('Get comments by id', () => {
	test('Comments by id', async () => {
		const commentsList = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
		// console.log(commentsList.data.length);
		axios.interceptors.response.use((commentsList) => {
			expect(commentsList.status).toEqual(200);
			expect(commentsList.data.length).toEqual(5);
		});
	});
});
