const { faker } = require('@faker-js/faker');
// or, if desiring a different locale
// const { fakerDE: faker } = require('@faker-js/faker');

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.

const generataeOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];

  for (let index = 0; index < limit; index += 1) {
    fakeBooks.push(generataeOneBook());
  }

  return [...fakeBooks];
};

module.exports = { generataeOneBook, generateManyBooks };
