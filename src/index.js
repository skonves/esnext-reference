import { func } from './worker';

func();

const x = { a: 'a', b: 'b' };
const c = 'c';

const asdf = { c, 'f-f': x };

asdf['f-f'];
asdf.c;

show({ ...x, c });

if (true) {
	asdf.c = 'asdf';
}

var t = d => { return x; };

const asdfasdf = [ 4, 5, 6, 7 ];

const show = function ({ a, b, c, d }) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
};
