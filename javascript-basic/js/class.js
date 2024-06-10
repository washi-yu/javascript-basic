class Product {
  constructor(name,price,category){
   this.name = name;
   this.price = price;
   this.category = category;
  }

  describe(){
    console.log('この商品は'+this.name+'です');
  }
}

const shampoo = new Product('シャンプー',500,'生活雑貨');
const coffee = new Product('コーヒー',1500,'飲料');

console.log(shampoo);
console.log(coffee);

shampoo.describe()

const user ={
  name:'サムライ',
  gender:'男',
  age:'44',

  greed:()=>{
    console.log('こんにちは');
  }
}

console.log(user.name);
user.greed();