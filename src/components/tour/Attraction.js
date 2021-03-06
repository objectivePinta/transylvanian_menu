import React, {Component,PropTypes} from 'react';

class Attraction extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelect(event.target.name);
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="andrei-s-border">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8">
                <img className="img-rounded" alt="Cinque Terre" width="100%" height="100%" src={this.props.img}/>
              </div>
              <div className="col-sm-4">
                <kbd>{this.props.name}</kbd>
              </div>
              <div className="col-sm-12">
                <label> <span className="glyphicon glyphicon-map-marker" /></label><u>{this.props.address}</u>
              </div>
              <div className="col-sm-12">
                <p className="lead">{this.props.description}</p>
              </div>
              <div className="col-sm-12">
                <b>I want to visit this</b><input onChange={this.handleChange} name={this.props.index} className="big-checkbox"
                                                  type="checkbox"/>
              </div>

            </div>
          </div>
        </div>
      </ div >);
  }
}
Attraction.propTypes = {
  onSelect:PropTypes.func,
  parent:PropTypes.string,
  img:PropTypes.string,
  name:PropTypes.string,
  address:PropTypes.string,
  description:PropTypes.string,
  index:PropTypes.number,
};

export default Attraction;

