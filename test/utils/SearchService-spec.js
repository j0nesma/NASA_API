let s  = require('../../utils/searchService')
describe("Search Service", function() {

    it("sorting media", function() {
        //test data
        let data = [
            {
                "data": [
                    {
                        "media_type": "image"
                    },
                    {
                        "media_type": "video"
                    },
                    {
                        "media_type": "video"
                    },
                    {
                        "media_type": "audio"
                    },
                    {
                        "media_type": "other"
                    }
                ],
            }]
        //expected result 
        let res = {
            Audio:[{
                "media_type": "audio"
            }],
            Image:[
                {
                "media_type": "image"
            }],
            Video:[
            {
                "media_type": "video"
            },
            {
                "media_type": "video"
            }],
            Other:[{
                "media_type": "other"
            }]
        }
        //run test
        returned = s.sortMedia(data)
      expect(returned).toEqual(res);
    });
  });