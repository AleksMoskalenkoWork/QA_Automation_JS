const { default: axios, create } = require('axios');

class BaseControl {
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://bookstore.toolsqa.com/',
			validateStatus: (status) => {
				return true;
			},
		});
	}
}

module.exports = BaseControl;
