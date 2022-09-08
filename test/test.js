const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const should = chai.should();
const expect = chai.expect;

const server = require('../index');

describe('Test' , () => {

    it("should return hello world" , (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                if(err){
                    return err;
                }

                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('hello world');
                done();
            })
    });

    it("should return users" , (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                if(err){
                    return err;
                }

                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
    });

    it("this test will fail" , (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                if(err){
                    return err;
                }

                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    });
})