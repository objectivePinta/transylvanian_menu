import React, {Component} from 'react';

class Attraction extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <label>Name:</label>{this.props.name}
        </li>
        <li className="list-group-item">
          <label>Address:</label>{this.props.address}
        </li>
        <li className="list-group-item">
          <label>Description:</label>{this.props.description}
        </li>
        <li className="list-group-item">
          <img className="img-rounded" alt="Cinque Terre" width="304" height="236"  src={this.props.img}/>
        </li>
      </ul>);
  }
}


export default Attraction;

