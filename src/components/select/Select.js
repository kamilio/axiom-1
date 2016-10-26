import React, { Component } from 'react';
import { v4 } from 'uuid';
import omit from 'lodash/omit';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import { buildSelectableItems, defaultInputDisplayValue } from './_utils';
import Floater from '../floater/Floater';
import Icon from '../icon/Icon';
import TextInput from '../form/TextInput';
import SelectList from '../select/SelectList';

if (__INCLUDE_CSS__) {
  require('./Select.scss');
}

const keyCodes = {
  ENTER: 13,
  ESC: 27,
  SPACE: 32,
  UP: 38,
  DOWN: 40,
};

const propIgnoreList = [
  'displayValue', 'hideSelected', 'identifier', 'items', 'multiselect', 'selection',
  'inputDisplayValue', 'onOpen', 'onClose', 'onSelect',
];

const propTypes = {
  displayValue: { func: true },
  hideSelected: { bool: true, default: false },
  identifier: { func: true },
  inputDisplayValue: { func: true },
  items: { array: true, isRequired: true },
  maxHeight: { number: true, default: 200 },
  multiselect: { bool: true, default: false },
  noItemsText: { string: true },
  selection: { any: true },
  onClose: { func: true },
  onOpen: { func: true },
  onSelect: { func: true, required: true },
};

export class Select extends Component {
  static propTypes = propTypes;

  componentWillMount() {
    this.setState({
      activeIndex: -1,
      filterText: '',
      id: `select-${v4()}`,
      isOpen: false,
      scrollToActiveIndex: false,
    });
  }

  getProps() {
    const {
      displayValue = (item) => item,
      identifier = (item) => item,
      inputDisplayValue = defaultInputDisplayValue,
      maxHeight = propTypes.maxHeight.default,
      noItemsText = 'No items to select',
      onOpen = () => {},
      onClose = () => {},
      ...rest,
    } = this.props;

    return {
      ...rest,
      displayValue,
      identifier,
      inputDisplayValue,
      maxHeight,
      noItemsText,
      onOpen,
      onClose,
    };
  }

  getInputDisplayValue() {
    const { filterText, isOpen } = this.state;
    const { inputDisplayValue, selection } = this.getProps();

    if (isOpen) {
      return filterText;
    }

    if (!selection || (Array.isArray(selection) && selection.length === 0)) {
      return '';
    }

    return inputDisplayValue(this.getProps(), this.state) || '';
  }

  getSelection() {
    const { multiselect, selection } = this.getProps();
    return multiselect && !Array.isArray(selection)
      ? (selection ? [selection] : [])
      : selection;
  }

  hasSelection() {
    const { multiselect } = this.getProps();
    const selection = this.getSelection();
    return multiselect ? selection.length : !!selection;
  }

  close() {
    const { onClose } = this.getProps();
    this.setState({ isOpen: false });
    onClose();
  }

  open() {
    const { onOpen } = this.getProps();
    this.setState({ isOpen: true });
    onOpen();
  }

  toggle() {
    const { isOpen } = this.state;

    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  handleItemClick(item) {
    const { multiselect, onSelect } = this.getProps();
    const { isSelected, value } = item;

    onSelect(isSelected ? this.deselect(value) : this.select(value), value);

    if (!multiselect) {
      this.close();
    }
  }

  deselect(value) {
    const { identifier, multiselect } = this.getProps();
    const selection = this.getSelection();

    return multiselect
      ? selection.filter((selectedItem) => identifier(selectedItem) !== identifier(value))
      : null;
  }

  select(value) {
    const { multiselect } = this.getProps();
    const selection = this.getSelection();

    return multiselect
      ? [ ...selection, value ]
      : value;
  }

  handleKeyDown(keyCode, items) {
    const { activeIndex, isOpen } = this.state;

    switch (keyCode) {
    case keyCodes.SPACE:
    case keyCodes.ENTER:
      if (isOpen) {
        this.handleItemClick(items[activeIndex]);
      } else {
        this.open();
      }
      break;
    case keyCodes.ESC:
      this.close();
      break;
    case keyCodes.UP:
      this.open();
      this.setActiveIndex(activeIndex - 1 < 0 ? (items.length - 1) : (activeIndex - 1));
      break;
    case keyCodes.DOWN:
      this.open();
      this.setActiveIndex(activeIndex + 1 >= items.length ? 0 : (activeIndex + 1));
      break;
    default:
      break;
    }
  }

  setActiveIndex(activeIndex, scrollToActiveIndex = true) {
    this.setState({
      activeIndex,
      scrollToActiveIndex,
    });
  }

  render() {
    const { id, isOpen, scrollToActiveIndex } = this.state;
    const { maxHeight, noItemsText, ...rest } = this.getProps();
    const items = buildSelectableItems(this.getProps(), this.state);

    return (
      <div
          className="ax-select"
          id={ id }
          onFocus={ ::this.open }
          onKeyDown={ ({ which }) => this.handleKeyDown(which, items) }>
        <TextInput
            { ...omit(rest, propIgnoreList) }
            onChange={ (event) => this.setState({ filterText: event.target.value }) }
            value={ this.getInputDisplayValue() }>
          <Icon name={ isOpen ? 'chevron-up' : 'chevron-down' } size="small" />
        </TextInput>

        <Floater
            isOpen={ isOpen }
            onClose={ ::this.close }
            position="bottom"
            target={ id }
            withTip={ true }>
          <SelectList
              items={ items }
              maxHeight={ maxHeight }
              noItemsText={ noItemsText }
              onItemClick={ ::this.handleItemClick }
              onItemHover={ ::this.setActiveIndex }
              scrollToActiveIndex={ scrollToActiveIndex } />
        </Floater>
      </div>
    );
  }
}

export default enhance(Select)(
  addPropTypes('global'),
  addClassName('global'),
);
