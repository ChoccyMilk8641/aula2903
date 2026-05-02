const connection = require('.connection');
const {DataTypes} = require('sequelize');

const UserModel = connection.define("User", {
    id: {
        DataTypes.INTEGER,
        primaryKey: true
    },
    username: DataTypes.STRING(30),
    email: DataTypes.STRING(30),
     bio: {
        type: DataTypes.TEXT,
        allowNull:true
     }
});

UserModel.sync();

module.exports = UserModel;