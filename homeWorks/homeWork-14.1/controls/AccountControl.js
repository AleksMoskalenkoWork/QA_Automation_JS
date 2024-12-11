const account = require('../api/account');
const user = require('../test-data/user');
const BaseControl = require('./BaseControl');

class AccountControl extends BaseControl {
	async authorizedUser(userName, password) {
		return await this.axiosInstance.post(`${account.authorized}`, {
			userName: userName,
			password: password,
		});
	}
	async generateToken(userName, password) {
		const response = await this.axiosInstance.post(`${account.generateToken}`, {
			userName: userName,
			password: password,
		});

		return response.data.token;
	}

	async addUser(userName, password) {
		return await this.axiosInstance.post(`${account.addUser}`, {
			userName: userName,
			password: password,
		});
	}

	async getUserById(userName, password) {
		const response = await this.axiosInstance.post(`${account.getUserById}`, {
			userName: userName,
			password: password,
		});

		return response.data.userId;
	}

	async getUserInfoById(id) {
		const response = await this.axiosInstance.post(`${account.getUserInfoById}+${id}`);

		return response;
	}

	async deleteUserById(id) {
		return await this.axiosInstance.delete(`${account.deleteUserById}+${id}`);
	}
}

module.exports = new AccountControl();
