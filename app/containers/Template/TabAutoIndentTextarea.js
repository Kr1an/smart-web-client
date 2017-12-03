import React, { PropTypes } from 'react';
import Textarea from 'react-textarea-autosize';


class TabAutoIndentTextarea extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  onKeyUp = (event) => {
    const textarea = event.target;
    if (event.keyCode === 13) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const sliced = textarea.value.slice(0, start);
      const numOfTabsOnLastLine = sliced.match(/\n(\t+).*$/);
      const count = numOfTabsOnLastLine ? numOfTabsOnLastLine[1].length : 0;
      textarea.value = [textarea.value.slice(0, textarea.selectionStart), `\n${new Array(count).fill('\t').join('')}`, textarea.value.slice(textarea.selectionStart)].join('');

      textarea.selectionStart = start + count + 1;
      textarea.selectionEnd = end + count + 1;
      this.props.onChange(textarea.value);
    }
    if (event.keyCode === 9) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = [textarea.value.slice(0, textarea.selectionStart), '\t', textarea.value.slice(textarea.selectionStart)].join('');

      textarea.selectionStart = start + 1;
      textarea.selectionEnd = end + 1;

      this.props.onChange(textarea.value);
      event.stopPropagation();
    }
  }
  onKeyDown = (e) => {
    if (e.keyCode === 9 || e.keyCode === 13) {
      e.preventDefault();
    }
  }
  render() {
    return <Textarea onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} spellCheck={false} value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)} />;
  }
}

export default TabAutoIndentTextarea;
