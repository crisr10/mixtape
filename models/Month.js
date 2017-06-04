module.exports = function (sequelize, DataTypes) {
    let Month = sequelize.define("Month", {
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
                Month.belongsTo(models.User);
            }
        }
    });
    return Month;
};