'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(firstScreen(_ => render(root)));

  if (state.secondScreen != null) {
    wrapper.append(secondScreen(_ => render(root)));
  }

  root.append(wrapper);
}

const state = {
  firstScreen: null,
  SecondScreen: null,
  threeScreen: null

};

// let active =1;

$(_=>{
  const root = $('#root');
  render(root);
  readyCarousel();
});

const readyCarousel= _=>{
  $('.carousel.carousel-slider').carousel({fullWidth: true});
};
