/* eslint-env jest */
import React from 'react';
import {
  LightestKineticButton,
  InverseKineticButton,
  KineticButton,
  KineticButtonIcon
} from '../';
import { UtilityIcon } from '../../icons/base/example';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('KineticButton colors', () => {
  it('renders a default kinetic-button', () =>
    matchesMarkup(<KineticButton>Lovely kinetic-button</KineticButton>));

  it('renders an inverse kinetic-button', () =>
    matchesMarkup(
      <InverseKineticButton>Lovely kinetic-button</InverseKineticButton>
    ));

  it('renders kinetic-button', () =>
    matchesMarkup(<LightestKineticButton>Light</LightestKineticButton>));
});

describe('KineticButton with icons', () => {
  it('renders kinetic-button with left icon', () =>
    matchesMarkup(
      <LightestKineticButton>
        <KineticButtonIcon symbol="world" />
        Icon on the left
      </LightestKineticButton>
    ));

  it('renders kinetic-button with right icon', () =>
    matchesMarkup(
      <LightestKineticButton>
        Icon on the right
        <KineticButtonIcon symbol="world" />
      </LightestKineticButton>
    ));

  it('renders kinetic-button with icon only', () =>
    matchesMarkup(
      <LightestKineticButton>
        <KineticButtonIcon
          symbol="world"
          assistiveText="assistive text goes here, do it!"
        />
      </LightestKineticButton>
    ));

  it('renders deprecated kinetic-button with right icon', () =>
    matchesMarkup(
      <LightestKineticButton>
        Icon on the right
        <UtilityIcon
          containerClassName="slds-m-left_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="world"
        />
      </LightestKineticButton>
    ));

  it('renders deprecated kinetic-button with icon only', () =>
    matchesMarkup(
      <LightestKineticButton>
        <UtilityIcon
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText="assistive text goes here, do it!"
          symbol="world"
        />
      </LightestKineticButton>
    ));
});
