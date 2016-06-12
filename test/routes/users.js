const jwt = require('jwt-simple');

describe('Routes: Tasks', function() {
    const Users = app.db.models.Users;
    const jwtSecret = app.libs.config.jwtSecret;
    let token;
    beforeEach(function(done) {
        Users
            .destroy({where: {}})
            .then(function() {
                return Users.create({
                    name: 'John',
                    email: 'john@mail.net',
                    password: '12345'
                })
                .then(function(user) {
                    token = jwt.encode({id: user.id}, jwtSecret);
                    done();
                });
            });
    });
    describe('status 200', function() {
        it('returns an authenticated user', function(done) {
            request.get('/user')
                .set('Authorization', `JWT ${token}`)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.name).to.eql('John');
                    expect(res.body.email).to.eql('john@mail.net');
                    done(err);
                });
        });
    });
    describe('DELETE /user', function() {
        describe('status 200', function() {
            it('deletes an authenticated user', function(done) {
                request.delete('/user')
                    .set('Authorization', `JWT ${token}`)
                    .expect(204)
                    .end(function(err, res) {
                        done(err);
                    });
            });
        });
    });
    describe('POST /users', function() {
        describe('status 200', function() {
            it('creates a new user', function(done) {
                request.post('/users')
                    .send({
                        name: 'Mary',
                        email: 'mary@mail.net',
                        password: '12345'
                    })
                    .expect(200)
                    .end(function(err, res) {
                        expect(res.body.name).to.eql('Mary');
                        expect(res.body.email).to.eql('mary@mail.net');
                        done(err);
                    });
            });
        });
    });
});