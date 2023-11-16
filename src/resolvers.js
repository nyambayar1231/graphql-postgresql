// node-prisma/src/resolvers.js

// const { prisma } = require('./database.js');
import prisma from './database.js';

const Query = {
  getAllPosts: (parent, args) => {
    return prisma.post.findMany({
      orderBy: [
        {
          id: 'asc',
        },
      ],
      include: {
        category: true,
        detail: true,
      },
    });
  },
};

const Mutation = {
  createPost: (parent, args) => {
    const postArgs = args.post;
    return prisma.post.create({
      data: {
        title: postArgs.title,
        category: {
          connectOrCreate: {
            where: {
              name: postArgs.category.name,
            },
            create: {
              name: postArgs.category.name,
              isActive: postArgs.category.isActive,
            },
          },
        },
        detail: {
          create: {
            text: postArgs.detail.text,
          },
        },
      },
      include: {
        category: true,
        detail: true,
      },
    });
  },
  updatePost: (parent, args) => {
    const postArgs = args.post;
    return prisma.post.update({
      where: { id: Number(args.id) },
      data: {
        title: postArgs.title,
        category: {
          connectOrCreate: {
            where: {
              name: postArgs.category.name,
            },
            create: {
              name: postArgs.category.name,
              isActive: postArgs.category.isActive,
            },
          },
        },
        detail: {
          update: {
            text: postArgs.detail.text,
          },
        },
      },
      include: {
        category: true,
        detail: true,
      },
    });
  },
};

export const resolvers = { Query, Mutation };

// module.exports = {
//   resolvers,
// };
