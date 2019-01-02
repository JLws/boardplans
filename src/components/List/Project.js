import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Project = ({ onClick, name, select }) => (
	<div className={ select ? "project selected" : "project" } onClick = { onClick } >
		<h3 className="header">{name}</h3>
	</div>
);

Project.propTypes = {
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	select: PropTypes.bool.isRequired
};

export default Project;