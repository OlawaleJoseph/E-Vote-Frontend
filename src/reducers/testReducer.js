import initialState from './state';


const testReducer = (state = initialState, action) => {
  switch (action.types) {
    default:
      return state;
  }
}

export default testReducer;