import { func } from './worker';

func();

const x = { a: 'a', b: 'b' };
const c = 'c'

show({...x, c});

function show({a, b, c, d}) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}