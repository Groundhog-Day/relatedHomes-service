import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import App from '../App.jsx';

describe('<App />', () => {

  it('Contains a header element', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.header')).toBeDefined();
  });

  it('Has home carousel element', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.homeCarousel')).toBeDefined();
  });

})