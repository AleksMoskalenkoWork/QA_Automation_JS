const { default: axios, get } = require('axios');

describe('Post by userId', () => {
	test('Add posts by userId', async () => {
		const newPost = {
			title: 'AQA',
			body: 'automation qa engineer',
			userId: 1,
		};

		const addPost = await axios.post('https://jsonplaceholder.typicode.com/posts', {
			body: JSON.stringify(newPost),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		axios.interceptors.request.use((addPost) => {
			expect(addPost.status).toEqual(200);
			expect(addPost.data).toEqual(newPost);
		});

		axios.interceptors.response.use((addPost) => {
			expect(addPost.status).toEqual(200);
			expect(addPost.data.length).toEqual(101);
		});
	});
});
