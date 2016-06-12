module.exports = {
    database: 'node_seed_project_test',
    username: 'postgres',
    password: '123456',
    params: {
        dialect: 'postgres',
        storage: 'node.seed.project.test',
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: 'N0d3-T3ST',
    jwtSession: { session: false }
};