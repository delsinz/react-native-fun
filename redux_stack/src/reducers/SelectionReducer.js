export default (state = null, action) => { // If state is undefined, it's default to null
    console.log(action);
    // Reducer boilerplate
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;  // If something unrecognizable, then return the last state.
    }
};
