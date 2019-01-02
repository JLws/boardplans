import React from 'react';
import VisibleProjects from '../containers/VisibleProjects';
import VisiblePanel from '../containers/VisiblePanel';
import Menu from './Menu/Menu';


const App = () => (
	<>
		<div className="main-board">
			<VisibleProjects />

		</div>
		<nav className="control-menu">
			<Menu />
			<VisiblePanel />
		</nav>
	</>
);

export default App;