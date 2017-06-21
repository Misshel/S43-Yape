'use strict';

const numberCheck = (input,checkbox,button)=>{
  if((input.val() != undefined | null)  & (input.length == 9) & (input[0] == 9) & (checkbox.is(':checked')))
  {
    button.removeAttr("disabled");
  }
};
