import React, {Component,PropTypes} from 'react';

class SelectedAttractionRow extends Component {

  constructor(props, context) {
    super(props, context);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event) {
    this.props.handleChange(event.target.name);
  }

  render() {
    return (
      <tr className="success">
        {this.props.parent !== 'TourPage'
        &&
       <td> <button onClick={this.onSelect} name={this.props.id} className="big-checkbox"
               type="button"> Delete me</button></td>}
        <td>{this.props.attraction.name}</td>
        <td>{this.props.attraction.durationOfVisit}</td>
        {this.props.parent === 'TourPage' && <td><img className="img-thumbnail" alt="Cinque Terre" width="30%" height="30%" src={this.props.attraction.img}/></td>}

        <td>{this.props.attraction.price}€</td>
      </tr>
    );
  }

}
SelectedAttractionRow.propTypes = {
  parent:PropTypes.string,
  id:PropTypes.number,
  attraction:PropTypes.object,
};

export default SelectedAttractionRow;


