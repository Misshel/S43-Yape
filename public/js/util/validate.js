'use strict';

const validateLetter = (e)=>{
  let codKey=e.which;
  if((codKey>=97 && codKey<=122)||(codKey>=65 && codKey<=90)||codKey==32||codKey==39){
    return true;
  } else {
    return false;
  }
}

const validateNumber = (e) =>{
  let codKey=e.which;
  if(codKey>=48 && codKey<=57){
      return true ;
    } else {
      return false;
    }
  }

const  validateEmail = ( email )=> {
  const  emailExpr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if( !emailExpr.test(email))
  { return true;}
    else {return false;}
}
