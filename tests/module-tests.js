import { assert } from 'chai';
import * as exampleModule from '../src/example-module';

describe('example-module', function () {
	it('runs sync function', function () {
		// ARRANGE
		const value = 'example value';

		// ACT
		const result = exampleModule.syncFunction(value);

		// ASSERT
		assert.equal(result, value);
	});

	it('runs async function', async function () {
		// ARRANGE
		const value = 'example value';

		// ACT
		let result;
		let err;

		try {
			result = await exampleModule.asyncFunction(value);
		} catch (ex) {
			err = ex;
		}

		// ASSERT
		assert.equal(result, value);
		assert.notOk(err);
	});

	it('gets async error', async function () {
		// ARRANGE
		const value = 'example value';
		const error = 'example error';

		// ACT
		let result;
		let err;

		try {
			result = await exampleModule.asyncFunction(value, error);
		} catch (ex) {
			err = ex;
		}

		// ASSERT
		assert.notOk(result);
		assert.equal(err, error);
	});
});
