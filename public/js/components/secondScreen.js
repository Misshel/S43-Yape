'use strict';

const secondScreen = (update) =>{
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row secondScreen"></div>');
  const col = $('<div class="col s12 center-align"></div>');

  const img = $('<div class="col s4 offset-s4"><img class="responsive-img" src="img/icons/phone.png" alt="celular"></div>');
  const text = $('<div class="col s11 margin-1r"><h1 class="phone-h1 center-align">Para comenzar validemos tu número</h1><p class="phone-p">Resibirás un SMS con un código de validación</p></div>');
  const form = $('<div class="col s12"></div>');
  const imgIcon = $('<div class="col s3 m1  icon-phone"><img class="responsive-img" src="img/icons/phoneandnumber.png" alt="celular"></div>');
  const inputPhone = $('<input class="col s12 input-phone center-align" name="Phone" value="" minlength="9" maxlength="9"  pattern="[0-9]">');
  const check = $('<input type="checkbox" class="filled-in" id="filled-in-box"/><label for="filled-in-box">Acepto los <a href="#">Terminos y condiciones</a></label>');
  const boton = $('<button id="button" class="col s4 offset-s4 btn btn-secondScreen disabled" type="button" name="button" >CONTINUAR</button>');

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
  inputPhone.keypress(validateNumber);

  inputPhone.on('keyup',(e) => {
    let numberPhone = inputPhone.val();
    const numExpr=/^\9\d{8}$/;
    if( numberPhone != 987654321 & numberPhone.length ==9 & numExpr.test(numberPhone)) {
      if (check.prop('checked')) {
        phone = numberPhone;
        boton.removeClass("disabled");
      }
    }else {
      boton.addClass("disabled");
    }
  });
  boton.on("click",(e)=>{
    e.preventDefault();
    numPhone(phone,update);
  });
  return container;
}
