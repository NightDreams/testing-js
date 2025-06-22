const BooksService = require('./books.service.js');

const fakeBooks = [
  { id: '1', name: 'Hunger Games', author: 'George Orwell' },
  { id: '2', name: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: '3', name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

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
    test('should return an list of books', async () => {
      // arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks({});
      // console.log(books);
      // assert
      expect(books.length).toEqual(3);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('should return an list of books', async () => {
      // arrange
      mockGetAll.mockResolvedValue([{
        _id: '1',
        name: 'Hunger Games 2',
        author: 'George Orwell',
      }]);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books[0].name).toEqual('Hunger Games 2');
    });
  });
});
