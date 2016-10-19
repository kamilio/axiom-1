import React, { Component } from 'react';
import Link from '../../typography/Link';
import Paragraph from '../../typography/Paragraph';
import Tooltip from '../Tooltip';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TooltipExample extends Component {
  render() {
    return (
      <Example name="Tooltip">
        <Snippet>
          <Paragraph>
            The Tooltip visbility and positioning is controlled by
            the <Link id="floaterLink" to="/docs/components/floater">Floater</Link> component.
            See additional configuration props there which are passed on from
            the Tooltip component.

            <Tooltip
                isOpen={ true }
                position="top"
                target="floaterLink">Click here to see the Floater</Tooltip>
          </Paragraph>
        </Snippet>
      </Example>
    );
  }
}
