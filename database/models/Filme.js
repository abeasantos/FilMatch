module.exports = (sequelize, DataTypes) => {
    const Filme = sequelize.define('filme',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        }, 
        descricao:{
            type:DataTypes.STRING,
            allowNull:false
        },
        avaliacao:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        streaming:{
            type:DataTypes.STRING,
            allowNull:false
        },
        facha_etaria:{
            type:DataTypes.STRING,
            allowNull:false
        },
        genero: {
             type: DataTypes.STRING,
             allowNull: true
}
    },{
        tableName:'filme',
        timestamps:false
    })

    return Filme
} 

