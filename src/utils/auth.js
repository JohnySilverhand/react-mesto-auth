export const Base_Url = 'https://auth.nomoreparties.co';
export const register = (email, password) => {
  return fetch(`${Base_Url}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    if(res.status === 201) {
      return res.json();
    }
  })
  .then((res) => {
    return res;
  })
}

export const authorize = (email, password) => {
  return fetch(`${Base_Url}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    if(res.status === 201) {
      return res.json();
    }
  })
  .then((data) => {
    localStorage.setItem('jwt', data.jwt)
    return data;
  })
}

export const getContent = (jwt) => {
  return fetch(`${Base_Url}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })
  .then((res) => {
    if(res.status === 200) {
      return res.json();
    }
  })
}