const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  response = {
    'mission_status': 'success',
    'message': 'You are an OpenShift superstar!'
  }
  res.end(JSON.stringify(response));
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
