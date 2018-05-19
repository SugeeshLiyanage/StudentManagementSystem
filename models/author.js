module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    
    // recovery_token: {
    //   type: Sequelize.STRING,
    //   unique: true,
    //   primaryKey: true
    // },
    
    name: { 
      type: DataTypes.STRING
    },

  });

  Author.associate = function(models) {
 
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Author;
};


