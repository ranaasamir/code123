process.env.NODE_ENV = 'test';
let mongoose = require("mongoose")
let PlanModel = require('../api/models/Plan');
let Plan = mongoose.model('Plan');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let randomstring = require("randomstring");
chai.use(chaiHttp);
PlanName = null;
CreatorName = null
describe ("Testing the Plan functions", function() {

describe("Creating, and editing a new plan", function() {
   Plan.remove({});
   let pname = randomstring.generate(20);
   it("Should create a new plan", function (done) {
            var newPlan = {
              name: pname,
              description: 'hey',
              content: 'good',
              createdBy: 'dohayasser12',
              createdAt: Date.now(),
            }
            chai.request(server)
                .post('/api/plan/createPlan')
                .send(newPlan)
                .end(function (err, res) {
                  //console.log(res);
                    res.status.should.be.eql(201);
                    res.body.should.have.property('msg');
                    res.body.msg.should.be.eql('Your new plan was created successfully.');
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('name');
                    res.body.data.should.have.property('description');
                    res.body.data.should.have.property('content');
                    res.body.data.should.have.property('createdBy');
                    res.body.data.should.have.property('createdAt');
                    res.body.data.name.should.be.eql(pname);
                    res.body.data.description.should.be.eql(pdescription);
                    res.body.data.content.should.be.eql(pcontent);
                    res.body.data.createdBy.should.be.eql(pcreatedBy);
                    res.body.data.createdAt.should.be.eql(Date.now());
                    PlanName = res.body.data.name;
                    CreatorName = res.body.data.createdBy;
                    done();
                })
        });
        it("Should not create a new plan with duplicate name", function (done) {
                 var newPlan = {
                   name: pname,
                   description: 'hello',
                   content: 'Hello guys',
                   createdBy: 'dohayasser12',
                   createdAt: Date.now()
                 }
                 chai.request(server)
                     .post('/api/plan/createPlan')
                     .send(newPlan)
                     .end(function (err, res) {
                        //console.log(res.body.err.errmsg);
                         res.status.should.be.eql(422);
                         res.body.should.have.property('msg');
                         res.body.msg.should.have.property('A plan with this exact name already exists, please choose another name');
                         done();
                     })

             });
             it("Should get all the plans in the collection", function (done) {
                 chai.request(server)
                     .get('/api/plan/getPlans')
                     .end(function (err, res) {
                         res.status.should.be.eql(200);
                         res.body.should.have.property("msg");
                         res.body.msg.should.be.equal("Plans retrieved successfully.");
                         res.body.should.have.property("data");
                         done();
                     })
             });
             it("Should Update a certain Plan which the certain user created", function (done) {
                 var plan = {
                     createdBy: CreatorName,
                     description: "Anything"

                 }
                 chai.request(server)
                     .patch('/api/plan/editPlan' + PlanName)
                     .send(plan)
                     .end(function (err, res) {
                         res.status.should.be.eql(200);
                         res.body.should.have.property("msg");
                         res.body.msg.should.be.equal("Your Plan was updated successfully.");
                         res.body.should.have.property("data");
                         done();
                     })
             });
             it("Should not update a plan if the user is not the creator of plan or plan not found", function (done) {
                 var plan = {
                     createdBy: "doha",
                     description: "Anything",
                     content: "Nothing"

                 }
                 chai.request(server)
                     .patch('/api/plan/editPlan' + PlanName)
                     .send(plan)
                     .end(function (err, res) {
                         res.status.should.be.eql(404);
                         res.body.should.have.property("msg");
                         res.body.msg.should.be.equal("Plan is either not found or you are not the creator of the plan.");
                         res.body.should.have.property("data");
                         res.body.data.
                         done();
                     })
             });
             it("Should not update a plan if the user is not the creator of plan or plan not found", function (done) {
                 var plan = {
                     createdBy: CreatorName,
                     description: "Anything",
                     content: "Nothing"

                 }
                 chai.request(server)
                     .patch('/api/plan/editPlan' + "hey")
                     .send(plan)
                     .end(function (err, res) {
                         res.status.should.be.eql(404);
                         res.body.should.have.property("msg");
                         res.body.msg.should.be.equal("Plan is either not found or you are not the creator of the plan.");
                         res.body.should.have.property("data");
                         res.body.data.
                         done();
                     })
             });

         });
         after(function (done) {
                Plan.remove({}, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
              // mongoose.disconnect(done);
               done();
              });
   });
