import { gql } from "@apollo/client";
import { client } from "./apollo";

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(orderBy: createdAt_DESC) {
      id
      title
      slug
      description
      content {
        markdown
      }
      createdAt
      coverimage {
        url
      }
      author {
        name
      }
    }
  }
`;

export interface AllPosts {
  posts: {
    id: string;
    slug: string;
    title: string;
    description: string;
    content?: {
      markdown: string;
    };
    createdAt: string;
    coverimage: {
      url: string;
    };
    author: {
      name: string;
    };
  }[];
}

export async function fetchPosts(): Promise<AllPosts> {
  const { data } = await client.query({
    query: GET_ALL_POSTS,
    fetchPolicy: "no-cache",
  });
  return data;
}
