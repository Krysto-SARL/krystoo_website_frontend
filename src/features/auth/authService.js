import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/auth'

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + '/login', userData)

  if (response.data) {
    localStorage.setItem('userToken', JSON.stringify(response.data.token))
  }
  return response.data
}

// Logout
const logout = () => {
  localStorage.removeItem('userToken')
}

// Update password
const updatePassword = async (passwordData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    API_URL + '/updatepassword',
    passwordData,
    config,
  )

  return response.data
}

const authService = {
  login,
  logout,
  updatePassword,
}

export default authService
