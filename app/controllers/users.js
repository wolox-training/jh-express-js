const logger = require('../logger');

const { registerUser } = require('../services/users');

exports.createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    await registerUser({ first_name, last_name, email, password });

    const message = `The user '${first_name} ${last_name}' was created.`;

    logger.info(message);

    res.status(201).json({
      hasErrors: false,
      message
    });
  } catch (error) {
    logger.error(error);

    res.status(422).json({
      hasErrors: true,
      message: error.message
    });
  }
};
