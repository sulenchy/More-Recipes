// This will be our application entry. We'll setup our server here.
import http from 'http';
import app from '../app';


const port = parseInt(process.env.PORT, 10) || 6000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);