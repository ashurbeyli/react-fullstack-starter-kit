import React, {Component} from 'react';

import { Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getHomeData } from '../../actions/homeActions';

const MESSAGE = 'This is React Full-Stack Starter Kit by Jeyhun Ashurbayov';

export class Home extends Component {

  componentDidMount() {
    this.props.getHomeData(MESSAGE);
  }

  render () {
    const { message } = this.props;
    return (
      <div className="container">
        <Jumbotron>
          <h1>Hello World</h1>
          <p>{message}</p>
        </Jumbotron>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.homeReducer.message };
}

export default connect(mapStateToProps, { getHomeData })(Home);