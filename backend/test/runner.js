process.env.NODE_ENV = 'test';
let mongoose = require("mongoose")
let UserModel = require('../api/models/User');
let User = mongoose.model('User');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let randomstring = require("randomstring");
chai.use(chaiHttp);
//Our parent block
describe('Registering new user', function() {
   User.remove({});
   let randUsername = randomstring.generate(12);
   let randPassword = randomstring.generate(18);
   let randDomain = randomstring.generate(6);
   let randEmail = randUsername+"@"+randDomain+".com";
   it("Should Signup a new User", function (done) {
            var newUser = {
              username: randUsername,
              password: randPassword,
              firstname: 'Seif',
              middlename: 'Hatem',
              lastname: 'Mohamed',
              phone: '01100001137',
              address: 'abdo',
              city: 'Cairo',
              eduback: 'Undergrad',
              biography: 'blablabla',
              birthdate: '1997/10/25',
              gender: 'M',
              interests: 'coding',
              email: randEmail
            }
            chai.request(server)
                .post('/api/signup')
                .send(newUser)
                .end(function (err, res) {
                  //console.log(res);
                    res.status.should.be.eql(201);
                    res.body.should.have.property('msg');
                    res.body.msg.should.be.eql("User was created successfully, please check your email.");
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('email');
                    res.body.data.should.have.property('username');
                    res.body.data.email.should.be.eql(randEmail);
                    res.body.data.username.should.be.eql(randUsername);
                    done();
                })

        });

        it("Should not signup new user with duplicate email", function (done) {
                 var newUser = {
                   username: 'test22',
                   password: 'Test123',
                   firstname: 'Seif',
                   middlename: 'Hatem',
                   lastname: 'Mohamed',
                   phone: '01100001137',
                   address: 'abdo',
                   city: 'Cairo',
                   eduback: 'Undergrad',
                   biography: 'blablabla',
                   birthdate: '1997/10/25',
                   gender: 'M',
                   interests: 'coding',
                   email: randEmail
                 }
                 chai.request(server)
                     .post('/api/signup')
                     .send(newUser)
                     .end(function (err, res) {
                        //console.log(res.body.err.errmsg);
                         res.status.should.be.eql(500);
                         res.body.should.have.property('err');
                         res.body.err.should.have.property('errmsg');
                         res.body.err.errmsg.should.contains('duplicate key error');
                         done();
                     })

             });

             it("Should not signup new user with duplicate username", function (done) {
                      var newUser = {
                        username: randUsername,
                        password: 'Test123',
                        firstname: 'Seif',
                        middlename: 'Hatem',
                        lastname: 'Mohamed',
                        phone: '01100001137',
                        address: 'abdo',
                        city: 'Cairo',
                        eduback: 'Undergrad',
                        biography: 'blablabla',
                        birthdate: '1997/10/25',
                        gender: 'M',
                        interests: 'coding',
                        email: 'test2@test.com'
                      }
                      chai.request(server)
                          .post('/api/signup')
                          .send(newUser)
                          .end(function (err, res) {
                             //console.log(res.body.err.errmsg);
                              res.status.should.be.eql(500);
                              res.body.should.have.property('err');
                              res.body.err.should.have.property('errmsg');
                              res.body.err.errmsg.should.contains('duplicate key error');
                              done();
                          })

                  });

                  it("Should login with valid credentials", function (done) {
                           var credentials = {
                             username: randUsername,
                             password: randPassword
                           }
                           chai.request(server)
                               .post('/api/login')
                               .send(credentials)
                               .end(function (err, res) {
                                  //console.log(res.body.err.errmsg);
                                   res.status.should.be.eql(200);
                                   res.body.should.have.property('msg');
                                   res.body.msg.should.be.eql("Valid username & password");
                                   done();
                               })

                       });

                       it("Should not login with invalid credentials", function (done) {
                                var credentials = {
                                  username: randUsername,
                                  password: "ssss"
                                }
                                chai.request(server)
                                    .post('/api/login')
                                    .send(credentials)
                                    .end(function (err, res) {
                                       //console.log(res.body.err.errmsg);
                                        res.status.should.be.eql(403);
                                        res.body.should.have.property('msg');
                                        res.body.msg.should.be.eql("Invalid username or password");
                                        done();
                                    })

                            });

                            it("usertype should be returned after a successful login", function (done) {
                                     var credentials = {
                                       username: randUsername,
                                       password: randPassword
                                     }
                                     chai.request(server)
                                         .post('/api/login')
                                         .send(credentials)
                                         .end(function (err, res) {
                                            //console.log(res.body.err.errmsg);
                                             res.status.should.be.eql(200);
                                             res.body.should.have.property('usertype');
                                             res.body.usertype.should.be.eql("User");
                                             done();

                            })
                        });
        after(function (done) {
               User.remove({}, function (err) {
                   if (err) {
                       console.log(err);
                   }
               });
              //mongoose.disconnect(done);
              done();
             });

});
describe('Registering new Parent', function() {
   User.remove({});
   let randUsername = randomstring.generate(12);
   let randPassword = randomstring.generate(18);
   let randDomain = randomstring.generate(6);
   let randEmail = randUsername+"@"+randDomain+".com";
   it("Should Signup a new User", function (done) {
            var newUser = {
              username: randUsername,
              password: randPassword,
              firstname: 'Seif',
              middlename: 'Hatem',
              lastname: 'Mohamed',
              phone: '01100001137',
              address: 'abdo',
              city: 'Cairo',
              eduback: 'Undergrad',
              biography: 'blablabla',
              birthdate: '1997/10/25',
              gender: 'M',
              interests: 'coding',
              email: randEmail,
              usertype: 'Parent'

            }
            chai.request(server)
                .post('/api/signup')
                .send(newUser)
                .end(function (err, res) {
                  //console.log(res);
                    res.status.should.be.eql(201);
                    res.body.should.have.property('msg');
                    res.body.msg.should.be.eql("User was created successfully, please check your email.");
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('email');
                    res.body.data.should.have.property('username');
                    res.body.data.should.have.property('usertype');
                    res.body.data.email.should.be.eql(randEmail);
                    res.body.data.username.should.be.eql(randUsername);
                    res.body.data.usertype.should.be.eql('Parent');
                    done();
                })

        });
        it("usertype should be returned after a successful login", function (done) {
                 var credentials = {
                   username: randUsername,
                   password: randPassword
                 }
                 chai.request(server)
                     .post('/api/login')
                     .send(credentials)
                     .end(function (err, res) {
                        //console.log(res.body.err.errmsg);
                         res.status.should.be.eql(200);
                         res.body.should.have.property('usertype');
                         res.body.usertype.should.be.eql("Parent");
                         done();
                     })

             });


after(function (done) {
User.remove({}, function (err) {
if (err) {
   console.log(err);
}
});
mongoose.disconnect(done);
//done();
});
});
