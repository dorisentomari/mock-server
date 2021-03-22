const homeRoute = require('./home');
const userRoute = require('./user');
const todoRoute = require('./todo');

function initRoute(app) {
	app.use('/api', homeRoute);
	app.use('/api/user', userRoute);
	app.use('/api/todo', todoRoute);
}

module.exports = initRoute;
