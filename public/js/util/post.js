'use strict';

const numPhone = (phone,update)=>{ $.post( 'api/registerNumber', {
                "phone": phone,
                "terms": true
              }, ( answer ) =>{
}, "json");
}
