'use strict';

const fifthScreen = (update)=>{
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12 center-align"></div>');
  const good = $('<div class="col s8 offset-s2"><img class="responsive-img" src="img/icons/check.png" alt="check"></div>');
  const goodMessage = $('<div class="col s12 center-align"><p class="p-good">¡Bien!<br>Ahora puedes usar Yape</div>');

  col.append(good);
  col.append(goodMessage);

  row.append(col);
  container.append(row)

  state.screenYape = sixthScreen;

  return container;
}
