const request = require('supertest');
const express = require('express');

const app = require('../app.js');

describe('GET /', function() {
  it('respond 200 ok root', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /api/', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/api/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/status', function() {
  it('respond with status', function(done) {
    request(app)
      .get('/api/status')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/numbers', function() {
  it('respond with numbers in 200', function(done) {
    request(app)
      .get('/api/numbers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/pool', function() {
  it('respond with numbers in 200', function(done) {
    request(app)
      .get('/api/pool')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
