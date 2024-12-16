const jsonServer = require('json-server');
const cors = require('cors'); // Ensure you require cors
const server = jsonServer.create();
const router = jsonServer.router('jobs.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // Enable CORS
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
