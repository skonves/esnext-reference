import request from 'superagent';

function saveNumber({ number }) {
	return new Promise((resolve, reject) => {
		request
			.put('/api/number')
			.send({ number })
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
	});
}

function loadNumber() {
	return new Promise((resolve, reject) => {
		request
			.get('/api/number')
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.body.number);
				}
			});
	});
}

export default function (name, values) {
	switch (name) {
		case 'save':
			return saveNumber(values);
		case 'load':
			return loadNumber(values);
	}
}
