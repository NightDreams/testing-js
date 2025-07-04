const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('BookService: Test for books ', () => {
  let app = null;
  let server = null;
  let database = null;
  let client = null; // Mantenemos el cliente a nivel de la suite

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {});
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('test(bookService): [integration|mock] GET /api/v1/books', () => {
    test('should return a list of books', async () => {
      //arrange
      const seedData = await database.collection('books').insertMany([
        { title: 'Book 1', author: 'Author 1', year: 2021 },
        { title: 'Book 2', author: 'Author 2', year: 2020 },
      ]);
      console.log('🚀 ~ test e2e bookService ~ seedData:', seedData);

      //act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log("🚀 integration 'books' body:", body);

          //assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
