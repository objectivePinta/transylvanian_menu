import React, {Component} from 'react';
import TextInput from './TextInput';

class NewAttraction extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: 'test',
      caption: 'test',
      type: 'text',
      value: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const field= event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course:course});
  }

  render() {

    return (
      <form className="form-group">
        <TextInput id={this.state.id} caption={this.state.caption} onChange={this.onChange} type={this.state.type}
                   value={this.state.value}/>

        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }

  onChange(event) {
    console.log(event);
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }
}

export default NewAttraction;

