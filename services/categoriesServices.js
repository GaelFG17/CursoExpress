const { faker } = require('@faker-js/faker');
class categoriesServices {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate(){
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id : faker.string.uuid(),
        name: faker.commerce.department(),
      });
    }
  }
}
