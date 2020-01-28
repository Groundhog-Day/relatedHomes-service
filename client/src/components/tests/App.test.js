import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import App from '../App.jsx';

describe('Main App Component', () => {

  it('Contains a header element', () => {
    const wrapper = render(<App />);

    expect(wrapper.find('.header')).toBeDefined();
  })

})