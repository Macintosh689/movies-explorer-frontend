import { baseUrl, handleResponse } from "./Constants";

export function getUserInfo(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((response) => handleResponse(response));
}

export function getAllLikeMovies(token) {
  return fetch(`${baseUrl}/movies`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((response) => handleResponse(response));
}

export function editUserInfo(token, data) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => handleResponse(response));
}

export function likeMovie(token, data) {
  return fetch(`${baseUrl}/movies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => handleResponse(response));
}

export function dislikeMovie(token, id) {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((response) => handleResponse(response));
}

export function register(data) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => handleResponse(response));
}

export function login(data) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => handleResponse(response));
}
