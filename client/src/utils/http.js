// utils/http.js

export const get = (url) => {
  return fetch(`/api/${url}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin"
  })
}
