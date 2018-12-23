let nextProjectId = 0;

export const addProject = name => ({
	type: 'ADD_PROJECT',
	id: nextProjectId++,
	name
});

export const selectProject = id => ({
	type: 'SELECT_PROJECT',
	id
});