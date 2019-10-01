const { GraphQLServer } = require('graphql-yoga');

// 
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'full stack tutorial for graphql'
}]

let idCount = links.length;

// 2
const resolvers = {
    Query: {
        info: () => `this is the API `,
        // 2
        feed: () => links,
        link: (parent, args) => {
            console.log(args);
            return links.find(item => item.id === args.id)
        }
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link);
            return link
        },
        updateLink: (parent, args) => {
            console.log(args);
            // const link = {
            //     id: args.id,
            //     description: args.description,
            //     url: args.url
            // }
            // let links = [ ...links, link ];
            // return link;
        }
    }
}

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

// 4
server.start(() => console.log('Server is running on http://localhost:4000'))