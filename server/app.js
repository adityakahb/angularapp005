const express = require('express');
const graphqlHTTP = require('express-graphql');
const compression = require('compression');
const cors = require('cors');

const {formatError, errorName} = require('./errorsConfig/errors.config');
const schema = require('./schema/schema');

const app = express();

app.use(cors());
app.use(compression());

app.use('/graphql', (req, res) => {
    setTimeout(() => {
      graphqlHTTP({
        schema: schema,
        rootValue: global,
        graphiql: true,
        context: { errorName },
        customFormatErrorFn: (err) => {
          return formatError.getError(err);
        }
      })(req, res);
    }, 2000);
});

app.listen(4000, () => {
    console.log('====Started SERVER on port 4000====');
});
