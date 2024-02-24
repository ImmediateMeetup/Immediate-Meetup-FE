import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
})

export async function join(data) {
  console.log(data)
  return await api.post('/user', data)
}

export async function login(data) {
  console.log(data)
  return await api.post('/user/login', data)
}

export async function emailCheck() {
  return await api.get('/user/email')
}

// export async function emailSend(data) {
//   console.log(data)
// }

export async function editPassword(data) {
  console.log(data)
  return await api.patch('/user/edit-password', data)
}

export async function getUserProfile(token) {
  return await api.get('/user', {
    headers: {
      Authorization: `${token}`,
    },
  })
}
