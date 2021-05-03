import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/access/query',
    method: 'get',
    params: query
  })
}

export function createPermission(data) {
  return request({
    url: '/api/access',
    method: 'post',
    data
  })
}

export function updatePermission(data) {
  return request({
    url: `/api/access/${data.id}`,
    method: 'put',
    data
  })
}

export function deletePermission(id) {
  return request({
    url: `/api/access/${id}`,
    method: 'delete'
  })
}