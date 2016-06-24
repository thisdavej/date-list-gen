#!/usr/bin/env node
const meow = require('meow');
const dateListGen = require('./');

const cli = meow([
	`Usage
	  $ date-list-gen [year] [dateFormat]

	Options
	  year  Year to print. [Default: the current year]
	  dateFormat  date format w/ Moment.js conventions. [Default: ddd MMM D]

	Examples
	  $ date-list-gen

	  $ date-list-gen 2016`
]);

const year = cli.input[0] || new Date().getFullYear();
const dateFormat = cli.input[1] || undefined;

const dates = dateListGen(year, dateFormat);

for (const date of dates) {
	console.log(date);
}
