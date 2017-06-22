'use strict';

const threeScreen = (update) =>{
  console.log(state.phone);

  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row threeScreen"></div>');
  const col = $('<div class="col s12 center-align"></div>');

  const img = $('<div class="col s4 offset-s4"><img class="responsive-img" src="img/icons/message.png" alt="lock"></div>');
  const text = $('<div class="col s11 margin-1r"><h1 class="phone-h1">Ahora ingresa tu código</h1><p class="phone-p">Enviamos un SMS con el código de validación al número <strong>'+ state.phone +'<strong></p></div>');
  const form = $('<div class="col s12 center-align"></div>');
  const imgIcon = $('<div class="col s2 icon-lock"><img class="responsive-img" src="img/icons/message-gray.png" alt="celular"></div>');

  const inputCode = $('<input class="col s12 input-phone" value="" placeholder="- - - - -">');
  const reloj = $('<div class="col s8 right-align phone-p"><div class="col s7">Reintentar en </div><div class="col s3"><img class="responsive-img" src="img/icons/clock.png" alt="reloj"></div></div>');
  const contClock = $('<div clss="col s3"></div>');
  const inputReloj = $('<input id="myBar" class="col s2 clock" name="Phone" value="" readonly>');

  contClock.append(inputReloj);

  col.append(img);
  col.append(text);
  col.append(form);

  form.append(imgIcon);
  form.append(inputCode);
  form.append(reloj)
  reloj.append(contClock);

  row.append(col);
  container.append(row)

  inputCode.on('keyup',(e) => {
    let codeValidate= inputCode.val();
    if( codeValidate == state.code ){
      state.screenYape = fourScreen;
      update();
    }
  });

  // const clock = ()=> {
  //   let elem = inputReloj;
  //   let cont=22;
  //   const frame =() =>{
  //       cont--;
  //       elem.text=cont;
  //       if(cont == 0){
  //         clock();
  //       }
  //   }
  //   let reloj = setInterval(frame, 2100);
  // };
  //
  // clock();
  let n=22;
  const temporizador =()=> {
    console.log(n);
    n--;
    inputReloj.text = n;
    if(n==0){
      timer = setTimeout(temporizador, 1000);
    }
    console.log(n);
  };

const timer = setTimeout( function(){temporizador();}, 1000);


  return container;
};
