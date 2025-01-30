const { faker } = require('@faker-js/faker');
class ProductService{

  constructor(){
    this.products = [];
    this.generate()
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image : faker.image.url()
      });
    }
  }

  create(){

  }

  find(){

  }

  findOne(){

  }

  update(){

  }

  delete(){

  }

}

module.exports = ProductService;
