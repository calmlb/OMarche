const BASE_URL = '/api/product';

export function getProducts() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function createProduct(s) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(s)
    }).then(res => res.json());
}

export function updateProduct(s) {
    return fetch(`${BASE_URL}/${s._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(s)
    }).then(res => res.json());
}

export function deleteProduct(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }
  