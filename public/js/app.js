'use strict';

const render = (root,body) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  // if (state.firstScreen == null){
  // } else {
  //   wrapper.append(Dashboard());
  // }
  // root.before(firstScreen());
  wrapper.append(firstScreen());
  root.append(wrapper);
}

const state = {
  firstScreen: null,
  SecondScreen: null
};

$(_=>{
  const root = $('#root');
  render(root);
  // state.doRender = render.bind(null, root);
});
