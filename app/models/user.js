module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: { field: 'first_name', type: DataTypes.STRING, allowNull: false },
      lastName: { field: 'last_name', type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false }
    },
    {
      timestamps: false,
      tableName: 'users'
    }
  );
  return User;
};
