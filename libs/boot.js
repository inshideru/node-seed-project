module.exports = app => {
    if (process.env.NODE_ENV !== 'test') {

        app.db.sequelize
            .sync({ force: false })
            .then(() => {
                return app.db.models.Users
                    .findOrCreate({
                        where: {
                            id: 1
                        },
                        defaults: {
                            name: 'John',
                            email: 'john@mail.net',
                            password: '12345'
                        }
                    });
            })
            .then(user => {
                console.log('Usuário criado', user);
            })
            .catch(error => {
                console.log(error);
            })
            .done(() => {

                app.listen(app.get('port'), () => {
                    console.log(`Node Project API - porta ${app.get('port')}`);
                    console.log(`Environment: ${process.env.NODE_ENV}`);
                });

            });

    } else {

        app.db.sequelize.sync().done(() => {
            console.log('Base de teste sincronizada');
        });

    }
};