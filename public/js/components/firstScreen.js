'use strict';

const firstScreen = _ =>{
  const container = $('<div class="cantainer-fluid"></div>');
  const row =  $('<div class="row"></div>');
  const col=$('<div class="col s12 center-align"></div>');
  const point = $('<div class="col s6 offset-s3 contPoint"></div>');
  const point1 =$ ('<div class="point"></div>')

  const button =$('<button class="btn" type="button" name="button">Registrarme</button>');
  point.append(point1);
  point1.clone().appendTo(point);
  point1.clone().appendTo(point);


  col.append(carousel());
  col.append(point);
  col.append(button);
  row.append(col);
  container.append(row);

  return container;
}

const carousel = _=>{

  const contCarousel = document.createElement("div");

  for (var i = 0; i < 3; i++) {
    const divCont = document.createElement("div");
    divCont.classList.add("col", "s12");

    const divImg = document.createElement("div");
    divImg.classList.add("col", "s12");

    const img=  document.createElement("img");
    const h1 =  document.createElement("h1");
    const p = document.createElement("p");
    if(i==0){
      img.setAttribute("src", "img/icons/icon-people.png");
      h1.innerHTML = Paga a tus amigos;
      p.innerHTML = Paga a quien quieras desde donde quieras, sin usar efectivo;
    } else if (i==1) {
      img.setAttribute("src", "img/icons/happy-person.png");
      h1.innerHTML = Sin número de cuenta;
      p.innerHTML = Elige a quién pagar desde tu lista de contactos;
    } else if (i==2) {
      img.setAttribute("src", "img/icons/group-people.png");
      h1.innerHTML = Gratis y Seguro;
      p.innerHTML = La transferencia es inmediata y gratuita desde una cuenta a otra;
    }
  }

  divCont.append(divImg);

  contCarousel.append(item0);
  contCarousel.append(item1);
  contCarousel.append(item2);

  return contCarousel;
}
