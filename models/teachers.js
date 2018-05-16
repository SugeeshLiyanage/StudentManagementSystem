module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define("Teacher", {

      name: DataTypes.STRING
    });
  
    Teacher.associate = function(models) {
      // Associating Author with Posts
      Teacher.hasMany(models.Student, {
      });
    };
  
    return Teacher;
  };
  