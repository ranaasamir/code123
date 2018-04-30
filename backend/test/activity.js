process.env.NODE_ENV = 'test';

let base = undefined;
if (!process.env.PWD) {
     base = process.cwd();
  }else{
     base = process.env.PWD;
  }
const
    mongoose = require('mongoose'),
    models = require(base + '\\api\\models\\Activities'),
    Activities = mongoose.model('Activities'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require(base + '/app');
chai.use(chaiHttp);

UserAuthorization = null,
ListAuthorization = null;

describe("Testing Posting Activities Functions", function () {
  before(function (done) {
    mongoose.connect('mongodb://localhost:27017/nawwar', function () {
      console.log('Connected to nawwar');
      done();
    });
  });
  describe("Adding Activity", function () {
    it("Should add a new Activity", function (done) {
      var activity = {
        'title': 'Swimming Activity',
        'description': ''
      }
      chai.request(server)
      .post('/api/auth/register')
      .send(activity)
      .end(function (err, res) {
        res.status.should.be.eql(201);
        res.body.should.have.property('msg');
        res.body.msg.should.be.eql("Posting successful.");
        res.body.data.should.have.property('title');
        res.body.data.title.should.equal('Swimming Activity');
        done();
      })

    });
    it("Should not add an already existing Activity", function (done) {
      var activity = {
        'title': 'Swimming Activity',
        'description': 'anything'
      }
      chai.request(server)
      .post('/api/auth/register')
      .send(activity)
      .end(function (err, res) {
        res.status.should.be.eql(422);
        res.body.should.have.property('msg');
        res.body.msg.should.be.eql("An activity with this title already exists.");
        done();
      })
    });
  });
  after(function (done) {
    mongoose.disconnect(done);
  });
});

describe("Testing Registering Activities Functions", function () {

    before(function (done) {
        mongoose.connect('mongodb://localhost:27017/nawwar', function () {
            console.log('Connected to nawwar');
            done();
        });
    });

    describe("Register New Child", function () {
        it("Should Register a new Child", function (done) {
            var child = {
                'childId': '37-3658',
                'childName': 'Farah',
                'parentName': 'Ahmed',
                'age': '20',
                'mobile': '01118638000',
                'class': 'T18'
            }
            chai.request(server)
                .post('/api/auth/register')
                .send(child)
                .end(function (err, res) {
                    res.status.should.be.eql(201);
                    res.body.should.have.property('msg');
                    res.body.msg.should.be.eql("Registration successful.");
                    res.body.data.should.have.property('childId');
                    res.body.data.childName.should.equal('37-3658');
                    done();
                })

        });
        it("Should not Register an already existing Child", function (done) {
            var child = {
                'childId': '37-3658',
                'childName': 'Farah',
                'parentName': 'Ahmed',
                'age': '20',
                'mobile': '01118638000',
                'class': 'T18'
            }
            chai.request(server)
                .post('/api/auth/register')
                .send(child)
                .end(function (err, res) {
                    res.status.should.be.eql(422);
                    res.body.should.have.property('msg');
                    res.body.msg.should.be.eql("A child with this id already exists.");
                    done();
                })

        });
    });
    after(function (done) {
        mongoose.disconnect(done);
    });
});

describe("Testing Showing Interest Functions", function () {
  before(function (done) {
    mongoose.connect('mongodb://localhost:27017/nawwar', function () {
      console.log('Connected to nawwar');
      done();
    });
  });
  describe("Showing Interest", function () {
    it("Should show an Interest", function (done) {
      var Interest = {
        'interest': true
      }
      chai.request(server)
      .post('/api/auth/register')
      .send(Interest)
      .end(function (err, res) {
        res.status.should.be.eql(201);
        res.body.should.have.property('msg');
        res.body.msg.should.be.eql("Interest shown.");
        res.body.data.should.have.property('interest');
        res.body.data.interest.should.equal(true);
        done();
      })
    });
  });
  after(function (done) {
    mongoose.disconnect(done);
  });
});

describe("Testing adding Reviews Functions", function () {
  before(function (done) {
    mongoose.connect('mongodb://localhost:27017/nawwar', function () {
      console.log('Connected to nawwar');
      done();
    });
  });
  describe("Adding Review", function () {
    it("Should add a Review", function (done) {
      var Review = {
        'review': 'anything'
      }
      chai.request(server)
      .post('/api/auth/register')
      .send(activity)
      .end(function (err, res) {
        res.status.should.be.eql(201);
        res.body.should.have.property('msg');
        res.body.msg.should.be.eql("Review added.");
        res.body.data.should.have.property('review');
        res.body.data.review.should.equal('anything');
        done();
      })
    });
  });
  after(function (done) {
    mongoose.disconnect(done);
  });
});
