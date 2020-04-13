// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { KineticsBorderSwirl } from '..';
import { Button } from '../../buttons/base/example';
import { Progress, Step } from '../../progress-indicator/base/example';

export default <div>Nothing to see here</div>;

export let examples = [
  {
    id: 'border-swirl-button',
    label: 'Border Swirl Button',
    demoStyles: 'text-align: center;',
    element: (
      <Button isNeutral isKinetic>
        <KineticsBorderSwirl gradientId="slds-button_kinetic-gradient" />
        <span class="slds-button_kinetic_label">I have KINETICS!</span>
      </Button>
    )
  },
  {
    id: 'border-swirl-progress-indicator',
    label: 'Border Swirl Progress Indicator',
    element: (
      <div className="demo-only" style={{ padding: '1rem' }}>
        <Progress value="50">
          <Step done>Step 1</Step>
          <Step done>Step 2</Step>
          <Step active isKinetic>
            Step 3
          </Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  }
];
