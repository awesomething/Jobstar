import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '../components/Home'

describe(`Home component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a .Home by default', () => {
    const wrapper = shallow(<Home />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Home given props', () => {
    const wrapper = shallow(<Home {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
