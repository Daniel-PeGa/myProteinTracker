const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Protein extends Model {}

Model.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        protein_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        protein_content: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'protein',
    }
);

module.exports = Protein;