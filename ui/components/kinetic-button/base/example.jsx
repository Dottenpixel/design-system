// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  KineticButton,
  InverseKineticButton,
  LightestKineticButton,
  KineticButtonIcon
} from '..';

export default <KineticButton>KineticButton Label</KineticButton>;

export let examples = [
  {
    id: 'inverse',
    label: 'Inverse',
    element: <InverseKineticButton>Inverse kinetic-button</InverseKineticButton>
  },
  {
    id: 'with-left-icon',
    label: 'With left icon',
    element: (
      <KineticButton>
        <KineticButtonIcon symbol="moneybag" />
        423 Credits Available
      </KineticButton>
    )
  },
  {
    id: 'with-right-icon',
    label: 'With right icon',
    element: (
      <KineticButton>
        423 Credits Available
        <KineticButtonIcon symbol="moneybag" align="right" />
      </KineticButton>
    )
  },
  {
    id: 'light-with-left-icon',
    label: 'Light with left icon',
    element: (
      <LightestKineticButton>
        <KineticButtonIcon symbol="moneybag" />
        423 Credits Available
      </LightestKineticButton>
    )
  },
  {
    id: 'light-with-right-icon',
    label: 'Light with right icon',
    element: (
      <LightestKineticButton>
        423 Credits Available
        <KineticButtonIcon symbol="moneybag" align="right" />
      </LightestKineticButton>
    )
  },
  {
    id: 'inverse-with-left-icon',
    label: 'Inverse with left icon',
    element: (
      <InverseKineticButton>
        <KineticButtonIcon symbol="moneybag" isInverse />
        423 Credits Available
      </InverseKineticButton>
    )
  },
  {
    id: 'inverse-with-right-icon',
    label: 'Inverse with right icon',
    element: (
      <InverseKineticButton>
        423 Credits Available
        <KineticButtonIcon symbol="moneybag" align="right" isInverse />
      </InverseKineticButton>
    )
  },
  {
    id: 'kinetic-button-with-child',
    label: 'With Child Element',
    element: (
      <KineticButton>
        Component In: <em>Lightning</em>
      </KineticButton>
    )
  }
];

export let states = [
  {
    id: 'success',
    label: 'Success',
    element: <KineticButton isSuccess>Success kinetic-button</KineticButton>
  },
  {
    id: 'warning',
    label: 'Warning',
    element: <KineticButton isWarning>Warning kinetic-button</KineticButton>
  },
  {
    id: 'error',
    label: 'Error',
    element: <KineticButton isError>Error kinetic-button</KineticButton>
  }
];
