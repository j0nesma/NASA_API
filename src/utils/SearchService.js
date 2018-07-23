
module.exports = function(searchValue){
    const http = require('http');
    const rootUrl = 'https://images-api.nasa.gov/';

    let getImage = function(searchValue, callback){
        console.log(searchValue);
        let data = "";
        req = http.get(rootUrl+"/search?q="+searchValue+"",(res)=>{
            res.setEncoding('utf8');
            res.on('data', function (d) {
              data+=d;
            });
            res.on("end", function(){
                console.log(JSON.parse(data))
                callback(JSON.parse(data));
            })
          });
          
        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
    }

    return {
        'getImage':getImage
    }
}
    

