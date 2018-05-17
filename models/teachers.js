<<<<<<< HEAD
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
  
=======
module.exports=function(sequelize, DataTypes){
  var Teacher=sequelize.define('Teacher', {
    last_name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[1],
        notEmpty:true
      }
    },

    first_name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[1],
        notEmpty:true
      }

    },

    grade:{
      type:DataTypes.STRING,
      allowNull:true,

    }
  });
  return Teacher;
}
>>>>>>> 7b87db4b864be230e20a4367ba6c86d0e029c924
