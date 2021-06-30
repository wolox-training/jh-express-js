exports.mapToUserModel = ({ first_name, last_name, email, password }) => ({
  firstName: first_name,
  lastName: last_name,
  email,
  password
});
