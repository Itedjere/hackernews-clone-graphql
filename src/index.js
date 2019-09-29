const { GraphQLServer } = require('graphql-yoga');

// 
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'full stack tutorial for graphql'
}]

// 2
const resolvers = {
    Query: {
        info: () => `this is the API `,
        // 2
        feed: () => links
    },
    // 3
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
}

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

// 4
server.start(() => console.log('Server is running on http://localhost:4000'))