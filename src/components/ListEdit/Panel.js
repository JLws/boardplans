import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import './style.css';

const Panel = ({ projects, toggleChild }) => (
	<div className="projects-list">
		{
			projects.map( project => 
				<Project key={project.id}
					{...project}
					onClick = { () => toggleChild( project.id ) }
				/>
			)
		}
	</div>
);

Panel.propTypes = {
	projects: PropTypes.arrayOf( PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		childs: PropTypes.array.isRequired,
		isChild: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	toggleChild: PropTypes.func.isRequired
};

export default Panel;