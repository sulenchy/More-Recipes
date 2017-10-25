/***testing getting response from api */
var http = require('http');

function getJSON(options,cb){
    htt.request(options,function(res){
        var body='';
        res.on('data',function(chunk){
            body += chunk;
        });

        res.on('end',function(){
            var result = JSON.parse(body);
            cb(null,result);
        });
        
        res.on('error',cb);
    })
    .on('error',cb)
    .end();
}

var options = {
    host:'api-sandbox.oanda.com',
    port:80,
    path:'/v1/quote?instruments=USD_ZAR',
    method:'GET'
};


getJSON(options,function(err,result){
    if(err){
       return console.log('Error while trying to get prices: ',err); 
    }
    console.log(result);
})