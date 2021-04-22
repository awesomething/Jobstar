import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchPage from '../components/SearchPage'

describe(`SearchPage component`, () => {
  const props = {
    tag: 'a',
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a .SearchPage by default', () => {
    const wrapper = shallow(<SearchPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the SearchPage from props', () => {
    const wrapper = shallow(<SearchPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
