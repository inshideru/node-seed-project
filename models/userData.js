module.exports = (sequelize, DataType) => {
    const UserData = sequelize.define('UserData', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        data: {
            type: DataType.JSON,
            allowNull: false
        }
    },
        {
            classMethods: {
                associate: (models) => {
                    UserData.belongsTo(models.Users);
                }
            },
            freezeTableName: true,
            tableName: 'tb_user_data',
            indexes: [
                {
                    unique: true,
                    fields: ['user_id']
                }
            ]
        });
    return UserData;
};