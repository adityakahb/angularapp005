const express = require('express');
const graphqlHTTP = require('express-graphql');
const compression = require('compression');
const cors = require('cors');

const {formatError, errorName} = require('./errorFormat/errors.format');
const schema = require('./schema/schema');

const app = express();

app.use(cors());
app.use(compression());

app.use('/graphql', (req, res) => {
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
      context: { errorName },
      formatError: (err) => {
        return formatError.getError(err);
      }
    })(req, res);
});

app.listen(4000, () => {
    console.log('====Started SERVER on port 4000====');
});
