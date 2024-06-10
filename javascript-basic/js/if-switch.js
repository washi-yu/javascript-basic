let num = Math.floor(Math.random()*20);

console.log(num);

if(num===4){
  console.log('大当たりです');
}else if(num>4&&num<10){
  console.log('あたりです');
}
 else{
  console.log('ハズレです');
}

num = Math.floor(Math.random()*5);
console.log(num);

switch(num){
  case 1:
  console.log('数字は１です');
  break;

  case 2:
  console.log('数字は２です');
  break;

    default:
      console.log('それ以外です');

}