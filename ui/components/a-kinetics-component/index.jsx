import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UtilityIcon } from '../icons/base/example';

export const AKineticsComponent = props => (
  <span
    className={classNames('slds-a-kinetics-component', {
      'slds-a-kinetics-component_inverse': props.isInverse,
      'slds-a-kinetics-component_lightest': props.isLightest,
      'slds-theme_success': props.isSuccess,
      'slds-theme_warning': props.isWarning,
      'slds-theme_error': props.isError
    })}
  >
    {props.children}
  </span>
);

AKineticsComponent.propTypes = {
  isInverse: PropTypes.bool,
  isLightest: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export const InverseAKineticsComponent = props => (
  <AKineticsComponent isInverse>{props.children}</AKineticsComponent>
);

InverseAKineticsComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export const LightestAKineticsComponent = props => (
  <AKineticsComponent isLightest>{props.children}</AKineticsComponent>
);

LightestAKineticsComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export const AKineticsComponentIcon = props => {
  const { assistiveText, align, isInverse, symbol } = props;
  return (
    <span
      className={classNames(
        'slds-a-kinetics-component__icon',
        `slds-a-kinetics-component__icon_${align}`,
        {
          'slds-a-kinetics-component__icon_inverse': isInverse
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

AKineticsComponentIcon.propTypes = {
  symbol: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
  isInverse: PropTypes.bool,
  assistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

AKineticsComponentIcon.defaultProps = {
  align: 'left'
};
