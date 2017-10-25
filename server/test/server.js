import express from 'express';
import http from 'http';
import assert from 'assert';

import '../lib/server.js';

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('/', res => {
      assert.equal(200, "Listening at http://:::3000");
      done();
    });
  });
});