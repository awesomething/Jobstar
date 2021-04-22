import React from 'react';
import { shallow } from 'enzyme'
//import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import Banner from '../components/Banner'

Enzyme.configure({ adapter: new Adapter() });

describe(`Banner component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
    
  }

  it('renders a .Banner by default', () => {
    const wrapper = shallow(<Banner />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Banner given props', () => {
    const wrapper = shallow(<Banner {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
