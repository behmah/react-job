import jsonServer from 'json-server';
import path from 'path';  

const server = jsonServer.create();
const router = jsonServer.router(path.resolve('src/jobs.json'));  // Adjust the path if needed
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
