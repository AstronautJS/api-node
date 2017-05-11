const 	upfiles = require('upfiles')()
		.then('config')
		.then('controllers')
		.exec();

const 	config 		 		= upfiles.config;
const 	accountController	= upfiles.accountController;
const 	categoryController	= upfiles.categoryController;
const 	placeController		= upfiles.placeController;
const   app 		 		= upfiles.express;

//Initial Sever
app.listen(config.server.port, () => console.log('Start Server /' + config.server.host + ':' + config.server.port) );

//Main
app.route('/')
	.get(function(req, res){
		res.send("Hellor World!!!");
	});

app.route('/api/account/visitedPlaces')
.put(accountController.alterVisited)
;

app.route('/api/account')
	.get(accountController.list)
	.post(accountController.insert)
	.put(accountController.alter)
	.delete(accountController.remove);

app.route('/api/category')
	.get(categoryController.list)
	.post(categoryController.insert)
	.put(categoryController.alter)
	.delete(categoryController.remove);

app.route('/api/place')
	.get(placeController.list)
	.post(placeController.insert)
	.put(placeController.alter)
	.delete(placeController.remove);
