// this file is just dumb stuff for the sake of the eslint config

import { func } from './example-module';

func();

const x = { a: 'a', b: 'b' };
const c = 'c';

const asdf = { c, 'f-f': x };

asdf['f-f'];
asdf.c;

var show = function ({ a, b, c, d }) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
};

show({ ...x, c });

if (true) {
	asdf.c = 'asdf';
}

var t = d => { return x; };

const asdfasdf = [4, 5, 6, 7];


