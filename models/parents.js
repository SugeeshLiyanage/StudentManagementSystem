module.exports = function(sequelize, DataTypes) {
    var Parent = sequelize.define("Parent", {
        id: {
            type: DataTypes.INTEGER(4).ZEROFILL.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        // first name
        first: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2],
                notEmpty: true
            }
        },
        // Last name
        last: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

      


        return Parent;
};
