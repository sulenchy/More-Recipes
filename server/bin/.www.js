// This is the application entry
import http from 'http';
import app from '../app';


const port = parseInt(process.env.PORT, 10) || 6000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);