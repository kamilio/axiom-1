import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Icon } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./DockItem.scss');
}

export default class DockItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string.isRequired,
  };

  render() {
    const { icon, active, ...rest } = this.props;
    const classes = classnames('ax-platform__dock-item', {
      'ax-platform__dock-item--active': active,
    });

    return (
      <li className={ classes }>
        <a { ...rest } className="ax-platform__dock-item-link">
          <Icon name={ icon } size="1.5rem" />
        </a>
      </li>
    );
  }
}
