import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlRequestHandler, graphiqlRequestHandler } from './graphql/requestHandler';
import { PORT } from './config';

const server = express();
server.use(morgan());
server.use(cors());
server.use(bodyParser.json());
server.use('/graphql', bodyParser.json(), graphqlRequestHandler());
server.use('/graphiql', graphiqlRequestHandler({ endpointURL: '/graphql' }));

server.listen(PORT || 3000, (err) => {
  if (err) throw err;
  console.log('> Ready');
});
