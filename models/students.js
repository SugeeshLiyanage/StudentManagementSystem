module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
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
        behavior: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
        return Student;
};
