// Challenge table model
module.exports = function(sequelize, DataTypes) {
  var Month = sequelize.define("Month", {
    month: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trackName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trackId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trackUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trackAlbumName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trackAlbumId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trackArtistName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trackArtistId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emotion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.TINY,
      allowNull: true
    },
    editable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    // We're saying that we want our Task to be part of many
    classMethods: {
      associate: function(models) {
        // Challenges should be able to exist without User
        Month.hasMany(models.Day);
        Month.belongsTo(models.User);
      }
    }
  });
  return Month;
};