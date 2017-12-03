/* eslint consistent-return:0 */
import 'babel-polyfill';
import './models';


// GraphQL schema that describes possible queries/mutations
import schema from './graphql';

const express = require('express');
const logger = require('./logger');
const mongoose = require('mongoose');
const envConfig = require('./config');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const dbConfig = (isDev ? envConfig.development : envConfig.production).database;
const resolve = require('path').resolve;
const app = express();

// Setup database connection depend on env status
mongoose.connect(`mongodb://${dbConfig.auth ? `${dbConfig.user}:${dbConfig.pwd}` : ''}${dbConfig.host}:${dbConfig.port}/${dbConfig.dbname}`, {
  useMongoClient: true,
});


// GraphQL Http service
const graphqlHTTP = require('express-graphql');


// Integrate graphql endpoint
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: isDev,
  pretty: isDev,
})));

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
