function add(a, b){
  return a + b;
}
add(100,200);

function subtract(a, b){
return a - b;
}


function multiply(a, b){
return a*b;
}

function divide(a, b){
  return a/b;
}

let n = 5
function increment(n){
  return n+=1;
}
increment(n);

let num = 7
function decrement(num){
  return num-=1;
}
decrement(num);


function makeInt(n){
  return Number(n)
}

makeInt(42);

function makeInt(n){
  return parseInt(n, 10)
}

makeInt("42");

function preserveDecimal(n){
  return parseFloat(n)
}
preserveDecimal(2.22)


