const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();
// .mockReturnValue(fakeBooks);

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(
  () => ({ getAll: mockGetAll, create: () => {} }),
));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    // jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('getBooks(spy): call getBooks and get a book list', async () => {
      // arrange
      const fakebooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakebooks);
      // act
      const books = await service.getBooks({});
      // assert
      console.log('🚀 ~ test ~ books:', books);
      expect(books.length).toEqual(fakebooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return an list of books', async () => {
      // arrange
      const fakebooks = generateManyBooks(5);

      mockGetAll.mockResolvedValue(fakebooks);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books[0].name).toEqual(fakebooks[0].name);
    });
  });
});
