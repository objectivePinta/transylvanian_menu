import React, {Component} from 'react';

class TextInput extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div classNameName="form-group">
        <label for={this.props.id}>{this.props.caption}</label>
        <input type={this.props.type} value={this.props.value} onChange={this.props.onChange} className="form-control"
               name={this.props.id} id={this.props.id}/>
        <input type="submit" disabled={loading} value={loading? 'saving..':'Save'} className="btn btn-primary" onClick={onSave}/>
      </div>);
  }

}

export default TextInput;

// <div className={WrapperClass}>
//   <label htmlFor={name}>{label}</label>
//   <div className="field">
//     <input
//       type="text"
//       name={name}
//       className="form-control"
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}/>
//     {error&&<div className="alert alert-danger">{error}</div>}
//   </div>
// </div>
