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

const _ = require('lodash');
// const Book = require('./../models/book');
// const Author = require('./../models/author');

const u_accounts = require('./../data/usersaccount');
const u_info = require('./../data/userstable');

// {"_id":{"$oid":"5e528aa3f7182843107fb4be"},"name":"Author1","age":{"$numberInt":"40"},"__v":{"$numberInt":"0"}}
// {"_id":{"$oid":"5e528b2cf7182843107fb4bf"},"name":"Author2","age":{"$numberInt":"50"},"__v":{"$numberInt":"0"}}
// {"_id":{"$oid":"5e528b33f7182843107fb4c0"},"name":"Author3","age":{"$numberInt":"60"},"__v":{"$numberInt":"0"}}
let books = [
    { name: 'book1', genre: 'fantasy', id: '1', authorId: '1' },
    { name: 'book2', genre: 'fantasy', id: '2', authorId: '2' },
    { name: 'book3', genre: 'sci-fi', id: '3', authorId: '3' },
    { name: 'book4', genre: 'fantasy', id: '4', authorId: '2' },
    { name: 'book5', genre: 'fantasy', id: '5', authorId: '3' },
    { name: 'book6', genre: 'sci-fi', id: '6', authorId: '3' },
];

let authors = [
    { name: 'author1', age: 44, id: '1' },
    { name: 'author2', age: 42, id: '2' },
    { name: 'author3', age: 66, id: '3' }
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, {id: parent.authorId})
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, {authorId: parent.id});
            }
        }
    })
});

const AccountType = new GraphQLObjectType({
    name: 'Account',
    fields: () => ({
        id: { type: GraphQLString },
        firstname: { type: GraphQLString },
        middlename: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        dateofbirth: { type: GraphQLString },
        gender: { type: GraphQLString },
        profilepic: {type: GraphQLString},
        age: {
            type: GraphQLString,
            resolve(parent) {
                let dob = new Date(parent.dateofbirth);
                let ageDifMs = Date.now() - dob.getTime();
                let ageDate = new Date(ageDifMs); // miliseconds from epoch
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        login: {
            type: AccountType,
            args: {
                email: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                password: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve(parent, args) {
                let found = _.find(u_accounts, { email: args.email, password: args.password}) || {};
                console.log('=========found', found);
                if (found.id) {
                    return _.find(u_info, { email: args.email });
                } else {
                    return [];
                }
            }
        }
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