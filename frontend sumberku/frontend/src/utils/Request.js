import Axios from "axios";

export default class Request{
    static make(method, endpoint, data = {},params={}){
        //console.log(`${process.env.REACT_APP_API}${endpoint}`)        
        return Axios({
            
            method : method,
            url : `${process.env.REACT_APP_API}${endpoint}`, // 'http://localhost:8000/api/${endpoint}' 
            data : data,
            params: params
        });
    }
    static makeForm(method,endpoint, data = {},params={}){
        return Axios({
            config: { headers: { 'Content-Type': 'multipart/form-data' } },
            method: method,
            url : `${process.env.REACT_APP_API}${endpoint}`, // 'http://localhost:8000/api/${endpoint}' 
            data : data,
        })
    }
}    

        
 