const logger = require('../logger');

const { mapToUserModel } = require('../mappers/users');

const { registerUser } = require('../services/users');

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = mapToUserModel(req.body);

  try {
    await registerUser({ firstName, lastName, email, password });

    const message = `The user '${firstName} ${lastName}' was created.`;

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
