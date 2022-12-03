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
      const query = gql
        `query MyQuery {
          posts(where: {category: {categoryName: "${Category}"}}) {
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

    },
    insertMessage:function(msg)
    {
      const query = gql`mutation { createMessage(data:{name:"${msg.firstName} ${msg.lastName}", email:"${msg.email}",message:"${msg.message}"} )
      {
        name
        email
        message
      }}
      `;

      console.log(query)
    
      
      const resultPromise = request(process.env.REACT_APP_HYGRAPH_API_ENDPOINT,query);
      return resultPromise;
      
    },
    getCategories:function(){
      const query = gql
      `query Assets {
        categories {
          id
          categoryName
        }
      }
      `
      const resultPromise = request(process.env.REACT_APP_HYGRAPH_API_ENDPOINT,query);
      return resultPromise;
    }

  }
}