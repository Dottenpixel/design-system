import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UtilityIcon } from '../icons/base/example';

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
