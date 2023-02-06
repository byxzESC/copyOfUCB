const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class character extends Model {}

character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        routeName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        forcePoints: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
    }
)

module.exports = character;