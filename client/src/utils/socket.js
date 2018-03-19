// utils/socket.js

import io from 'socket.io-client'

export default class SocketSingleton {

  static instance

  constructor() {
    if (this.instance) {
      return this.instance
    } else {
      this.instance = io('http://localhost:3001')
    }
  }

}
