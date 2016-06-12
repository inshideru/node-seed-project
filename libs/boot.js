module.exports = app => {
    if (process.env.NODE_ENV !== 'test') {

        app.db.sequelize.sync().done(() => {

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