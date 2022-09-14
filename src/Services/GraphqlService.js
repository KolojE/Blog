import { request, gql } from "graphql-request"

export default function GraphqlService() {


  return {
    getRecentPosts: function (limit) {
      const query = gql
        `query MyQuery {
          posts(orderBy: updatedAt_DESC,first: ${parseInt(limit)}) {
            coverImage {
              url
            }
            slug
            excerpt
            updatedAt
            title
            id
          }
        }
        
          
          `
      const resultPromise = request(process.env.REACT_APP_HYGRAPH_API_ENDPOINT, query);
      //return promise

      return resultPromise;
    },
    getPostByCategory: function (Category) {

    }
    ,
    getPost: function (PostID) {
      const query = gql`
      query MyQuery {
        post(where: {id: "${PostID}"}) {
          id
          content {
            html
            markdown
          }
          createdAt
          updatedAt
          title
          slug
          excerpt
          coverImage {
            url
          }
        }
      }
      
      
      
      `

      const resultPromise = request(process.env.REACT_APP_HYGRAPH_API_ENDPOINT, query);
      return resultPromise;

    }
  }
}