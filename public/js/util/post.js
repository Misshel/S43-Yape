'use strict';

const numPhone = (phone,update)=>{ $.post( 'api/registerNumber',
{ "phone": phone, "terms": true },
(answer) =>{
  state.code = answer.data.code;
  state.phone = answer.data.phone;
  state.screenYape = threeScreen;
  update();
}, "json");
}

const dateUser = (phone,name,email,password,update)=>{ $.post( 'api/createUser',
{ "phone": phone, "name": name, "email": email, "password": password},
(answer) =>{
  console.log(answer);
  state.screenYape = fifthScreen;
  update();
}, "json");
}
