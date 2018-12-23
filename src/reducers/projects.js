const projects = ( state = [ { id: 0, name: 'Project #1', select: false } ], action ) => {
	switch ( action.type ) {
		case 'ADD_PROJECT':
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					select: false
				}
			];
		case 'SELECT_PROJECT':
			return state.map( project =>
				( project.id === action.id )
				? {...project, select: !project.select}
				: project
			);
		default:
			return state;
	}
}

export default projects;