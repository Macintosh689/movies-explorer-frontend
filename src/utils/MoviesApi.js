import { handleResponse, moviesUrl } from "./Constants";

export function getAllMovies() {
  return fetch(`${moviesUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((response) => handleResponse(response));
}
