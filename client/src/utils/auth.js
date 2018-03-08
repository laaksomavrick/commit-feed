// utils / auth.js

export const is_logged_in = () => {
  return !document.cookie.indexOf('sessionIsAlive=1')
}
