export default class ExampleClass {
	constructor(success, fail) {
		this.success = success;
		this.fail = fail;
	}

	syncFunction = () => {
		return this.success;
	}

	asyncFunction = async () => {
		return await examplePromise(this.success, this.fail);
	}
}

function examplePromise(success, fail) {
	return new Promise((resolve, reject) => {
		if (fail) {
			setTimeout(() => reject(fail), 100);
		} else {
			setTimeout(() => resolve(success), 100);
		}
	});
}
