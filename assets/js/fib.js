// const utils = {
function fib(num) {
  var x = 0;
  var y = 1;
  var fibarray = [0, 1];

  while (y < num) {
    y += x;
    x = y - x;
    if (y <= num) {
      fibarray.push(y);
    }
  }

  const arrayInstance = [...fibarray]
  const randomNumber = arrayInstance.slice(-2).reduce((acc, cum) => acc + cum)
  const fibResult = {
    fibarray,
    randomNumber
  }
  return fibResult
}




export default fib