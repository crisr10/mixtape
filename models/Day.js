// Challenge table model
module.exports = function (sequelize, DataTypes) {
    var Day = sequelize.define("Day", {
        date: {
            type: DataTypes.DATEONLY,
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
        albumName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        albumId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        albumArtUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artistName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artistId: {
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
        timestamps: true,
        classMethods: {
            associate: function (models) {
                Day.belongsTo(models.Month);
            }
        }
    });
    return Day;
};