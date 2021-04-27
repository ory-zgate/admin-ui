import request from '@/utils/request'
import { checkSessionValid } from "@/api/kratos";

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return checkSessionValid()
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
