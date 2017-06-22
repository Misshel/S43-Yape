'use strict';

const render = (root) =>{
  root.empty();
  const update = _ => render(root);

  const wrapper = $('<div class="wrapper"></div>');
  if(state.screenYape == null){
    wrapper.append(firstScreen(update));
  } else if (state.screenYape == secondScreen){
    wrapper.append(secondScreen(update));
  } else  if (state.screenYape == threeScreen){
    wrapper.append(threeScreen(update));
  }
  root.append(wrapper);
}

const state = {
  screenYape:null,
  phone:null,
  code: null
};

$(_=>{
  const root = $('#root');
  render(root);
  readyCarousel();

});

const readyCarousel= _=>{
  $('.carousel.carousel-slider').carousel({fullWidth: true});
};
