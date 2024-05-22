import axios from 'axios'

export const login = async (payload) => {
  return await axios.post(`https://illiyin.goforumrah.com/api/hotel-business/login`, payload)
}

export const forgot = async (payload) => {
  return await axios.post(`https://illiyin.goforumrah.com/api/hotel-business/forgot-password/request`, payload)
}
