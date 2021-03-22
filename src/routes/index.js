const homeRoute = require('./home');
const userRoute = require('./user');
const todoRoute = require('./todo');
const mockRoute = require('./mock');

function initRoute(app) {
	app.use('/api', homeRoute);
	app.use('/api/user', userRoute);
	app.use('/api/todo', todoRoute);
	app.use('/api/mock', mockRoute);
}

module.exports = initRoute;
