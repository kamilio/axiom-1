import React, { Component, PropTypes } from 'react';
import SelectListItem from '../select/SelectListItem';
import SelectListItemOption from '../select/SelectListItemOption';

if (__INCLUDE_CSS__) {
  require('./SelectList.scss');
}

export default class SelectList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    maxHeight: PropTypes.number.isRequired,
    noItemsText: PropTypes.string.isRequired,
    scrollToActiveIndex: PropTypes.bool.isRequired,
    onItemClick: PropTypes.func.isRequired,
    onItemHover: PropTypes.func.isRequired,
  };

  render() {
    const {
      items,
      maxHeight,
      noItemsText,
      onItemClick,
      onItemHover,
      scrollToActiveIndex,
    } = this.props;

    const style = { maxHeight };

    return (
      <div className="ax-select__list-container">
        <ul className="ax-select__list" style={ style }>

          { do { if (items.length === 0) {
            <SelectListItem>
              { noItemsText }
            </SelectListItem>;
          } else {
            items.map((item, index) =>
              <SelectListItemOption
                  index={ index }
                  item={ item }
                  key={ index }
                  onClick={ onItemClick }
                  onHover={ onItemHover }
                  scrollToActiveIndex={ scrollToActiveIndex } />
            );
          } } }

        </ul>
      </div>
    );
  }
}
