import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import InfiniteGrid from 'react-infinite-grid';
import Attraction from './Attraction';
import * as placesActions from '../../actions/placesActions'
import * as attractionActions from '../../actions/attractionActions';

import {bindActionCreators} from 'redux';

class TourPage extends Component {
 constructor(props,context) {
   super(props,context);
   this.onSelect=this.onSelect.bind(this);
 }

  render() {


    var attractions = this.props.places.map(t =>
      <Attraction name={t.name}
                  address={t.address}
                  img={t.img}
                  description={t.description}
                  key={t.id }
                  myFunc={this.onSelect} />);
    var selectedAttractions =  this.props.selectedAttractions.map(attraction =>
      <p>{attraction}</p> );


    return (
      <div className="container-fluid featurette-divider">
        <div className="row">
          {attractions}
        </div>
        {this.props.selectedAttractions.length>0 && <h1>Here you want to go!</h1>}
        {selectedAttractions}
      </div>
    );
  }

  componentDidLoad() {
    dispatch(this.props.actions.loadPlaces);
  }

  onSelect(name) {
    console.log(name);
    this.props.attractionActions.selectAttraction(name);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    places: state.places,
    selectedAttractions:state.attractions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(placesActions, dispatch),
    attractionActions:bindActionCreators(attractionActions,dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TourPage);
