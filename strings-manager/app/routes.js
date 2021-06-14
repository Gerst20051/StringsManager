module.exports = app => {
  app.get('/', (req, res) => {
    res.send('WELCOME TO THE STRINGS MANAGER REST API');
  });

  app.get('/request', (req, res) => {
    res.send({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      req: {
        ...req,
        res: null,
      },
    });
  });

  app.get('/swagger', (req, res) => {
    res.send(require('../swagger.json'));
  });
};
