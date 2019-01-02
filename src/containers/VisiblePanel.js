import React from 'react';
import { connect } from 'react-redux';
import Panel from '../components/ListEdit/Panel';
import { toggleChild } from '../actions';

const mapStateToProps = state => ({
	projects: state.projects
});

const mapDispatchToProps = dispatch => ({
	toggleChild: id => dispatch( toggleChild( id ) )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Panel);