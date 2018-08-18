import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import <%= name %> from '../src/components/<%= name %>';

/*
 * This is an example of a component level test.
 * We are confirming the successful render of the Parent most component
 */

describe('<%= name %> Component:', () => {
  let wrapper;

  it('exists?', () => {
    wrapper = shallow(<%= name %>);
    expect(wrapper).to.exist;
  });
});
