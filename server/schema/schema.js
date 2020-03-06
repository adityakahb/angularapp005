const graphql = require('graphql');
const {
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} = graphql;
const LoginQuery = require('./../queries/login.query');
// const Book = require('./../models/book');
// const Author = require('./../models/author');


// {"_id":{"$oid":"5e528aa3f7182843107fb4be"},"name":"Author1","age":{"$numberInt":"40"},"__v":{"$numberInt":"0"}}
// {"_id":{"$oid":"5e528b2cf7182843107fb4bf"},"name":"Author2","age":{"$numberInt":"50"},"__v":{"$numberInt":"0"}}
// {"_id":{"$oid":"5e528b33f7182843107fb4c0"},"name":"Author3","age":{"$numberInt":"60"},"__v":{"$numberInt":"0"}}

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        login: LoginQuery
    })
});
/*
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addAuthor: {
            type: AuthorType,
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                age: {
                    type: new GraphQLNonNull(GraphQLInt)
                }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save()
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                genre: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                authorId: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save()
            }
        }
    })
});
*/
module.exports = new GraphQLSchema({
    query: RootQuery,
    // mutation: Mutation
});