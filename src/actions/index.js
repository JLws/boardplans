function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const addProject = makeActionCreator('ADD_PROJECT', 'name')
export const addCategory = makeActionCreator('ADD_CATEGORY', 'id', 'name')
export const selectProject = makeActionCreator('SELECT_PROJECT', 'id')
export const toggleChild = makeActionCreator('TOGGLE_CHILD', 'id')
export const deleteProjects = makeActionCreator('DELETE_PROJECTS')
export const deleteCategory = makeActionCreator('DELETE_CATEGORY', 'id', 'child')