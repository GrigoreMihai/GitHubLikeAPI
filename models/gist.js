'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gist = sequelize.define('Gist', {
    fileName: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.STRING,
    secret: DataTypes.BOOLEAN
  }, {});
  Gist.associate = function(models) {
    // associations can be defined here
  };
  return Gist;
};