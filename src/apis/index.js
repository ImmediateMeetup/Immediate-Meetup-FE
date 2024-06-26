import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  credentials: 'same-origin'
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

export async function emailCertification(email) {
  return await api.post(`/user/emails/verification-requests?email=${email}`)
}

export async function emailConfirm({email, code}) {
  return await api.get(`emails/verifications?email=${email}&code=${code}`)
}

export async function editPassword(data) {
  console.log(data)
  return await api.patch('/user/edit-password', data)
}

export async function editUser(token, data) {
  return await api.patch('user/edit', data, {
    headers: {
      'AUTH-KEY': `${token}`,
      'Content-Type': 'multipart-form/data'
    }
  })
}

export async function createMeeting({data, token}) {
  console.log(data)
  return await api.post('/meeting', data, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function getAllMeetingMock() {
  return await api.get('api-meet-up-meeting')
}

export async function getMeeting(token) {
  return await api.get(`/meeting/invitations`, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function getMeetingDetail({meeting_id, token}) {
  return await api.get(`/meeting/${meeting_id}`, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function postReceiveRequestMock() {
  return await api.post(`/api-meetup-meeting`)
}

export async function postReceiveRequest() {
  return await api.post(`/meeting/invitations`, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function editTime({meeting_id, token}) {
  return await api.patch(`/time/${meeting_id}`, null, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function inviteMember({meetingId, memberId, token}) {
  return await api.post(`meeting/invitations/${meetingId}/${memberId}`, null, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function searchMember({keyword}) {
  return await api.get(`http://localhost:8080/api/meet-up/user/search?keyword=${keyword}`)
}

export async function getMeetingTime({meeting_id, token}) {
  return await api.get(`/time/${meeting_id}`, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function getAllMeetingTime(meeting_id) {
  return await api.get(`/time/all/${meeting_id}`)
}

export async function postComment({data, token}) {
  console.log(data)
  return await api.post('/comment/comment', data, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function postReplyComment({data, token}) {
  console.log(data)
  return await api.post('/comment/reply', data, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function getMeetingMock() {
  return await api.get('/api-meetup-meeting')
}

/*export async function getAllMeeting(meeting_id,token) {
  return await api.get('/meet-up/meeting/${meeting_id}', {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}*/

export async function deleteMember() {
  return await api.delete('/member')
}

export async function getUserProfile(token) {
  return await api.get('/user', {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

//map
export async function postUserLocation(id, token, data) {
  return await api.post(`/map/${id}`, data, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function patchUserLocation(id, token, data) {
  return await api.patch(`/map/${id}`, data, {
    headers: {
      'AUTH-KEY': `${token}`
    }
  })
}

export async function getNearSubway(id) {
  return await api.get(`/map/point/${id}`)
}
