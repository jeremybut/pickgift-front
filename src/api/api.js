import { API_ROOT, BASE_URL } from '../constants';

const handleErrors = response => {
  if (!response.ok) {
    return response.json().then(Promise.reject.bind(Promise));
  }

  if (response.status === 204) {
    return [];
  }

  return response.json();
};

export const get = uri => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user
        .access_token}`,
    },
  }).then(handleErrors);
};

export const post = (uri, payload = {}) => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user
        .access_token}`,
    },
    body: JSON.stringify(payload),
  }).then(handleErrors);
};

export const put = (uri, payload = {}) => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user
        .access_token}`,
    },
    body: JSON.stringify(payload),
  }).then(handleErrors);
};

export const patch = (uri, payload = {}) => {
  return fetch(`${API_ROOT}${uri}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user
        .access_token}`,
    },
    body: JSON.stringify(payload),
  }).then(handleErrors);
};

export const destroy = (uri, id) => {
  return fetch(`${API_ROOT}${uri}/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('state')).user
        .access_token}`,
    },
  }).then(handleErrors);
};

export const postAuthorizationCode = payload =>
  fetch(`${BASE_URL}/oauth/token`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(handleErrors);
