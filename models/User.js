const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Challenge);
      }
    },
    instanceMethods: {
      comparePassword: function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.getDataValue('password'), function(err, isMatch) {
          if (err) return cb(err);
          cb(null, isMatch);
        });
      }
    }
  });
  return User;
};