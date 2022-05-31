module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('mensagens', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mensagem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "usuario",
            key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
    },
      topico_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "topicos",
            key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
    }
      })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('mensagens');
  }
}