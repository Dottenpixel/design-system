// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Button } from '../../buttons/base/example';

export default <div>Nothing to see here</div>;

export let examples = [
  {
    id: 'kinetic-button',
    label: 'Kinetic Button',
    demoStyles: 'text-align: center;',
    element: (
      <Button isNeutral isKinetic>
        <svg class="slds-kinetic-border-swirl">
          <defs>
            <linearGradient
              id="slds-button_kinetic-gradient"
              x1="0%"
              y1="75%"
              x2="100%"
              y2="100%"
            >
              <stop class="slds-kinetic-gradient__stop-1" offset="0%" />
              <stop class="slds-kinetic-gradient__stop-2" offset="100%" />
            </linearGradient>
          </defs>
          <rect
            class="slds-kinetic-border-swirl-shape"
            x="0"
            y="0"
            rx="4"
            ry="4"
            fill="none"
            width="100%"
            height="100%"
          />
        </svg>
        <span class="slds-button_kinetic_label">I have KINETICS!</span>
      </Button>
    )
  }
];
