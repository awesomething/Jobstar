import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from '../components/Button'

describe(`Button component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a .Button by default', () => {
    const wrapper = shallow(<Button />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Button given props', () => {
    const wrapper = shallow(<Button {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
