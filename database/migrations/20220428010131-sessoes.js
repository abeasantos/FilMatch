module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('sessoes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      dataHorario: {
        type:Sequelize.DATE,
        allowNull: false
      },
      filmes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "filmes",
            key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
    }
    })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('sessoes');
  }
}