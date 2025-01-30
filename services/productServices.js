class ProductService{

  constructor(){
    this.products = [];
  }

  generate(){
    const limit = size || 10;
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
