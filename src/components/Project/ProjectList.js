import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
const ProjectList = ({ projects, selectProject }) => (
	<>
		{
			projects.map( project =>
				<Project
					key={project.id}
					{...project}
					onClick = { () => selectProject( project.id ) }
				/>
			)
		}
	</>
);

ProjectList.propTypes = {
	projects: PropTypes.arrayOf( PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		select: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	selectProject: PropTypes.func.isRequired
};

export default ProjectList;