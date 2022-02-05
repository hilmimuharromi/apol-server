const pollingController = require('../controllers/pollingController');

module.exports = (app) => {
  //# create a note
  app.post('/polling', pollingController.create);

  //#get the list of polling
  app.get('/polling', pollingController.fetch);

  //#get a single note
  app.get('/polling/:id', pollingController.get);

  //#update a note
  app.put('/polling/:id', pollingController.update);

  //addvote
  app.put('/vote/:id', pollingController.vote);

  //#delete a note
  app.delete('/polling/:id', pollingController.delete);
};