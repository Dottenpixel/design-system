import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UtilityIcon } from '../icons/base/example';

export const KineticsBorderSwirl = ({ gradientId, shape }) => (
  <svg class="slds-kinetic-border-swirl">
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="75%" x2="100%" y2="100%">
        <stop class="slds-kinetic-gradient__stop-1" offset="0%" />
        <stop class="slds-kinetic-gradient__stop-2" offset="100%" />
      </linearGradient>
    </defs>
    {shape === 'circle' ? (
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
    ) : (
      <circle
        class="slds-kinetic-border-swirl-shape"
        cx="50%"
        cy="50%"
        r="40%"
        fill="none"
        width="100%"
        height="100%"
      />
    )}
  </svg>
);

KineticsBorderSwirl.propTypes = {};

export const KineticButton = props => (
  <span
    className={classNames('slds-button_kinetic', {
      'slds-button_kinetic_inverse': props.isInverse,
      'slds-button_kinetic_lightest': props.isLightest,
      'slds-theme_success': props.isSuccess,
      'slds-theme_warning': props.isWarning,
      'slds-theme_error': props.isError
    })}
  >
    {props.children}
  </span>
);

KineticButton.propTypes = {
  isInverse: PropTypes.bool,
  isLightest: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export const InverseKineticButton = props => (
  <KineticButton isInverse>{props.children}</KineticButton>
);

InverseKineticButton.propTypes = {
  children: PropTypes.node.isRequired
};

export const LightestKineticButton = props => (
  <KineticButton isLightest>{props.children}</KineticButton>
);

LightestKineticButton.propTypes = {
  children: PropTypes.node.isRequired
};

export const KineticButtonIcon = props => {
  const { assistiveText, align, isInverse, symbol } = props;
  return (
    <span
      className={classNames(
        'slds-button_kinetic__icon',
        `slds-button_kinetic__icon_${align}`,
        {
          'slds-button_kinetic__icon_inverse': isInverse
        }
      )}
    >
      <UtilityIcon
        className="slds-icon_xx-small"
        useCurrentColor
        assistiveText={assistiveText || false}
        symbol={symbol}
      />
    </span>
  );
};

KineticButtonIcon.propTypes = {
  symbol: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
  isInverse: PropTypes.bool,
  assistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

KineticButtonIcon.defaultProps = {
  align: 'left'
};
