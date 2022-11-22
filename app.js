const http=require("http")
http.createServer((req,res)=>{
	res.write("allu arjun")
	res.end()
}).listen(2000)