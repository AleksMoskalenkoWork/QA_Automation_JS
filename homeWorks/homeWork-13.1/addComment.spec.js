const { default: axios, get } = require('axios');

describe('Add comment', () => {
	test('Add comment by userId', async () => {
		const newComment = {
			postId: 777,
			name: 'AQA',
			email: 'AQA@gardner.biz',
			body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantiumlaudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
		};

		const addComment = await axios.post('https://jsonplaceholder.typicode.com/comments', {
			body: JSON.stringify(newComment),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		axios.interceptors.request.use((addComment) => {
			expect(addComment.status).toEqual(200);
			expect(addComment.data).toEqual(newComment);
		});

		axios.interceptors.response.use((addComment) => {
			expect(addComment.status).toEqual(200);
			expect(addComment.data).toEqual(newComment);
			expect(JSON.parse(addComment.data.body).postId).toEqual(777);
		});
	});
});
