import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true
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
  return await api.get(`emails/verifications?email=${email}=${code}`)
}

export async function editPassword(data) {
  console.log(data)
  return await api.patch('/user/edit-password', data)
}

export async function createMeeting({data, token}) {
  console.log(data)
  return await api.post('/meeting', data, {
    headers: {
      Authorization: `${token}`
    }
  })
}

export async function getMeeting(token) {
  return await api.get(`/meeting/invitations`, {
    headers: {
      Authorization: `${token}`
    }
  })
}

export async function getMeetingDetail({meeting_id, token}) {
  return await api.get(`/meeting/${meeting_id}`, {
    headers: {
      Authorization: `${token}`
    }
  })
}

export async function editTime({meeting_id, token}) {
  return await api.patch(`/time/${meeting_id}`, null, {
    headers: {
      Authorization: `${token}`
    }
  })
}

export async function inviteMember({meetingId, memberId, token}) {
  return await api.post(`meeting/invitations/${meetingId}/${memberId}`, null, {
    headers: {
      Authorization: `${token}`
    }
  })
}

export async function searchMember({keyword}) {
  return await api.get(`http://localhost:8080/api/meet-up/user/search?${keyword}=test`)
}

export async function getMeetingTime({meeting_id, token}) {
  return await api.get(`/time/${meeting_id}`, {
    headers: {
      Authorization: `${token}`
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
      Authorization: `${token}`
    }
  })
}

export async function postReplyComment({data, token}) {
  console.log(data)
  return await api.post('/comment/reply', data, {
    headers: {
      Authorization: `${token}`
    }
  })
}

export async function getAllMeeting(token) {
  return await api.get('/meeting/all', {
    headers: {
      Authorization: `${token}`
    }
  })
}

export async function deleteMember() {
  return await api.delete('/member')
}

export async function getUserProfile(token) {
  return await api.get('/user', {
    headers: {
      Authorization: `${token}`
    }
  })
}
