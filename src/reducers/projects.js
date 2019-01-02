let id = 0

const projects = ( state = [], action ) => {
	switch ( action.type ) {
		case 'ADD_PROJECT':
			return [
				...state,
				{
					id: id++,
					name: action.name,
					select: false,
					isChild: false,
					childs: []
				}
			];
		case 'ADD_CATEGORY':
			return state.map ( project =>
				( project.id === action.id )
				? {...project, childs: [...project.childs, action.name] }
				: project
				);
		case 'SELECT_PROJECT':
			return state.map( project =>
				( project.id === action.id )
				? {...project, select: !project.select}
				: project
			);
		case 'TOGGLE_CHILD':
			return state.map( project =>
				( project.id === action.id )
				? {...project, isChild: !project.isChild}
				: project
			);
		case 'DELETE_PROJECTS':
			return [];
		default:
			return state;
	}
}



export default projects;