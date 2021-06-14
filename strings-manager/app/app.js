const cors = require('cors');
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

const serverlessHandler = serverless(app);

module.exports.handler = async (event, context) => {
  // fix the bug "Cannot GET null" since path is '' instead of '/' when requesting root
  // https://github.com/dougmoscrop/serverless-http/issues/86#issuecomment-849958755
  // https://github.com/dherault/serverless-offline/issues/88#issuecomment-842236436
  event.path = event.path === '' ? '/' : event.path;
  return await serverlessHandler(event, context);
};
