// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Fragment } from 'react';
import classNames from 'classnames';
import ButtonIcon from '../../button-icons/';
import { Tooltip } from '../../tooltips/base/example';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter
} from '../../modals/base/example';
import { ProgressBar } from '../../progress-bar';
import { KineticsBorderSwirl } from '../../kinetic-button/index';

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

export let Progress = ({
  className,
  children,
  active,
  done,
  error,
  ...props
}) => (
  <div className={classNames('slds-progress', className)}>
    <ol className="slds-progress__list">{children}</ol>
    <ProgressBar className="slds-progress-bar_x-small" value={props.value} />
  </div>
);

export let Step = ({
  className,
  children,
  active,
  done,
  error,
  isKinetic,
  ...props
}) => (
  <li
    className={classNames(
      'slds-progress__item',
      className,
      isKinetic &&
        'slds-kinetic-progress__item slds-kinetic-progress__item_activated',
      active && 'slds-is-active',
      done && 'slds-is-completed',
      error && 'slds-has-error'
    )}
  >
    {done && !error ? (
      <ButtonIcon
        className="slds-progress__marker slds-progress__marker_icon"
        symbol="success"
        aria-describedby={props['aria-describedby']}
        assistiveText={done ? children + ' - Completed' : null}
        title={done ? children + ' - Completed' : null}
      />
    ) : error ? (
      <ButtonIcon
        className="slds-progress__marker slds-progress__marker_icon"
        symbol="error"
        aria-describedby={props['aria-describedby']}
        assistiveText={error ? children + ' - Error' : null}
        title={error ? children + ' - Error' : null}
      />
    ) : (
      <Fragment>
        {isKinetic && (
          <KineticsBorderSwirl gradientId="slds-kinetic-progress-stop-gradient" />
        )}
        <button
          className="slds-button slds-progress__marker"
          aria-describedby={props['aria-describedby']}
        >
          <span className="slds-assistive-text">
            {children} {active ? '- Active' : null}
          </span>
        </button>
      </Fragment>
    )}
  </li>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <div className="demo-only" style={{ padding: '1rem' }}>
    <Progress value="0">
      <Step active>Step 1</Step>
      <Step>Step 2</Step>
      <Step>Step 3</Step>
      <Step>Step 4</Step>
      <Step>Step 5</Step>
    </Progress>
  </div>
);

export let states = [
  {
    id: 'next-step',
    label: 'Next Step',
    element: (
      <div className="demo-only" style={{ padding: '1rem' }}>
        <Progress value="25">
          <Step done>Step 1</Step>
          <Step active>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  },
  {
    id: 'has-error',
    label: 'Step - Error',
    element: (
      <div className="demo-only" style={{ padding: '1rem' }}>
        <Progress value="25">
          <Step done>Step 1</Step>
          <Step error>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    element: (
      <div className="demo-only" style={{ padding: '3rem 1rem 0' }}>
        <Progress value="50">
          <Step done>Step 1</Step>
          <Step done>Step 2</Step>
          <Step active aria-describedby="step-3-tooltip">
            Step 3
          </Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
        <Tooltip
          className="slds-nubbin_bottom"
          id="step-3-tooltip"
          style={{
            position: 'absolute',
            top: '0px',
            left: 'calc(50% + 7px)',
            transform: 'translateX(-50%)'
          }}
        >
          Verify Email
        </Tooltip>
      </div>
    )
  }
];

export let examples = [
  {
    id: 'modal',
    label: 'In a modal',
    element: (
      <div className="demo-only" style={{ height: '640px' }}>
        <Modal className="slds-modal_large" aria-labelledby="header43">
          <ModalHeader>
            <h2 id="header43" className="slds-text-heading_medium">
              Modal Header
            </h2>
          </ModalHeader>
          <ModalContent className="slds-grow slds-p-around_medium" />
          <ModalFooter className="slds-grid slds-grid_align-spread">
            <button className="slds-button slds-button_neutral">Cancel</button>
            <Progress className="slds-progress_shade" value="25">
              <Step done>Step 1</Step>
              <Step active>Step 2</Step>
              <Step>Step 3</Step>
              <Step>Step 4</Step>
              <Step>Step 5</Step>
            </Progress>
            <button className="slds-button slds-button_brand">Save</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop_open" />
      </div>
    )
  },
  {
    id: 'shade',
    label: 'On a gray background',
    element: (
      <div
        className="demo-only"
        style={{ background: '#F3F2F2', padding: '1rem' }}
      >
        <Progress className="slds-progress_shade" value="25">
          <Step done>Step 1</Step>
          <Step active>Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Progress>
      </div>
    )
  }
];
