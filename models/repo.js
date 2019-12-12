"use strict";
module.exports = (sequelize, DataTypes) => {
	const Repo = sequelize.define("Repo", {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		userEmail: DataTypes.STRING
	}, {});
	Repo.associate = function(models) {
		// associations can be defined here
	};
	return Repo;
};