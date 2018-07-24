
module.exports = function(searchValue){
    const http = require('http');
    const rootUrl = 'https://images-api.nasa.gov/';

    let search = (searchValue, callback)=>{
        console.log(searchValue);
        let data = "";
        req = http.get(rootUrl+"/search?q="+searchValue+"",(res)=>{
            res.setEncoding('utf8');
            res.on('data', function (d) {
              data+=d;
            });
            res.on("end", function(){
                console.log(JSON.parse(data))
                callback(sortMedia(JSON.parse(data)));
            })
          });
          
        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
    }

    let sortMedia = (object)=>{
        let temp = {
            Audio:[],
            Image:[],
            Video:[],
            Other:[]
        }
        console.log(object);
        object.collection.items.forEach(element => {
            switch(element.data[0].media_type) {
                case "image":
                    temp.Image.push(element);
                    break;
                case "audio":
                    temp.Audio.push(element);
                    break;
                case "video":
                    temp.Video.push(element);
                    break;
                default:
                    temp.Other.push(element);
            }
        });
        return temp;
    }

    let getAudio = ()=>{

    }

    let getVideo = ()=>{

    }

    return {
        'search':search
    }
}
    

