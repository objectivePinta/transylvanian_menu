import React, {Component, PropTypes} from 'react';

class TextInput extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div classNameName="form-group">
        <label htmlFor={this.props.id}>{this.props.caption}</label>
        <input type="text" value={this.props.value} onChange={this.props.onChange} className="form-control"
               name={this.props.name} id={this.props.id}/>
      </div>);
  }

}

TextInput.propTypes = {
  id:PropTypes.object,
  caption:PropTypes.string,
  value:PropTypes.string,
  onChange:PropTypes.func,
  name:PropTypes.string,
};

export default TextInput;




