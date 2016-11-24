import request from 'superagent';

function login({ username }) {
	return new Promise((resolve, reject) => {
		request
			.post('/api/login')
			.send({ username })
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						username: res.body.username,
						avitarUri: res.body.avitarUri
					});
				}
			});
	});
}

function logout() {
	return new Promise((resolve, reject) => {
		request
			.post('/api/logout')
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
	});
}

export default function (name, values) {
	switch (name) {
		case 'login':
			return login(values);
		case 'logout':
			return logout(values);
	}
}
