const application = (state = 'IDLE', action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return action.newState;
    default:
      return state;
  }
};

export default application;
