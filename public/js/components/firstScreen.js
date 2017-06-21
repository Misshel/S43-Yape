'use strict';

const firstScreen = (update) =>{
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row firstScreen"></div>');
  const colCarousel = $('<div class="col s12"></div>');
  const contCarousel = $('<div class="carousel carousel-slider center" data-indicators="true"></div>');

  const item1 = $('<div class="carousel-item  white-text" href="#one!"></div>');
  const img1 = $('<div class="col s8 offset-s2 m6 offset-m3 l4 offset-l4"><img class="responsive-img" src="img/icons/icon-people.png" alt="hombre con guitarra y dos personas felices"></div>');
  const text1 = $('<div class="col s11 margin-1r"><h1 class="carousel-h1">Paga a tus amigos</h1><p class="carousel-p">Paga a quien quieras desde donde quieras, sin usar efectivo</p></div>');

  const item2 = $('<div class="carousel-item  white-text" href="#two!"></div>');
  const img2 = $('<div class="col s8 offset-s2 m6 offset-m3 l4 offset-l4"><img class="responsive-img" src="img/icons/happy-person.png" alt="hombre feliz"></div>');
  const text2 = $('<div class="col s11 margin-1r"><h1 class="carousel-h1">Sin número de cuenta</h1><p class="carousel-p">Elige a quién pagar desde tu lista de contactos</p></div>');

  const item3 = $('<div class="carousel-item  white-text" href="#three!"></div>');
  const img3 = $('<div class="col s8 offset-s2 m6 offset-m3 l4 offset-l4"><img class="responsive-img" src="img/icons/group-people.png" alt="personas felices"></div>');
  const text3 = $('<div class="col s11 margin-1r"><h1 class="carousel-h1">Gratis y Seguro</h1><p class="carousel-p">La transferencia es inmediata y gratuita desde una cuenta a otra</p></div>');

  const button = $('<button class="col s11  btn margin-1r btn-firstScreen" type="button" name="button">Registrarme</button>');

  item1.append(img1);
  item1.append(text1);

  item2.append(img2);
  item2.append(text2);

  item3.append(img3);
  item3.append(text3);

  contCarousel.append(item1);
  contCarousel.append(item2);
  contCarousel.append(item3);

  colCarousel.append(contCarousel);
  colCarousel.append(button);

  row.append(colCarousel);
  container.append(row);

  button.on('click',(e) => {
    e.preventDefault();
    state.secondScreen = secondScreen;
    update();
  });

  return container;
}
