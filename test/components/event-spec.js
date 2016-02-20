import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Circles} from '../components/circles.jsx'

describe('<Circles/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Circles/>)
    expect(wrapper).to.be.ok
  })
})
