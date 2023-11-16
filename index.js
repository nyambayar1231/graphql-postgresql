import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './src/schema.js';
import { resolvers } from './src/resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

// const port = 9090;
// const server = new ApolloServer({ resolvers, typeDefs });
// server.listen({ port }, () =>
//   console.log(`Server runs at: http://localhost:${port}`)
// );
