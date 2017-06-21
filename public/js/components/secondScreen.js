'use strict';

const secondScreen = () =>{
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row secondScreen"></div>');
  const col = $('<div class="col s12"></div>');

  const img = $('<div class="col s4 offset-s4"><img class="responsive-img" src="img/icons/phone.png" alt="celular"></div>');
  const text = $('<div class="col s11 margin-1r"><h1 class="phone-h1 center-align">Para comenzar validemos tu número</h1><p class="phone-p">Resibirás un SMS con un código de validación</p></div>');
  const form = $('<div class="col s12 center-align"></div>');
  const imgIcon = $('<div class="col s3 icon-phone"><img class="responsive-img" src="img/icons/phoneandnumber.png" alt="celular"></div>');
  const inputPhone = $('<input id="number" class="col s12 input-phone center-align" name="Phone" value="" minlength="9" maxlength="9"  pattern="[0-9]">');
  const check = $('<input type="checkbox" class="col s2 filled-in" id="filled-in-box"/><label for="filled-in-box">Acepto los <a href="#">Terminos y condiciones</a></label>');
  const boton = $('<button class="col s4 offset-s4 btn btn-secondScreen" type="button" name="button" disabled ="true">CONTINUAR</button>');

  col.append(img);
  col.append(text);
  col.append(form);
  form.append(imgIcon);
  form.append(inputPhone);
  form.append(check);
  form.append(boton);

  row.append(col);
  container.append(row)
  let phone;
  let click = 0;
  check.click(_=>{ click++;});
  inputPhone.on('keyup',(e) => {
    let numberPhone = inputPhone.val();
    if( numberPhone != '' & (/^\9\d{8}$/.test(numberPhone) == true) & numberPhone != 987654321 & numberPhone.length ==9 ) {
      if (click > 0) {
      let active =  boton[0].removeAttribute("disabled");
        phone = numberPhone;
      }
    }
    
});
  return container;
}
