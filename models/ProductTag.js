const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the ProductTag model by extending the Sequelize Model class
class ProductTag extends Model {}

// Initialize the ProductTag model with column definitions
ProductTag.init(
  {
    // Define the id column
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true,
    },
    // Define the product_id column
    product_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    // Define the tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag', 
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true, 
    underscored: true, 
    modelName: 'product_tag', 
  }
);

module.exports = ProductTag;
