/* eslint-env jest */
import React from 'react';
import {
  LightestAKineticsComponent,
  InverseAKineticsComponent,
  AKineticsComponent,
  AKineticsComponentIcon
} from '../';
import { UtilityIcon } from '../../icons/base/example';
import createHelpers from '../../../../jest.helpers';
const { matchesMarkup } = createHelpers(__dirname);

describe('AKineticsComponent colors', () => {
  it('renders a default a-kinetics-component', () =>
    matchesMarkup(
      <AKineticsComponent>Lovely a-kinetics-component</AKineticsComponent>
    ));

  it('renders an inverse a-kinetics-component', () =>
    matchesMarkup(
      <InverseAKineticsComponent>
        Lovely a-kinetics-component
      </InverseAKineticsComponent>
    ));

  it('renders a-kinetics-component', () =>
    matchesMarkup(
      <LightestAKineticsComponent>Light</LightestAKineticsComponent>
    ));
});

describe('AKineticsComponent with icons', () => {
  it('renders a-kinetics-component with left icon', () =>
    matchesMarkup(
      <LightestAKineticsComponent>
        <AKineticsComponentIcon symbol="world" />
        Icon on the left
      </LightestAKineticsComponent>
    ));

  it('renders a-kinetics-component with right icon', () =>
    matchesMarkup(
      <LightestAKineticsComponent>
        Icon on the right
        <AKineticsComponentIcon symbol="world" />
      </LightestAKineticsComponent>
    ));

  it('renders a-kinetics-component with icon only', () =>
    matchesMarkup(
      <LightestAKineticsComponent>
        <AKineticsComponentIcon
          symbol="world"
          assistiveText="assistive text goes here, do it!"
        />
      </LightestAKineticsComponent>
    ));

  it('renders deprecated a-kinetics-component with right icon', () =>
    matchesMarkup(
      <LightestAKineticsComponent>
        Icon on the right
        <UtilityIcon
          containerClassName="slds-m-left_xx-small"
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText={false}
          symbol="world"
        />
      </LightestAKineticsComponent>
    ));

  it('renders deprecated a-kinetics-component with icon only', () =>
    matchesMarkup(
      <LightestAKineticsComponent>
        <UtilityIcon
          className="slds-icon_xx-small slds-icon-text-default"
          assistiveText="assistive text goes here, do it!"
          symbol="world"
        />
      </LightestAKineticsComponent>
    ));
});
