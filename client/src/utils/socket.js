// utils/socket.js

import io from 'socket.io-client'

export default class SocketSingleton {

  static instance

  constructor() {
    if (this.instance) {
      return this.instance
    } else {
      this.instance = this.initialize_socket()
      return this.instance
    }
  }

  // init socket
  // attach event listeners
  // TODO: better way to organize this?
  initialize_socket() {
    const socket = io('http://localhost:3001')
    socket.on('test', (data) => {
      console.log('test')
    })
    return socket
  }

}
