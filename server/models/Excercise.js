const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Excercise extends Model {}

Excercise.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        excercise_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight_used: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
        excercise_repetitions: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        repetitions_repetitions: { 
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'excercise',
    }
);

module.exports = Excercise;