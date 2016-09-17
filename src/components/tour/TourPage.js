import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import InfiniteGrid from 'react-infinite-grid';
import Attraction from './Attraction';
import * as placesActions from '../../actions/placesActions';
import {bindActionCreators} from 'redux';

class TourPage extends Component {


  render() {


    var items = [];
    for (var i = 0; i <this.props.places.length; i++) {
      console.log(i+":"+this.props.places.length);
      items.push(<Attraction name={this.props.places[i].name}
                             address={this.props.places[i].address}
                             img={this.props.places[i].img}
                             description={this.props.places[i].description}
                             index={i} key={this.props.places[i].id + i}/>);

    }
    console.log("items:"+items.length);

    return (
      <div>
        <InfiniteGrid wrapperHeight={1000} entries={items}/>
      </div>
    );
  }

  componentDidLoad() {
    dispatch(this.props.actions.loadPlaces);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    places: state.places
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(placesActions, dispatch),
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(TourPage);
