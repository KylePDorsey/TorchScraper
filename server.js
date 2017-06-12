import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
	res.send('Hello Express');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// Same as line above ^ 
// server.get('/about.html', (req, res) => {
// 	res.send('About Page');
// });

server.listen(config.port, () => {
	console.info('Express listening on port ', config.port);
}); 