const graphql = require('graphql');
const AccountType = require('./../types/account.type');
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

const {errorName} = require('./../errorsConfig/errors.config');

const u_accounts = require('./../data/usersaccount');
const u_info = require('./../data/userstable');

const loginQuery = {
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
        let found = _.find(u_accounts, {email: args.email, password: args.password}) || {};
        if (found.id) {
            return _.find(u_info, {email: args.email});
        } else {
            throw new Error(errorName.LOGIN_FAILED);
        }
    }
};

module.exports = loginQuery;