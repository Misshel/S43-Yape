'use strict';

const threeScreen = (update) =>{
  console.log(state.phone);
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row threeScreen"></div>');
  const col = $('<div class="col s12 center-align"></div>');

  const img = $('<div class="col s4 offset-s4"><img class="responsive-img" src="img/icons/message.png" alt="lock"></div>');
  const text = $('<div class="col s11 margin-1r"><h1 class="phone-h1">Ahora ingresa tu código</h1><p class="phone-p">Enviamos un SMS con el código de validación al número <strong>'+ state.phone +'<strong></p></div>');
  const form = $('<div class="col s12 center-align"></div>');
  const imgIcon = $('<div class="col s2 icon-lock"><img class="responsive-img" src="img/icons/lock.png" alt="celular"></div>');

  const inputPhone = $('<input id="number" class="col s12 input-phone" name="Phone" value="" minlength="9" maxlength="9"  pattern="[0-9]">');
  const inputReloj = $('<p class="phone-p">Reintentar en <img class="responsive-img" src="img/icons/clock.png" alt="celular"></p><input class="col s3 clock" name="Phone" value="" readonly>');

  col.append(img);
  col.append(text);
  col.append(form);

  form.append(imgIcon);
  form.append(inputPhone);
  form.append(inputReloj);

  row.append(col);
  container.append(row)

  return container;
};
