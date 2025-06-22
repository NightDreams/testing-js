const BooksService = require('./books.service.js');

const fakeBooks = [
  { id: '1', name: 'Hunger Games', author: 'George Orwell' },
  { id: '2', name: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: '3', name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => { },
};

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return an list of books', async () => {
      // arrange
      const books = await service.getBooks({});
      // act
      console.log(books);
      // assert
      expect(books.length).toEqual(3);
    });
    test('should return an list of books', async () => {
      // arrange
      const books = await service.getBooks({});
      // act
      console.log(books);
      // assert
      expect(books[0].name).toEqual('Hunger Games');
    });
  });
});
