const request = require('supertest');
const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;

  beforeAll(() => {
    app = createApp(); // ✅ sin listen
  });

  describe('test for [GET] /', () => {
    test('should return "Hello World!"', () =>
      request(app)
        .get('/')
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual('Hello World!');
        }));
  });
});
