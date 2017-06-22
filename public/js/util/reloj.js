'use strict';

let cont;

const clock = (input) => {
  let cont = 22;
  const id = setInterval(frame(input,cont), 2100);
}

const frame = (input,cont)=> {
  cont--;
  input.innerHTML=cont;
  console.log(input.innerHTML);
  if(cont == 0){
    clock();
  }
}
