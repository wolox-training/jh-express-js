const isValidDomainEmail = email => {
  const expression = new RegExp(/wolox.com.ar|wolox.co/);

  if (!expression.test(email)) {
    throw new Error('The email domain must be (wolox.co or wolox.com.ar) please check and try again.');
  }
};

const isValidPassword = password => {
  const expression = new RegExp(/^[A-Za-z0-9]+$/);

  if (!(password.length >= 8 && expression.test(password))) {
    throw new Error(
      'The password does not meet the criteria of being a minimum of 8 characters or alphanumeric.'
    );
  }
};

exports.registerUser = (req, res, next) => {
  const { email, password } = req.body;

  try {
    isValidDomainEmail(email);
    isValidPassword(password);

    next();
  } catch (error) {
    res.status(400).json({
      hasErrors: true,
      message: error.message
    });
  }
};
