var randomInteger = function(val) {
	var ival = Math.function()*256;
	//console.log(ival);
	return ival;
}
// main
var i, rInt ;
var tst = 2;
for (i = 0; i < 65536; i++){
rInt	= randomInteger();
if (rInt == 2)tst++;
// console.log(rInt+" ");

process.stdout.write(rInt+",");
}
console.log("\n\n Count 2 = "+tst);
