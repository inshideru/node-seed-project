module.exports = app => {
    const UserData = app.db.models.UserData;

    app.route('/user_data')
        .get((req, res) => {
            UserData
                .findAll({})
                .then(result => {
                    res.json(result);
                })
                .catch(error => {
                    res.json(error);
                });
        })
        .post((req, res) => {

            UserData
                .create(req.body)
                .then(result => {
                    res.json(result);
                })
                .catch(error => {
                    res.status(412).json(error);
                })
        });

    app.get('/user_data/address/uf/:uf', (req, res) => {

        UserData.find({
            where: {
                data: {
                    address: {
                        uf: req.params.uf
                    }
                }
            }
        })
            .then(result => {
                if (!result) {
                    res.sendStatus(404);
                } else {
                    res.json(result.data.address);
                }
            })
            .catch(error => {
                res.json(error);
            })
    })
}