console.log('Environment: ' + process.env.NODE_ENV);

describe('Routes: Index', function() {
    describe('GET /status', function() {
        it('returns the API status', function (done) {
            request.get('/status')
                .expect(200)
                .end(function (err, res) {
                    const expected = { status: 'Node Project API' };
                    expect(res.body).to.eql(expected);
                    done(err);
                });
        });
    });
});