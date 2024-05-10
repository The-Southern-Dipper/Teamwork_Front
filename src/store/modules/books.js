import { request } from '../../utils'

export function getTypeAPI() {
    return request({
        url: '/book/getTypes',
        method: 'get',
    })
}

export function getBookNumberAPI(data) {
    return request({
        method: 'post',
        url: '/book/getNumber',
        data: data
    });
}

export function getBookAPI(data) {
    return request({
        method: 'post',
        url: '/book/search',
        data: data
    });
}
