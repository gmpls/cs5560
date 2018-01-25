// Load the 'index' controller
const index = require('../controllers/index.server.controller');

// Load the 'add' controller
const example = require('../controllers/example.server.controller');

// Load the 'add' controller
const add = require('../controllers/add.server.controller');

// Load the 'sum' controller
const sum = require('../controllers/sum.server.controller');

// Load the 'partials' controller
const partials = require('../controllers/partials.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Mount the 'index' controller's 'render' method
	app.get('/', index.render);
	app.get('/example', example.render);
	app.get('/add', add.render);
	app.get('/sum', sum.render);
	app.post('/add', add.render);
	app.get('/partials', partials.render);
};