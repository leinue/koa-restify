var util = require('../utils.js');
var users = require('./users.js');

module.exports = function() {

	return {

		index: function *(next) {
			this.body = util.resp('200', 'gospel api');
		},

		users: users

	}

}