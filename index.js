export default store => next => action => {
    console.time(action.type);

    // this will result in a re-render
    const result = next(action);

    // how long did the render take?
    console.timeEnd(action.type);

    return result;
}