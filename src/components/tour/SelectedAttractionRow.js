import React, {Component} from 'react';

class SelectedAttractionRow extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <tr class="success">
        <td>{this.props.attraction.name}</td>
        <td>{this.props.attraction.time}</td>
        <td><img className="img-thumbnail" alt="Cinque Terre" width="30%" height="30%" src={this.props.attraction.img} /></td>
        <td>{this.props.attraction.price}€</td>
      </tr>
    );
  }

}

export default SelectedAttractionRow;


