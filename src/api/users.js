import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/identity',
    method: 'get',
    params: query
  })
}

export function filterList(data) {
  return request({
    url: '/api/identity/filter',
    method: 'post',
    data
  })
}

export function createUser(data) {
  return request({
    url: '/api/identity',
    method: 'post',
    data
  })
}

export function updateUser(params) {
  return request({
    url: '/vue-admin-template/users/update',
    method: 'get',
    params
  })
}