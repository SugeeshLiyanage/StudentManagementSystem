module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        // Student ID: Need to random number generator?
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
            allowNull: false,
            validate: {
                len: [2],
                notEmpty: true
            }
        },
        // Behavior entry
        behavior: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Grade entry
        grade: {
            type: DataTypes.String,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }); 

    Student.associate = function(models) {
        Student.belongsTo(models.Teacher, {
            foreignKey: {
                allowNull: false
            }
        });
    };
        return Student;
};