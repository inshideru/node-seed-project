const logger = require('./logger.js');

module.exports = {
    database: 'node_seed_project',
    username: 'postgres',
    password: '123456',
    params: {
        dialect: 'postgres',
        storage: 'node.seed.project',
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true
        }
    },
    jwtSecret: 'N0d3-S33d',
    jwtSession: { session: false }
};