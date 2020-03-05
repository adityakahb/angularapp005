const express = require('express');
const graphqlHTTP = require('express-graphql');
const compression = require('compression');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

app.use(cors());
app.use(compression());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('====Started SERVER on port 4000====');
});
