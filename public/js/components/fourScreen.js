"use strict";

const fourScreen = (update) =>{
  const container = $('<div class="container-fluid"></div>');
  const row = $('<div class="row secondScreen"></div>');
  const col = $('<div class="col s12 center-align"></div>');

  const img = $('<div class="col s4 offset-s4"><img class="responsive-img" src="img/icons/lockone.png" alt="celular"></div>');
  const text = $('<div class="col s11 margin-1r"><h1 class="phone-h1 center-align">Crea tu usuario Yape</h1><p class="phone-p">Ingresa un nombre, email y  clave de usuario</p></div>');
  const form = $('<div class="col s12"></div>');
  const imgIconUser = $('<div class="col s2 icon-register"><img class="responsive-img" src="img/icons/user.png" alt="cara"></div>');
  const inputUser = $('<input class="col s12 margin-b center-align margin-1r" id="name" name="" value="" placeHolder="Nombre">');
  const imgIconEmail = $('<div class="col s2 icon-register padding-1em"><img class="responsive-img" src="img/icons/message-gray.png" alt="cara"></div>');
  const inputEmail = $('<input  class="col s12 margin-b  center-align margin-1r" id="email" name="" value="" placeHolder="correo@ejemplo.com">');
  const imgIconPassword = $('<div class="col s2 icon-register padding-1em"><img class="responsive-img" src="img/icons/lock.png" alt="cara"></div>');
  const inputPassword= $('<input  class="col s12 margin-b center-align margin-1r" id="password" name="" minlength="6" maxlength="6" value="" placeHolder="Ingresa clave de 6 dígitos" type="password">');
  const message= $('<div class="col s11 offset-s1 margin-1r margin-t-b"><p class="phone-p">Cuida esta clave como oro es tu acceso a Yape</p></div>');
  const boton = $('<button id="button" class="col s4 offset-s4 btn disabled" type="button" name="button" >CONTINUAR</button>');

  col.append(img);
  col.append(text);
  col.append(form);
  form.append(imgIconUser);
  form.append(inputUser);
  form.append(imgIconEmail);
  form.append(inputEmail);
  form.append(imgIconPassword);
  form.append(inputPassword);
  form.append(message);
  form.append(boton);

  row.append(col);
  container.append(row)

  inputUser.keypress(validateLetter);
  inputEmail.keypress(validateEmail);
  inputPassword.keypress(validateNumber);

let name;
let email;
let password;

  inputPassword.on('keyup',(e) => {
    name= inputUser.val();
    email= inputEmail.val();
    password= inputPassword.val();
    if(name.length !=0 && email.length!=0 && password.length == 6){
      boton.removeClass("disabled");
    }else {
      boton.addClass("disabled");
    }
  });

  const phone = state.phone;
  console.log(phone);
  boton.on("click",(e)=>{
    console.log(phone,name,email,password);
    e.preventDefault();
    dateUser(phone,name,email,password,update);
  });

  return container;
}
