import React from 'react';

import TagStyles from "./style.module.css"

export class TagPreview extends React.Component {
  render() {
    return React.createElement('ul', {},
      this.props.value.map(function(value, index) {
        return React.createElement('li', {
          className: TagStyles.tag + " " + TagStyles.tag_overlay,
          key: index
        }, value)
      })
    )
  };
}
export default TagPreview