module.exports=function(sequelize, DataTypes){
  var Teacher=sequelize.define('Teacher', {
    last_name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len[1],
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
  })
}
