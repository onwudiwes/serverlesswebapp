import axios from "axios";

export default axios.create({

    baseURL:'https://ngeoir5on6.execute-api.us-east-1.amazonaws.com',
    headers:{
        "content-type":"application/json"
    }
})
