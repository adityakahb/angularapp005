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

module.exports = AccountType;