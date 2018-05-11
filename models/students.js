module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        id: {
            type: DataTypes.INTEGER,
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
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }); 
        return Student;
};