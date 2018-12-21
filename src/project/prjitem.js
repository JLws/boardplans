import React, { Component } from 'react';
import './Project.css';

class Project extends React.Component {
	constructor ( props ) {
		super( props );
		this.state = {
			name: 'new project',
			skillList: [ 'Hello' ],
			showList: false
		};

		this.onShowList = this.onShowList.bind(this);
	}

	onShowList () {
		this.setState( prevState => ( { showList: !prevState.showList } ) );
	}

	render () {
		const state = this.state;
		return (
			<div className="project">
				<h3 className="header" onClick={this.onShowList}>{state.name}</h3>
				{ state.showList &&
					<ul className="skills-list">
					{state.skillList.map( ( name ) => <li>{name}</li> )}
					</ul>
				}
			</div>
		);
	}
}

export default Project;