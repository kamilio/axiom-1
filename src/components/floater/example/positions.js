import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Tooltip from '../../tooltip/Tooltip';
import { ATTACHMENT_MAP } from '../_utils';
import CheckBox from '../../form/CheckBox';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Select from '../../select/Select';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Link from '../../typography/Link';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';
import Example from 'style-guide/components/Example/Example';

export default class FloaterDemo extends Component {

  componentWillMount() {
    this.setState({
      position: 'top',
      isVisible: true,
      x: 100,
      y: 100,
    });
  }

  handleDrag(e, { x, y }) {
    this.setState({ x, y });
  }

  render() {
    const { position, isVisible, x, y } = this.state;

    const scrollBoxStyles = {
      position: 'relative',
      height: 300,
      border: '1px dashed #000',
      overflow: 'auto',
    };

    const dragBoxStyles = {
      position: 'absolute',
    };

    return (
      <Example name="Demo">
        <Paragraph>
          <Link href="http://tether.io">Tether</Link> is used to handle all of
          the posiitioning and collision behaviour. Floater is a wrapping component
          to handle all of the DOM/React quirks that Tether requires. The
          most common property you will likely need is the `position` property
          but Floater can accept all of Tether config.
        </Paragraph>

        <Paragraph>
          This is mainly used internally for components like the Tooltips
          Select menu.
        </Paragraph>
        <Grid>
          <GridCell>
            <div style={ scrollBoxStyles }>
              <Draggable onDrag={ ::this.handleDrag } position={ { x, y } }>
                <DemoBox id="target" style={ dragBoxStyles }>
                  Drag me
                </DemoBox>
              </Draggable>

              <Tooltip
                  data-target-positon={ `${x}${y}` }
                  isOpen={ isVisible }
                  position={ position }
                  target="target">
                { `"${position}"` }
              </Tooltip>
            </div>
          </GridCell>

          <GridCell>
            <Heading level={ 5 }>Position</Heading>
            <Select
                items={ Object.keys(ATTACHMENT_MAP) }
                onSelect={ (position) => this.setState({ position }) }
                placeholder="Select a position"
                selection={ position } />

            <Heading level={ 5 }>Visibility</Heading>
            <CheckBox
                checked={ isVisible }
                onChange={ () => this.setState({ isVisible: !isVisible }) }>
              Show tooltip?
            </CheckBox>
          </GridCell>
        </Grid>
      </Example>
    );
  }
}
