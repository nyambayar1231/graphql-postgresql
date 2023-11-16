// node-prisma/src/schema.js

// const { gql } = require('apollo-server');
import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    category: Category
    detail: Detail
  }

  type Category {
    id: ID!
    name: String!
    isActive: Boolean
  }

  type Detail {
    id: ID!
    text: String!
  }

  """
  ####**Get All Posts**
  Fetch all posts and with category and details.
  """
  type Query {
    getAllPosts: [Post]
  }

  input postCategoryInput {
    name: String
    isActive: Boolean
  }

  input postDetailInput {
    text: String
  }

  input postInput {
    title: String
    category: postCategoryInput
    detail: postDetailInput
  }

  """
  ####**Create / Update Post**
  """
  type Mutation {
    """
    ####**Create Post**
    Create post by providing Post title, Category Name (If you provide an existing category name
    it will be used, otherwise a new category will be created) and Post Detail.
    """
    createPost(post: postInput): Post
    """
    ####**Update Post**
    Update post by providing Post title, Category Name (If you provide an existing category name
    it will be used, otherwise a new category will be created) and Post Detail.
    """
    updatePost(id: ID, post: postInput): Post
  }
`;
// module.exports = {
//   typeDefs,
// };
