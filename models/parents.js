module.exports=function(sequelize, DataTypes){
  var Parent=sequelize.define("Parent",{
    first_name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
          len: [2],
          notEmpty: true
      }
    },
    last_name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[2],
        notEmpty:true
      }
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[2],
        notEmpty:true
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[2],
        notEmpty:true
      }
    }
  });
  return Parent;
}
