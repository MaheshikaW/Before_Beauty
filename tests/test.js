var assert = require('chai').assert;
var app = require('../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


describe('Blobs', function() {
    it('should list ALL blobs on /blobs GET',function(done) {
        chai.request(server)
          .get('/')
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });
    });
