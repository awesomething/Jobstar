import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Footer from '../components/Footer'



describe(`Footer component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a .Footer by default', () => {
    const wrapper = shallow(<Footer />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Footer given props', () => {
    const wrapper = shallow(<Footer {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
