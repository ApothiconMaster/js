var http = reqquire ('http');
var server = http.createServer (function(request, response){
		if(request.url == '/' ){
		  response.setHeader('Content-Type','text/html');
		  response.end('<hr /> <strong> Whaddup Boiiiiii</strong><hr />');
		}
		
		console.log(request.url);
});
server.listen(8080,function(){
		console.log('alpha port 8080');
});
