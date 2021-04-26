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

export function updateUser(data) {
  return request({
    url: `/api/identity/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteUser(id) {
  return request({
    url: `/api/identity/${id}`,
    method: 'delete'
  })
}