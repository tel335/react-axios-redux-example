/**
 * action:
 * {
 *  'type': 'ADD',
 *  'movie': {...}
 * }
 * @param {*} previousState 
 * @param {*} action 
 */
function moviesReducer (previousState = [], action) {
    switch (action.type) {
        case 'ADD':
            return [ ...previousState, action.movie ]
        default:
            return previousState
    }
}

export default moviesReducer