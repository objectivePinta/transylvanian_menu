import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as attractionActions from '../../actions/attractionActions';
import SelectedAttractions from '../tour/SelectedAttractions';

import TextInput from './TextInput';

class NewAttraction extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      attraction: {name: '', address: '', img: '', description: '', price: '', durationOfVisit: ''},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    let attraction = this.state.attraction;
    attraction[field] = event.target.value;
    return this.setState({attraction: attraction});
  }

  onSelect(id) {
    this.props.attractionActions.deleteAttraction(id);
  }

  onSubmit() {
    return this.setState({
      attraction: {
        name: '',
        address: '',
        img: '',
        description: '',
        price: '',
        durationOfVisit: ''
      }
    });
  }

  render() {
    return (
      <div>
      <div method="post" className="form-group">
        <TextInput id="name" name="name" caption="Name of attraction" onChange={this.onChange} type="text"
                   value={this.state.attraction.name}/>
        <TextInput id="address" name="address" caption="Address of attraction" onChange={this.onChange} type="text"
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
                   value={this.state.attraction.durationOfVisit}/>
        <button type="submit" onClick={event => {
          event.stopPropagation();
          this.props.attractionActions.postNewAttraction(Object.assign({}, this.state.attraction));
          this.onSubmit();
        }} className="btn btn-default">Save
        </button>
      </div>
        <SelectedAttractions handleChange={this.onSelect} parent={'NewAttraction'} selectedAttractions={this.props.places}/>
      </div>
    );
  }

}

NewAttraction.propTypes = {
attractionActions:PropTypes.object,
  places:PropTypes.array,
};

function mapStateToProps(state, ownProps) {
  return {
    places: state.places,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attractionActions: bindActionCreators(attractionActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewAttraction);

