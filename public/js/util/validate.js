'use strict';

const post = ()=>{
  const x = $("form").serializeArray();
  $.each(x, function(i, field){
    $("#results").append(field.name + ":" + field.value + " ");
  });
}
