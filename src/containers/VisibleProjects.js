import React from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../actions';
import ProjectList from '../components/Project/ProjectList';

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
	selectProject: id => dispatch( selectProject( id ) )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectList);