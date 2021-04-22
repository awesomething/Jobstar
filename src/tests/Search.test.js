import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Search from '../components/Search'



describe(`Search component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a .Search by default', () => {
    const wrapper = shallow(<Search />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Search given props', () => {
    const wrapper = shallow(<Search {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
