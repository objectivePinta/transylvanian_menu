import React, {Component} from 'react';
import TextInput from './TextInput';

class NewAttraction extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      attraction: {name:'',address:'',img:'',description:'',price:'',durationOfVisit:''} ,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    let attraction = this.state.attraction;
    attraction[field] = event.target.value;
    console.log(this.state.attraction);
    return this.setState({attraction: attraction});
  }

  render() {

    return (
      <form className="form-group">
        <TextInput id="name" name="name" caption="Name of attraction" onChange={this.onChange} type="text"
                   value={this.state.attraction.name}/>
        <TextInput id="address" name="address" caption="Address of attraciton" onChange={this.onChange} type="text"
                   value={this.state.attraction.address}/>
        <TextInput id="img" name="img" caption="Image url" onChange={this.onChange} type="text"
                   value={this.state.attraction.img}/>
        <TextInput id="description" name="description" caption="Description of attraction" onChange={this.onChange}
                   type="text"
                   value={this.state.attraction.description}/>
        <TextInput id="price" name="price" caption="Price" onChange={this.onChange} type="number"
                   value={this.state.attraction.price}/>
        <TextInput id="durationOfVisit" name="durationOfVisit" caption="Duration of visit(in minutes)"
                   onChange={this.onChange} type="number"
                   value={this.state.attraction.durationOfVisit} />
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }

}

export default NewAttraction;

