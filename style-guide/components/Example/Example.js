import React, { Children, Component, PropTypes } from 'react';
import { Heading } from 'bw-axiom';
import { filterRender } from '../../utils/example-filter';
import ExampleBox from './ExampleBox';
import Snippet from './Snippet';

export default class Example extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name, children } = this.props;

    return (
      <ExampleBox>
        <Heading style="title">{ name }</Heading>
        { Children.toArray(children).reduce((children, child) => {
          if (child.type === Snippet && !child.props.renderSkip) {
            children.push(filterRender(child.props.children));
          }

          children.push(child);

          return children;
        }, []) }
      </ExampleBox>
    );
  }
}
