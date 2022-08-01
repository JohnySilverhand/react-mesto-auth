export const BASE_URL = 'https://auth.nomoreparties.co';

const handleResponse = (res) => {
  if(res.status === 200 || 201) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => handleResponse(res))
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => handleResponse(res))
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then((res) => handleResponse(res))
}