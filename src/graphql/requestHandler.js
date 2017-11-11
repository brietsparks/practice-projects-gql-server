import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';

export const requestHandler = (req) => {

  // console.log(res);

  const authorization = req.headers.authorization;

  // todo: set authorizations
  // projectsAPIConnection.authorization = authorization;

  return {
    schema,
    context: { authorization },
  }
};

export const graphqlRequestHandler = () => graphqlExpress(requestHandler);
export const graphiqlRequestHandler = ({ endpointURL }) => graphiqlExpress({ endpointURL });