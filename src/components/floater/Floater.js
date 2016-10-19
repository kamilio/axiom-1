import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tether from 'tether';
import { enhance, addPropTypes } from '../_utils/components';
import { ATTACHMENT_MAP } from './_utils';

if (__INCLUDE_CSS__) {
  require('./Floater.scss');
}

function isTargetContained(clickTarget, container) {
  return container && (
    clickTarget === container ||
    !document.contains(clickTarget) ||
    container.contains(clickTarget)
  );
}

const propTypes = {
  children: { node: true },
  isOpen: { bool: true, isRequired: true },
  position: { oneOf: Object.keys(ATTACHMENT_MAP), default: 'bottom' },
  target: { string: true, isRequired: true },
  onClose: { func: true },
};

export class Floater extends Component {
  static propTypes = propTypes;

  componentWillMount() {
    this.handleDocumentClick = ::this.handleDocumentClick;
  }

  componentDidMount () {
    this.handleVisibility();
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.getProps();

    if (isOpen !== prevProps.isOpen) {
      this.handleVisibility();
    } else if (this._element) {
      this.updateTether();
    }
  }

  componentWillUnmount() {
    this.hide();
  }

  getProps() {
    const {
      position = propTypes.position.default,
      ...rest,
    } = this.props;

    return {
      position,
      ...rest,
    };
  }

  getTetherConfig() {
    return {
      constraints: [
        { to: 'scrollParent', attachment: 'together' },
      ],
      ...ATTACHMENT_MAP[this.getProps().position],
      ...this.getProps(),
      classPrefix: 'ax-floater-',
      element: this._element,
      target: this._target,
    };
  }

  addDocumentListener() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  removeDocumentListener() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick({ target }) {
    if (isTargetContained(target, this._element) ||
        isTargetContained(target, this._target)) {
      return;
    }

    this.hide();
  }

  handleVisibility() {
    const { isOpen } = this.getProps();

    if (isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    const { onClose, target } = this.getProps();

    this._target = document.getElementById(target);
    this._element = document.createElement('div');
    document.body.appendChild(this._element);
    this._tether = new Tether(this.getTetherConfig());
    this.renderIntoSubtree();

    if (onClose) {
      this.addDocumentListener();
    }
  }

  hide() {
    const { onClose } = this.getProps();

    this.removeDocumentListener();

    if (this._element) {
      document.body.removeChild(this._element);
      ReactDOM.unmountComponentAtNode(this._element);
    }

    if (this._tether) {
      this._tether.destroy();
    }

    delete this._tether;
    delete this._target;
    delete this._element;

    if (onClose) {
      onClose();
    }
  }

  renderIntoSubtree() {
    const { children } = this.getProps();

    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      <div className="ax-floater">
        { children }
      </div>,
      this._element,
      () => this.updateTether(),
    );
  }

  updateTether() {
    this._tether.setOptions(this.getTetherConfig());
    this._tether.position();
  }

  render() {
    return null;
  }
}

export default enhance(Floater)(addPropTypes());
