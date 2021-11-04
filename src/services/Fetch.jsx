import request from 'superagent';

export const callApi = async (url, method, body) => {
    if(method == 'GET'){
        const res = await request.get(url);
        return res.body;
    }
    if(method == 'POST'){
        const res = await request.post(url);
        return res.body;
    }if(method == 'PUT'){
        const res = await request.put(url);
        return res.body;
    }
    if(method == 'PATCH'){
        const res = await request.patch(url);
        return res.body;
    }
    if(method == 'DELETE'){
        const res = await request.delete(url);
        return res.body;
    }
}