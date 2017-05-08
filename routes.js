const 	upfiles = require('upfiles')()
		.then('config')
		.then('controllers')
		.exec();

const 	config 		 		= upfiles.config;
const 	example				= upfiles.exampleJAM;
const   app 		 		= upfiles.express;

//Initial Sever
app.listen(config.server.port, () => console.log('Start Server /' + config.server.host + ':' + config.server.port) );

//Main
app.route('/')
	.get(function(req, res){
		res.send("Hellor World!!!");
	})
	;

app.route('/api/example')
	.get(example.list)
	.post(example.insert)
	.put(example.alter)
	.delete(example.remove)
;
