'use strict';

const render = (root) =>{
  root.empty();
  const update = _ => render(root);

  const wrapper = $('<div class="wrapper"></div>');
  // if(state.secondScreen == null){
  //   wrapper.append(firstScreen(update));
  // } else if (state.secondScreen != null){
  //   wrapper.append(secondScreen(update));
  // } else  if (state.threeScreen != null){
  //   wrapper.append(threeScreen(update));
  // }
  if(state.screen == null){
    wrapper.append(firstScreen(update));
  } else if (state.screen == secondScreen){
    wrapper.append(secondScreen(update));
  } else  if (state.screen == threeScreen){
    wrapper.append(threeScreen(update));
  }
  root.append(wrapper);
}

const state = {
  // firstScreen: null,
  // secondScreen: null,
  // threeScreen: null
  screen:null
};

$(_=>{
  const root = $('#root');
  render(root);
  readyCarousel();

});

const readyCarousel= _=>{
  $('.carousel.carousel-slider').carousel({fullWidth: true});
};
