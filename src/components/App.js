import React,{Component} from 'react';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-color-main">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
