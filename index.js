const moment = require('moment');

module.exports = (year, dateFormat = 'ddd MMM D') => {
	if (typeof year !== 'number') {
		throw new TypeError('Expected a number');
	}

	const startDate = moment().set({year, month: 0, date: 1});
	const stopDate = moment().set({year, month: 11, date: 31});

	const dates = [];
	const currentDate = startDate;

	/* eslint-disable no-unmodified-loop-condition */
	while (currentDate <= stopDate) {
		dates.push(currentDate.format(dateFormat));
		currentDate.add(1, 'day');
	}
	return dates;
};
