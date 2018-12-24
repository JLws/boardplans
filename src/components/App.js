import React from 'react';
import VisibleProjects from '../containers/VisibleProjects';
import Menu from './Menu/Menu'

const App = () => (
	<>
		<div className="main-board">
			<VisibleProjects />
		</div>
		<nav className="control-menu">
			<Menu />
		</nav>
	</>
);

export default App;