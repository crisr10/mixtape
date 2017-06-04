module.exports = function (sequelize, DataTypes) {
    let Day = sequelize.define("Day", {
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
            type: DataTypes.TEXT("tiny"),
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
                Day.belongsTo(models.User);
            }
        }
    });
    return Day;
};