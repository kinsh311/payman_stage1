
import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test('rendering header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('Expensify test');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})