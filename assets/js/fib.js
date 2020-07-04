// const utils = {
 function fib(num) {
  var x = 0;
  var y = 1;
  var fibarray = [0];
  
  while(y < num) {
      y += x;
      x = y - x;
      if(y <= num){
      fibarray.push(y);
      }
  }
  
  return fibarray;
  }




  export default fib