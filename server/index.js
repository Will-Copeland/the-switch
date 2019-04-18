const { prisma } = require('./generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');

const resolvers = {
  Query: {
    // publishedPosts(root, args, context) {
    //   return context.prisma.posts({ where: { published: true } });
    // },
    // post(root, args, context) {
    //   return context.prisma.post({ id: args.postId });
    // },
    // postsByUser(root, args, context) {
    //   return context.prisma.user({
    //     id: args.userId,
    //   }).posts();
    // },
    getSwitchState(root, args, context) {
      return context.prisma.switchEvents({ last: 1 });
    },
  },
  Mutation: {
  //   createDraft(root, args, context) {
  //     return context.prisma.createPost(
  //       {
  //         title: args.title,
  //         author: {
  //           connect: { id: args.userId },
  //         },
  //       },

  //     );
  //   },
  //   publish(root, args, context) {
  //     return context.prisma.updatePost(
  //       {
  //         where: { id: args.postId },
  //         data: { published: true },
  //       },

  //     );
  //   },
  //   createSwitchEvent(root, args, context) {
  //     return context.prisma.createSwitchEvent(
  //       { name: args.name },
  //     );
  //   },
  },
};


const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});
server.start(() => console.log('Server is running on http://localhost:4000'));
