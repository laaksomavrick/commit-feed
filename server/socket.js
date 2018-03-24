// socket.js
// TODO: better way to organize this?
// TODO: ONLY use sockets for polling logic; ie informing users of new data
//       -> From relevant controllers, broadcast an event (ie { type: NEW_PROJECT, team: 389 }
//       -> this class should listen for those broadcasts and emit updates
//       -> front end should have handlers set up to receive that data, dispatch SET_**** actions
//
//
//       EventEmitter? Redis?
//        
//        Broadcast events to redis to share amongst node instances (?)
//        What if many redis?
//        https://github.com/socketio/socket.io-redis
//
//        Or, presently, just assume one Node server + 1 Redis server for simplicity?
//        Create a singleton class initialized with the IO object, call functions on it from controller?
//        Later, this interface can broadcast to & listen to redis across multiple servers
//        Later, can figure out how that works with clustering ;)

const router = (middleware, io) => {

  io.use((socket, next) => {
    middleware(socket.request, {}, next)
  })


  io.on('connection', socket => {

    //console.log(socket.request.session.passport.user)

    socket.on('hello world', message => {
      console.log("here")
      console.log(message)
    })

    socket.on('api/user/current', (message, cb) => {
      cb(null, socket.request.session.passport.user)
      socket.emit('test')
    })

  })

}

export default router
