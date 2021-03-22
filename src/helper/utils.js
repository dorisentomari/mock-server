const moment = require('moment');

function formatDate(date = new Date(), needTime= true) {
	if (needTime) {
		return moment(new Date(date)).format('YYYY-MM-DD HH:mm:ss');
	}
	return moment(new Date(date)).format('YYYY-MM-DD');
}

function randomStr() {
	return Math.random().toString(32).slice(2);
}

module.exports = {
	formatDate,
	randomStr,
};
