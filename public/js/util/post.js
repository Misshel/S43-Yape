'use strict';

const numPhone = (phone,update)=>{ $.post( 'api/registerNumber',
{ "phone": phone, "terms": true },
(answer) =>{
  console.log(answer);
  state.code = answer.data.code;
  state.phone = answer.data.phone;
  state.screenYape = threeScreen;
  update();
}, "json");
}
