import React from 'react';
import {render, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

import Demo from '../src/ui/index';

describe('react component test', () => {
  it('should not change', () => {
    const wrapper = render(
      <Demo title="Demo" value={2}/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should add 1 by one click', () => {
    const wrapper = mount(
      <Demo title="Demo" value={2}/>
    );
    const value1 = wrapper.find('.counter').text();
    wrapper.find('button').simulate('click')
    const value2 = wrapper.find('.counter').text();
    expect(parseInt(value1)).toEqual(value2 - 1);
  });

  it('should display 5 when input', () => {
    const wrapper = mount(<Demo />);
    wrapper.find('input').simulate('change', {
      target: {value: '5'}
    });
    const value = wrapper.find('.counter').text();
    expect(value).toEqual('5');
  });

  test('title should change to "Demo"', () => {
    const wrapper = mount(<Demo />);
    const title = wrapper.find('h1');
    expect(title.text()).toBe('This is a demo');
    wrapper.setProps({
      title: 'Demo'
    });
    expect(title.text()).toBe('Demo');
  });

  it('calls componentWillReceiveProps', () => {
    sinon.spy(Demo.prototype, 'componentWillReceiveProps');
    const wrapper = mount(<Demo />);
    wrapper.setProps({
      title: 'Demo'
    });
    expect(Demo.prototype.componentWillReceiveProps.calledOnce).toBe(true);
  });
});
