import React, {Component} from 'react';
import SelectedAttractionRow from './SelectedAttractionRow';

class SelectedAttractions extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const attractions = this.props.selectedAttractions.map(attraction =>

          <SelectedAttractionRow attraction={attraction}/>);

    return (
     this.props.selectedAttractions.length>0 &&  <div className="container-fluid bg-color-menu">
        <h2>Here's your tour menu!</h2>
        <p>Our amazing guides are eager to show you all these wonders! Enjoy! Peace & Love!</p>
        <table className="table">
          <thead>
          <tr>
            <th>Name of the place</th>
            <th>Duration of the visit</th>
            <th>How it looks</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {attractions}
          </tbody>
        </table>
      </div> );

  }

}

export default SelectedAttractions;
