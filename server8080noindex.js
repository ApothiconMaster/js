var http = require('http');
// fs = require('fs');
var server = http.createServer(function(request, response){
		if(request.url == '/'){
			response.setHeader('Content-Type', 'text/html');
			response.end('Whaddup Boiiiii.');
			// fs.creatReadStream('index.html').pipe(response);
		}
		console.log(request.url);
		}); //end of http.createServer function
	server.listen(8080, function () {
			console.log('alpha port 8080 listen')
});
