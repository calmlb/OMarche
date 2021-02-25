const BASE_URL = '/api/store';

export function getStores() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function createStore(s) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
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

  