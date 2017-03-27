require.config({
	urlArgs : "_=" + new Date().getTime(),
	paths : {
		"jquery" : ["http://code.jquery.com/jquery-1.12.4.min", "/lib/jQuery/jquery-1.12.4.min"],
		"t2" : ["/js/test2"],
		"t" : ["/js/test"]
	}
});

require(["t2"], function(){
	// alert("hello world")
	// console.log(_$.inArray(3, [2, 3, 4, 5]));
	// console.log(arguments)
	console.log("模块加载完毕后...");
	console.log("test..  ..");
});