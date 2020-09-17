import axios from "axios";

const APIKEY = "1548ec0899364ed58fa30b54102f0101";
export default {
    getAuthorizationCode: function(APIKEY){
        axios({
            url: "http://leaflogix-publicapi.azurewebsites.net/util/AuthorizationHeader/"+ APIKEY,
            method: "get",
            headers: {"Content-Type": "application/json"}
        }).then(res => {
           return res;
        });
    }
};