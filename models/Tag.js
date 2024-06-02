const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Tag extends Model {}

// Initialize the Tag model by extending from Sequelize's Model class
Tag.init(
  {
    // Define the id column
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true, 
    },
    // Define the tag_name column
    tag_name: {
      type: DataTypes.STRING, 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true, 
    underscored: true, 
    modelName: 'tag', 
  }
);

module.exports = Tag;
