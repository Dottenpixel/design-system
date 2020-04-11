// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  AKineticsComponent,
  InverseAKineticsComponent,
  LightestAKineticsComponent,
  AKineticsComponentIcon
} from '..';

export default (
  <AKineticsComponent>AKineticsComponent Label</AKineticsComponent>
);

export let examples = [
  {
    id: 'inverse',
    label: 'Inverse',
    element: (
      <InverseAKineticsComponent>
        Inverse a-kinetics-component
      </InverseAKineticsComponent>
    )
  },
  {
    id: 'with-left-icon',
    label: 'With left icon',
    element: (
      <AKineticsComponent>
        <AKineticsComponentIcon symbol="moneybag" />
        423 Credits Available
      </AKineticsComponent>
    )
  },
  {
    id: 'with-right-icon',
    label: 'With right icon',
    element: (
      <AKineticsComponent>
        423 Credits Available
        <AKineticsComponentIcon symbol="moneybag" align="right" />
      </AKineticsComponent>
    )
  },
  {
    id: 'light-with-left-icon',
    label: 'Light with left icon',
    element: (
      <LightestAKineticsComponent>
        <AKineticsComponentIcon symbol="moneybag" />
        423 Credits Available
      </LightestAKineticsComponent>
    )
  },
  {
    id: 'light-with-right-icon',
    label: 'Light with right icon',
    element: (
      <LightestAKineticsComponent>
        423 Credits Available
        <AKineticsComponentIcon symbol="moneybag" align="right" />
      </LightestAKineticsComponent>
    )
  },
  {
    id: 'inverse-with-left-icon',
    label: 'Inverse with left icon',
    element: (
      <InverseAKineticsComponent>
        <AKineticsComponentIcon symbol="moneybag" isInverse />
        423 Credits Available
      </InverseAKineticsComponent>
    )
  },
  {
    id: 'inverse-with-right-icon',
    label: 'Inverse with right icon',
    element: (
      <InverseAKineticsComponent>
        423 Credits Available
        <AKineticsComponentIcon symbol="moneybag" align="right" isInverse />
      </InverseAKineticsComponent>
    )
  },
  {
    id: 'a-kinetics-component-with-child',
    label: 'With Child Element',
    element: (
      <AKineticsComponent>
        Component In: <em>Lightning</em>
      </AKineticsComponent>
    )
  }
];

export let states = [
  {
    id: 'success',
    label: 'Success',
    element: (
      <AKineticsComponent isSuccess>
        Success a-kinetics-component
      </AKineticsComponent>
    )
  },
  {
    id: 'warning',
    label: 'Warning',
    element: (
      <AKineticsComponent isWarning>
        Warning a-kinetics-component
      </AKineticsComponent>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <AKineticsComponent isError>
        Error a-kinetics-component
      </AKineticsComponent>
    )
  }
];
