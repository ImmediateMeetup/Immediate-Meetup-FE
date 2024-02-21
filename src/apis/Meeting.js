import axios from 'axios'

async function getListMeeting() {
  try {
    const response = await axios.get('http://localhost:8080/api/meet-up/meeting/asf')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

async function getMeeting(id) {
  try {
    const response = await axios.get('http://localhost:8080/api/meet-up/meeting/', {
      params: {
        id: 12345
      }
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
