import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import InfiniteGrid from 'react-infinite-grid';
import Attraction from './Attraction';
import * as placesActions from '../../actions/placesActions'
import * as attractionActions from '../../actions/attractionActions';
import SelectedAttractions from './SelectedAttractions';

import {bindActionCreators} from 'redux';

class TourPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      totalPrice:0,
      totalDuration:0
    }
  }

  render() {


    var attractions = this.props.places.map((t, index) =>
      <Attraction name={t.name}
                  address={t.address}
                  img={t.img}
                  description={t.description}
                  key={t.id } index={index}
                  myFunc={this.onSelect}/>);
    var selectedAttractions = this.props.selectedAttractions.map(attraction =>
      <p>{attraction.name}</p>);


    return (
      <div className="container-fluid featurette-divider">
        <h1>Total duration: {this.state.totalDuration} costs: {this.state.totalPrice}</h1>
        <div className="row bg-color-main">
          {attractions}
        </div>
       <SelectedAttractions selectedAttractions={this.props.selectedAttractions}/>
      </div>
    );
  }

  componentDidLoad() {
    dispatch(this.props.actions.loadPlaces);
  }

  onSelect(index) {
    this.props.attractionActions.selectAttraction(this.props.places[index]);
    if (this.props.selectedAttractions.length > 0) {
      console.log(this.props.selectedAttractions.map(t => t.price));
      this.setState({totalPrice: this.props.selectedAttractions.map(t => t.price).reduce((prev, cur) => prev + cur)});
      this.setState({totalDuration: this.props.selectedAttractions.map(t => t.time).reduce((prev, cur) => prev + cur)});
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    places: state.places,
    selectedAttractions: state.attractions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(placesActions, dispatch),
    attractionActions: bindActionCreators(attractionActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TourPage);
