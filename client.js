const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  // conn.setEncoding('utf8'); 
  // client.on('data', (data) => {
  //   console.log('Message from client: ', data)
  // });

  const connectSuccess = function ()  {
    console.log("Successfully connected to game server");

  
  }
  

  conn.on('data', (data) => {
    console.log('Server says: ', data);
    // console.log("Successfully connected to game server");
    connectSuccess();
  });

  conn.write('Name: KAL', () => {
    console.log("sent name");
  });

  // const move = function() {
  // conn.write('Move: up', () => {
  //   console.log("test")
  // });
  // }

  // setTimeout(move, 50)
  // setTimeout(move, 100)
  // setTimeout(move, 150)
  // setTimeout(move, 200)
  // setInterval(move, 50);


  return conn;
}

module.exports = connect;