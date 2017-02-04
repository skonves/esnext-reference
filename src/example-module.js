export function syncFunction(success) {
	return success;
}

export async function asyncFunction(success, fail) {
	return await examplePromise(success, fail);
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
