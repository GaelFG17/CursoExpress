const { faker } = require('@faker-js/faker');
class ProductService{

  constructor(){
    this.products = [];
    this.generate()
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id : faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image : faker.image.url(),
        category: faker.commerce.department()
      });
    }
  }

  create(data){
    const newProduct = {
      id : faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }

}

module.exports = ProductService;
