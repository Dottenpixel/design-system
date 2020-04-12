// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */

import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  LightestKineticButton,
  InverseKineticButton,
  KineticButton,
  KineticButtonIcon
} from '../';

describe('kinetic-button', () => {
  it('renders base without crashing', () => {
    ReactDOM.render(
      <KineticButton>Lovely kinetic-button</KineticButton>,
      document.createElement('div')
    );
  });

  it('renders inverse variant without crashing', () => {
    ReactDOM.render(
      <InverseKineticButton>Lovely kinetic-button</InverseKineticButton>,
      document.createElement('div')
    );
  });

  it('renders light variant without crashing', () => {
    ReactDOM.render(
      <LightestKineticButton>Lovely kinetic-button</LightestKineticButton>,
      document.createElement('div')
    );
  });
});

describe('light kinetic-button with icon', () => {
  const wrapper = mount(
    <KineticButton isLightest>
      <KineticButtonIcon symbol="moneybag" />
      423 Credits Available
    </KineticButton>
  ).find('.slds-button_kinetic');

  it('renders a light kinetic-button', () => {
    expect(wrapper.hasClass('slds-button_kinetic_lightest')).toEqual(true);
  });

  it('renders a light kinetic-button with icon on the left', () => {
    expect(wrapper.childAt(0).exists('.slds-button_kinetic__icon')).toEqual(
      true
    );
  });

  it('renders an icon container', () => {
    expect(
      wrapper
        .find('.slds-button_kinetic__icon')
        .childAt(0)
        .exists('.slds-icon_container')
    ).toEqual(true);
  });

  it('renders an svg in the icon', () => {
    expect(
      wrapper
        .find('.slds-button_kinetic__icon .slds-icon_container')
        .childAt(0)
        .exists('svg.slds-icon')
    ).toEqual(true);
  });
});

describe('inverse kinetic-button with right icon', () => {
  const wrapper = mount(
    <InverseKineticButton>
      423 Credits Available
      <KineticButtonIcon symbol="moneybag" isInverse align="right" />
    </InverseKineticButton>
  ).find('.slds-button_kinetic');

  it('renders an inverse kinetic-button', () => {
    expect(wrapper.hasClass('slds-button_kinetic_inverse')).toEqual(true);
  });

  it('renders an inverse icon', () => {
    expect(
      wrapper
        .find('.slds-button_kinetic__icon')
        .hasClass('slds-button_kinetic__icon_inverse')
    ).toEqual(true);
  });

  it('renders an icon on the right', () => {
    expect(
      wrapper
        .find('.slds-button_kinetic__icon')
        .hasClass('slds-button_kinetic__icon_right')
    ).toEqual(true);
  });
});
