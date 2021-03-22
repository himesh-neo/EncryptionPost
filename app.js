let express = require('express');
let http = require('http');
let cookieParser = require('cookie-parser');
let app = express();

app.use(express.raw({type: 'application/octet-stream'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  console.log('Middleware called')
  console.log(" body ", req.body)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/encryptTest', (req, res) => {
  res.send(req.body);
});

var port = process.env.PORT || '3000'
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on :', port);
}
