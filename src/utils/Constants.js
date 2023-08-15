export const baseUrl = "https://api.moviesmacintosh689.nomoredomains.xyz";
export const moviesUrl = "https://api.nomoreparties.co/beatfilm-movies";

export function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Произошла ошибка: ${response.status}`);
}

export function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + "ч. " + minutes + "м.";
}
