/* import logger from './core/logger';
import secrets from './core/secrets';
import server from './server'; */

import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';

import Query = require("./resolvers/Query");
import Mutation = require("./resolvers/Mutation");
import User = require("./resolvers/User");
import Link = require("./resolvers/Link");
import Subscription = require("./resolvers/Subscription");
import Vote = require("./resolvers/Vote");

/* async function main() {
  await server.listen({ port: secrets.PORT, host: secrets.HOST });
  logger.info(`Running at http://${secrets.HOST}:${secrets.PORT}`);
}

process.on('unhandledRejection', (err) => {
  if (err) {
    logger.error(err);
  }
  process.exit(1);
});

main(); */

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: (request: any) => {
        return {
            ...request,
            prisma,
        }
    },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))