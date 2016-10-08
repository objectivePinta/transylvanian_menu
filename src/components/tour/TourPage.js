import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Attraction from './Attraction';
import * as placesActions from '../../actions/placesActions';
import * as attractionActions from '../../actions/attractionActions';
import SelectedAttractions from './SelectedAttractions';


class TourPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      totalPrice: 0,
      totalDuration: 0
    };
  }


  componentDidLoad() {
    this.props.actions.loadAllAttractions();
  }

  onSelect(index) {
    this.props.attractionActions.selectAttraction(this.props.places[index]);
    if (this.props.selectedAttractions.length > 0) {
      this.setState({totalPrice: this.props.selectedAttractions.map(t => t.price).reduce((prev, cur) => prev + cur)});
      this.setState({totalDuration: this.props.selectedAttractions.map(t => t.time).reduce((prev, cur) => prev + cur)});
    }
  }

  render() {
    let attractions = this.props.places.map((t, index) =>
      <Attraction name={t.name}
                  address={t.address}
                  img={t.img}
                  description={t.description}
                  key={t.id} index={index}
                  onSelect={this.onSelect}/>);
    let selectedAttractions = this.props.selectedAttractions.map(attraction =>
      <p key={attraction.id}>{attraction.name}</p>);


    return (
      <div className="container-fluid featurette-divider">
        <h1>Total duration: {this.state.totalDuration} costs: {this.state.totalPrice}</h1>
        <div className="row bg-color-main">
          {attractions}
        </div>
        <SelectedAttractions parent={'TourPage'} selectedAttractions={this.props.selectedAttractions}/>
      </div>
    );
  }


}

TourPage.propTypes = {
  places: PropTypes.array,
  actions: PropTypes.object,
  attractionActions: attractionActions,
  selectedAttractions: PropTypes.array,
};

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
