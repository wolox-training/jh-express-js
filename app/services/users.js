const { hashPassword } = require('../helpers/security');

const { User } = require('../models');

exports.registerUser = async ({ firstName, lastName, email, password }) => {
  const existsEmail = await User.findOne({ where: { email } });

  if (existsEmail) {
    throw new Error('The user could not be created the email is already in use please try again.');
  }

  const encryptedPassword = await hashPassword(password);

  await User.create({ firstName, lastName, email, password: encryptedPassword });
};
