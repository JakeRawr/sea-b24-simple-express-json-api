'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = require('chai').expect;
var app = require('../server.js');

describe('Simple JSON API', function() {
  it('should send the local time', function () {
    var date = new Date();
    var time = date.toString().split(' ')[4];
    chai.request(app)
      .get('/date')
      .end( function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.time).to.eql(time);
      });
  });

  it('should greet someone', function () {
    var name = 'Jake';
    chai.request(app)
      .get('/msg/' + name)
      .end( function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body.msg).to.eql('Hello ' + name);
      });
  });
});

