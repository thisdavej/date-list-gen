import test from 'ava';
import fn from './';

test('date returned in default format', t => {
	t.is(fn(2016)[0], 'Fri Jan 1');
});

test('date returned in specific format', t => {
	t.is(fn(2016, 'dddd M/DD/YYYY')[0], 'Friday 1/01/2016');
});

test('count returned is 365 for non-leap year', t => {
	t.is(fn(2017).length, 365);
});

test('count returned is 366 for leap year', t => {
	t.is(fn(2016).length, 366);
});
