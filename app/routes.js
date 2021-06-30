const userController = require('./controllers/users');
const { healthCheck } = require('./controllers/healthCheck');

const { registerUser } = require('./middlewares/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [registerUser], userController.createUser);
};
