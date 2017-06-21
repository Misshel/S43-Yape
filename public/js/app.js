'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.secondScreen == null){
    wrapper.append(firstScreen(_ => render(root)));
  } else{
    wrapper.append(secondScreen());
  }
  root.append(wrapper);
}

const state = {
  firstScreen: null,
  secondScreen: null,
  threeScreen: null
};

$(_=>{
  const root = $('#root');
  render(root);
  readyCarousel();

});

const readyCarousel= _=>{
  $('.carousel.carousel-slider').carousel({fullWidth: true});
};
