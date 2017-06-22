const clock = _ => {
  var elem = $(".clock");
  var cont=22;
  var id = setInterval(frame, 2100);
  const frame = _=> {
  cont--;
  elem.innerHTML=cont;
  if(cont == 0){
  clock();
  }
  }
}
