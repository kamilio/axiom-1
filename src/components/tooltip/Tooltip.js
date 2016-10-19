import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import Floater from '../floater/Floater';
import { colorIds } from '../../design-patterns/colors/_vars';

if (__INCLUDE_CSS__) {
  require('./Tooltip.scss');
}

const propTypes = {
  children: { node: true },
  color: { oneOf: [...colorIds], default: 'primary' },
};

export class Tooltip extends Component {
  static propTypes = propTypes;

  render() {
    const {
      children,
      color = propTypes.color.default,
      ...rest,
    } = this.props;

    const classes = classnames('ax-tooltip', {
      [`ax-tooltip--${color}`]: color,
    });

    return (
      <Floater { ...rest }>
        <div className={ classes }>
          { children }
        </div>
      </Floater>
    );
  }
}

export default enhance(Tooltip)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
