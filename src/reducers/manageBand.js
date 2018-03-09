export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: [...state.bands, action.payload] }
    default:
      return state;
  }
};
