import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class JobstarErrors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError:true};

  }
  render() {
    if (this.state.hasError){
      return(
        <div>
          <h2>ERROR</h2>
          <p>Something wrong here!...</p>
        </div>
      )
    }
    return this.props.children;
  }
}

JobstarErrors.propTypes = {
  children: PropTypes.array
}