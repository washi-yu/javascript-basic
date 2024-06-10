const saygoodmorning =()=>{
  console.log('こんにちは');
  console.log('こんにちは');
  console.log('こんにちは');
  console.log('こんにちは');
}


const saygoodevening =()=>{
  console.log('こんばんわ');
  console.log('こんばんわ');
  console.log('こんばんわ');
  console.log('こんばんわ');
}



const test = saygoodmorning();
const test2 = saygoodevening();

console.log(test+test2);


const calculateTotal =(price,shippingfee)=>{

  console.log(price + shippingfee+'円');
}

calculateTotal(1200,800);