import { assert } from 'chai';
import ExampleClass from '../src/example-class';

describe('example-class', function () {
	it('runs sync function', function () {
		// ARRANGE
		const value = 'example value';
		const sut = new ExampleClass(value);

		// ACT
		const result = sut.syncFunction();

		// ASSERT
		assert.equal(result, value);
	});

	it('runs async function', async function () {
		// ARRANGE
		const value = 'example value';
		const sut = new ExampleClass(value);

		// ACT
		let result;
		let err;

		try {
			result = await sut.asyncFunction();
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
		const sut = new ExampleClass(value, error);

		// ACT
		let result;
		let err;

		try {
			result = await sut.asyncFunction();
		} catch (ex) {
			err = ex;
		}

		// ASSERT
		assert.notOk(result);
		assert.equal(err, error);
	});
});
