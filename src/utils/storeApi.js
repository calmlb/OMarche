import tokenService from '../utils/tokenService'
const BASE_URL = '/api/store';


export function getStores() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function createStore(s) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(s)
    }).then(res => res.json());
}

export function updateStore(s) {
    return fetch(`${BASE_URL}/${s._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(s)
    }).then(res => res.json());
}

export function deleteStore(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

  export function userStore(s) {
    return fetch(`${BASE_URL}/${s._id}`, {
        method: 'GET',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(s)
    }).then(res => res.json());
}
  