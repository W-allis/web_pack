import request from '@/utils/request'

export function getCityList() {
  return request.getJson(process.env.api + '/userlist')
}