import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

export default class GridCell extends Component {
  static propTypes = {
    children: PropTypes.node,
    fill: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    fit: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    full: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    shrink: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    style: PropTypes.object,
    vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    width: PropTypes.number,
  };

  render() {
    const {
      children,
      fill,
      fit,
      full,
      width,
      shrink,
      style,
      vAlign,
      ...rest
    } = this.props;

    const classes = classnames('ax-grid__cell', {
      'ax-grid__cell--top': vAlign === 'top',
      'ax-grid__cell--middle': vAlign === 'middle',
      'ax-grid__cell--bottom': vAlign === 'bottom',
      'ax-grid__cell--fill': fill === true,
      'ax-grid__cell--fit': fit === true,
      'ax-grid__cell--full': full === true,
      'ax-grid__cell--percent': width,
      'ax-grid__cell--shrink': shrink === true,
      [`ax-grid__cell--fit--${fit}`]: fit && fit !== true,
      [`ax-grid__cell--fill--${fill}`]: fill && fill !== true,
      [`ax-grid__cell--full--${full}`]: full && full !== true,
      [`ax-grid__cell--shrink--${shrink}`]: shrink && shrink !== true,
    });

    const styles = {
      ...style,
      width: width && `${Math.max(0, Math.min(width, 100))}%`,
    };

    return (
      <Base { ...rest } className={ classes } style={ styles }>
        { children }
      </Base>
    );
  }
}
