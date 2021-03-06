import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = state => {
  return {
    count: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
	  
	  /*handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
  handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),*/
	checkPageRefreshed:   () => dispatch({ type: 'RELOADED' }),
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);