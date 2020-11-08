import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:8888/api',
    withCredentials: true
})

async function get(url, data, config = {}) {
    const { data: result } = await request({
        ...config,
        url,
        method: 'get',
        params: data
    })
    return result;
}

async function post(url, data, config = {}) {

    const { data: result } = await request({
        ...config,
        url,
        method: 'post',
        data
    })
    return result;
}

async function put(url, data, config = {}) {
    const { data: result } = await request.put(url, data, config);
    return result;
}


async function remove(url, data, config = {}) {
    const { data: result } = await request.delete(url, {
        ...config,
        params: data
    });
    return result;
}


export default {
    get,
    post,
    put,
    remove,
};