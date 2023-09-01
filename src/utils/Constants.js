export const baseUrl = "https://api.moviesmacintosh689.nomoredomains.xyz";
export const moviesUrl = "https://api.nomoreparties.co/beatfilm-movies";

export const laptopWidth = 1280;
export const laptopMax = 3;
export const laptopCount = 12;

export const tabletWidth = 681;
export const tabletMax = 2;
export const tabletCount = 8;

export const mobileMax = 1;
export const mobileCount = 5;



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
