'use strict';

require('should');
const expressRouteFake = require('express-route-fake');
const proxyquire = require('proxyquire').noCallThru();

let req;
let res;

describe('Routes', function() {

  beforeEach(setupExpressRouteFake)

  it('should return a 200 status code', (done) => {
    const path = '/example/route/path';
    const routeAction = expressRouteFake.getRouteAction('get', path);
    routeAction(req, res);
    res.resData.status.should.equal(200);
    done();
  });

});

function setupExpressRouteFake() {
  req = {};

  res = {
    resData: { status: 0, response: '' },
    status: (status) =>  res.resData.status = status,
    send: (response) => res.resData.response = response,
    end: () => {},
  };

  expressRouteFake.reset();

  proxyquire('../routes/example-route', { 'express': expressRouteFake });
}
