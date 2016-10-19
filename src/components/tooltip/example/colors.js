import React, { Component } from 'react';
import { colorPalette } from '../../../design-patterns/colors/_vars';
import LabelGroup from '../../label/LabelGroup';
import Label from '../../label/Label';
import Tooltip from '../Tooltip';
import Example from 'style-guide/components/Example/Example';

export default class TooltipExample extends Component {
  render() {
    return (
      <Example name="Colours">
        <LabelGroup>
          { colorPalette.map((colors) =>
            colors.map(({ name }) => [
              <Label color="grey" id={ name } key={ `${name}-label` }>{ name }</Label>,
              <Tooltip
                  color={ name }
                  isOpen={ true }
                  key={ `${name}-tooltip` }
                  position="bottom"
                  target={ name }>{ name }</Tooltip>,
            ])
          ) }
        </LabelGroup>
      </Example>
    );
  }
}
