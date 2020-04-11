// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  LightestAKineticsComponent,
  InverseAKineticsComponent,
  AKineticsComponent,
  AKineticsComponentIcon
} from '../';

describe('a-kinetics-component', () => {
  it('renders base without crashing', () => {
    ReactDOM.render(
      <AKineticsComponent>Lovely a-kinetics-component</AKineticsComponent>,
      document.createElement('div')
    );
  });

  it('renders inverse variant without crashing', () => {
    ReactDOM.render(
      <InverseAKineticsComponent>
        Lovely a-kinetics-component
      </InverseAKineticsComponent>,
      document.createElement('div')
    );
  });

  it('renders light variant without crashing', () => {
    ReactDOM.render(
      <LightestAKineticsComponent>
        Lovely a-kinetics-component
      </LightestAKineticsComponent>,
      document.createElement('div')
    );
  });
});

describe('light a-kinetics-component with icon', () => {
  const wrapper = mount(
    <AKineticsComponent isLightest>
      <AKineticsComponentIcon symbol="moneybag" />
      423 Credits Available
    </AKineticsComponent>
  ).find('.slds-a-kinetics-component');

  it('renders a light a-kinetics-component', () => {
    expect(wrapper.hasClass('slds-a-kinetics-component_lightest')).toEqual(
      true
    );
  });

  it('renders a light a-kinetics-component with icon on the left', () => {
    expect(
      wrapper.childAt(0).exists('.slds-a-kinetics-component__icon')
    ).toEqual(true);
  });

  it('renders an icon container', () => {
    expect(
      wrapper
        .find('.slds-a-kinetics-component__icon')
        .childAt(0)
        .exists('.slds-icon_container')
    ).toEqual(true);
  });

  it('renders an svg in the icon', () => {
    expect(
      wrapper
        .find('.slds-a-kinetics-component__icon .slds-icon_container')
        .childAt(0)
        .exists('svg.slds-icon')
    ).toEqual(true);
  });
});

describe('inverse a-kinetics-component with right icon', () => {
  const wrapper = mount(
    <InverseAKineticsComponent>
      423 Credits Available
      <AKineticsComponentIcon symbol="moneybag" isInverse align="right" />
    </InverseAKineticsComponent>
  ).find('.slds-a-kinetics-component');

  it('renders an inverse a-kinetics-component', () => {
    expect(wrapper.hasClass('slds-a-kinetics-component_inverse')).toEqual(true);
  });

  it('renders an inverse icon', () => {
    expect(
      wrapper
        .find('.slds-a-kinetics-component__icon')
        .hasClass('slds-a-kinetics-component__icon_inverse')
    ).toEqual(true);
  });

  it('renders an icon on the right', () => {
    expect(
      wrapper
        .find('.slds-a-kinetics-component__icon')
        .hasClass('slds-a-kinetics-component__icon_right')
    ).toEqual(true);
  });
});
