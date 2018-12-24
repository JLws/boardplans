let id = 0

const projects = ( state = [], action ) => {
	switch ( action.type ) {
		case 'ADD_PROJECT':
			return [
				...state,
				{
					id: id++,
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