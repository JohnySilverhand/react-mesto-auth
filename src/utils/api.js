const token = localStorage.getItem('token');

class Api {
	constructor({url, headers}) {
		this._url = url;
		this._headers = headers;
		this._token = headers.authorization;
	}

	handleResponse(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(res.status);
	}

	getCards() {
		return fetch (`${this._url}/cards`, {
			headers: {
				authorization: this._token
			}
		})
		.then((res) => this.handleResponse(res));
	}

	getProfileInfo() {
		return fetch (`${this._url}/users/me`, {
			headers: {
				authorization: this._token
			}
		})
		.then((res) => this.handleResponse(res));
	}

	addUserInfo(name, about) {
		return fetch (`${this._url}/users/me`, {
			method: 'PATCH',
			headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
			body: JSON.stringify({
				name: name, 
				about: about
			})
		})
		.then((res)=>	this.handleResponse(res));
	}

	addUserAvatar(data) {
		return fetch (`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
			body: JSON.stringify(data)
		})
		.then((res) => this.handleResponse(res));
	}

	addCards(card) {
		return fetch (`${this._url}/cards`, {
			method: 'POST',
			headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
			body: JSON.stringify(card)
		})
		.then((res) => this.handleResponse(res));
	}

	deleteCard(data) {
		return fetch (`${this._url}/cards/${data._id}`, {
			method: 'DELETE',
			headers: {
        authorization: this._token,
      },
		})
		.then((res) => this.handleResponse(res));
	}

	likeCard(data) {
		return fetch (`${this._url}/cards/${data._id}/likes`, {
			method: 'PUT',
			headers: {
        authorization: this._token,
      },
		})
		.then((res) => this.handleResponse(res));
	}	

	dislikeCard(data) {
		return fetch (`${this._url}/cards/${data._id}/likes`, {
			method: 'DELETE',
			headers: {
        authorization: this._token,
      },
		})
		.then((res) => this.handleResponse(res));
	}

	getToken = (token) => {
		this._token = `Bearer ${token}`
	}
	
}

const api = new Api({
	url: 'https://project.nomorepartiesxyz.ru',
	headers: {
		 authorization:`Bearer ${token}`,
		'Content-Type':'application/json',
	}
});

export default api;