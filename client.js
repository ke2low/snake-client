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

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = client;