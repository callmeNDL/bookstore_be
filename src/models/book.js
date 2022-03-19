'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Book.init({
        masach: DataTypes.STRING,
        tensach: DataTypes.STRING,
        mota: DataTypes.STRING,
        gia: DataTypes.INTEGER,
        hinh: DataTypes.STRING,
        manxb: DataTypes.STRING,
        maloai: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Book',
    });
    return Book;
};