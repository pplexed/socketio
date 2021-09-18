const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);



app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('/', (req, res) => {
  res.send('hello world');
});

io.on('connection', socket => {
  console.log('connection made!: ', socket.id);

  socket.on('message',payload => {
      console.log('Message received on server: ', payload)
      io.emit('message',payload)
  })
});




// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`)
// });

httpServer.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});